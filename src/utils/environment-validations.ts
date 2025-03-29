import { DeploySites } from "./environments";

export const validatDeployTarget = (deployTarget: string): deployTarget is DeploySites => {
  return Object.values(DeploySites).includes(deployTarget as DeploySites);
};

export const validateBaseUrl = (baseUrl: string): string => {
  const regex = /[\w-]{2,}/;
  if (!regex.test(baseUrl)) {
    throw new Error("Invalid base url.");
  }
  return baseUrl;
};
