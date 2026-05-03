"use client";

import { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";

interface ProfileImageProps {
  src: string;
  alt: string;
  fallbackInitials: string;
}

export function ProfileImage({
  src,
  alt,
  fallbackInitials,
}: ProfileImageProps) {
  const [imgError, setImgError] = useState(false);

  if (imgError || !src) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-full bg-primary/10">
        <span className="text-2xl font-bold text-primary">
          {fallbackInitials}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full rounded-full object-cover"
      onError={() => setImgError(true)}
    />
  );
}
