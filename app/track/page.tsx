"use client";

import { Suspense } from "react";
import TrackContent from "./track-content";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
      <TrackContent />
    </Suspense>
  );
}
