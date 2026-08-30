"use client";

import { useState } from "react";

import Desktop from "./layouts/Desktop";
import Tablet from "./layouts/Tablet";
import Mobile from "./layouts/Mobile";
import useDeviceType from "@/lib/useDeviceType";

export default function StatsPage() {
const {
  ready,
  isDesktop,
  isTablet
} = useDeviceType();
if (!ready) {
  return null;
}
return (
  <main className="relative min-h-fit bg-[#0b1220] text-white overflow-y-auto">
    {isDesktop && (<Desktop/>)}
    {isTablet && (<Tablet/>)}
    {!isDesktop && !isTablet && (<Mobile/>)}
  </main>
);
}