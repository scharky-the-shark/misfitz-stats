"use client";

import { useEffect } from "react";
import { initializeMisfitzWebMCP } from "@/lib/webmcp";

export default function WebMCPProvider() {
  useEffect(() => {
    initializeMisfitzWebMCP();
  }, []);

  return null;
}