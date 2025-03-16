import type { Metadata } from "next";
import environmentVariables from "./environments";

const name = "Alejandro Viana";
const title = `${name} - Portfolio`;
const description = `An online portfolio website created by ${name}, open source with next.js`;
export const url = environmentVariables.baseUrl;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(url),
  title: { default: title, template: "%s | Alejandro Viana" },
  description,
  openGraph: { title, description, url, siteName: name, images: [{ url: `${url}/portfolio.webp` }], type: "website" },
  robots: { index: true, follow: true },
};
