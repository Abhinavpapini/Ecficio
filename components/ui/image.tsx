import Image from "next/image"

export const HoverableImage = ({ className, ...props }) => (
  <Image
    className={`transition-transform transform hover:scale-110 ${className}`}
    {...props}
  />
)