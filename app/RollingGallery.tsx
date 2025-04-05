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
  "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1495103033382-fe343886b671?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506781961370-37a89d6b3095?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1599576838688-8a6c11263108?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1494094892896-7f14a4433b7a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664910706524-e783eed89e71?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503788311183-fa3bf9c4bc32?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const RollingGallery = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}: RollingGalleryProps) => {
  images = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );
  
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
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
    if (screenWidth <= 768) {
      return 'h-[120px] w-[200px]';
    } else if (screenWidth <= 1024) {
      return 'h-[160px] w-[280px]';
    } else if (screenWidth <= 1440) {
      return 'h-[180px] w-[320px]';
    } else {
      return 'h-[200px] w-[350px]';
    }
  };

  return (
    <div className="relative h-[300px] md:h-[600px] w-full overflow-hidden my-3">
      <div
        className="absolute top-0 left-0 h-full w-[48px] z-10"
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,0) 0%, #030303 100%)",
        }}
      />
      <div
        className="absolute top-0 right-0 h-full w-[48px] z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, #030303 100%)",
        }}
      />

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
                {/* Add a container div to correct the image orientation */}
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