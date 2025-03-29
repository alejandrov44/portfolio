import type { Metadata } from "next";
import environmentVariables from "./environments";

const name = "Alejandro Viana";
const title = `${name} - Portfolio`;
const description = `An online portfolio website created by ${name}, open source with next.js`;
export const url = environmentVariables.baseUrl;

export const defaultMetadata: Metadata = {
  description,
  metadataBase: new URL(url),
  openGraph: { description, images: [{ url: `${url}/portfolio.webp` }], siteName: name, title, type: "website", url },
  robots: { follow: true, index: true },
  title: { default: title, template: "%s | Alejandro Viana" },
};
