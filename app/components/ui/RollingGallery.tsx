import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

const IMGS: string[] = [ 
  "/previous/1.webp", 
  "/previous/2.webp",  
  "/previous/3.webp",
  "/previous/14.webp",
  "/previous/5.webp",
  "/previous/6.webp",
  "/previous/7.webp",
  "/previous/8.webp",
  "/previous/9.webp",
  "/previous/10.webp",
  "/previous/11.webp",
  "/previous/12.webp",
  "/previous/13.webp", 
  "/previous/15.webp",
  
];

const RollingGallery = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}: RollingGalleryProps) => {
  images = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsScreenSizeSm(window.innerWidth <= 768);
      setScreenWidth(window.innerWidth);

      const handleResize = () => {
        setIsScreenSizeSm(window.innerWidth <= 768);
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Dynamic calculation of cylinder dimensions based on screen size
  const getGeometryValues = () => {
    const faceCount = images.length;
    
    // Different cylinder configurations based on screen width
    if (screenWidth <= 768) {
      // Mobile
      const cylinderWidth = 1400;
      const faceWidth = (cylinderWidth / faceCount) * 1.2;
      const radius = cylinderWidth / (2 * Math.PI);
      return { cylinderWidth, faceWidth, radius };
    } else if (screenWidth <= 1024) {
      // Tablet
      const cylinderWidth = 2400;
      const faceWidth = (cylinderWidth / faceCount) * 1.3;
      const radius = cylinderWidth / (2 * Math.PI);
      return { cylinderWidth, faceWidth, radius };
    } else {
      // Laptop and above
      const cylinderWidth = 3800;
      const faceWidth = (cylinderWidth / faceCount) * 1.5;
      const radius = cylinderWidth / (2 * Math.PI);
      return { cylinderWidth, faceWidth, radius };
    }
  };

  const { cylinderWidth, faceWidth, radius } = getGeometryValues();

  // Framer Motion
  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  // Convert rotation -> 3D transform
  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest: { rotateY?: number }) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_: any, info: { offset: { x: number } }) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: any, info: { velocity: { x: number } }) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);

    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  // Calculate angular spacing between images
  const getImageOffset = (index: number) => {
    const faceCount = images.length;
    const anglePerFace = 360 / faceCount;
    
    // Calculate a pure angle with no additional offset
    return anglePerFace * index;
  };

  // Get appropriate image size based on screen width
  const getImageClass = () => {
    return 'h-[200px] w-[350px] object-contain'; // Ensure images maintain their aspect ratio and fit within the defined size
  };

  return (
    <div className="relative h-[300px] md:h-[350px] w-full overflow-hidden mt-1">

      <div className="flex h-full items-center justify-center [perspective:1600px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[300px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {images.map((url, i) => {
            const angle = getImageOffset(i);
            return (
              <div
                key={i}
                className="group absolute flex h-fit items-center justify-center p-[5%] [backface-visibility:hidden]"
                style={{
                  width: `${faceWidth}px`,
                  // Apply transform with corrected positioning
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
              >
                <div style={{ transform: `rotateY(${-angle}deg)` }}>
                  <img
                    src={url}
                    alt={`gallery image ${i+1}`}
                    className={`pointer-events-none rounded-[15px] border-[3px] border-[#d89b1d]/50 object-cover shadow-lg
                            transition-transform duration-300 ease-out group-hover:scale-105
                            ${getImageClass()}`}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;