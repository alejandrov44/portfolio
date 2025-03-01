import { Metadata } from "next";
import HireMe from "@/components/HireMe";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Home() {
  return <HireMe />;
}
