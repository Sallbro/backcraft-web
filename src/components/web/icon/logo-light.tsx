import React, { SVGProps } from "react";
import Image from "next/image";

function LogoLight(props: SVGProps<SVGSVGElement>) {
  return (
    <Image
            src="https://res.cloudinary.com/dtdytcudg/image/upload/v1746209188/Logo_white_md8q7q.png"
            className="absolute inset-0 h-full w-full object-cover"
            fill
            alt="hero-bg-image"
            priority
            placeholder="empty"
          />
  );
}

export default LogoLight;
