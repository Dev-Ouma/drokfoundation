import { TerminalGate } from "@/components/TerminalGate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Access",
  robots: { index: false, follow: false },
};

export default function GatePage() {
  return <TerminalGate />;
}
