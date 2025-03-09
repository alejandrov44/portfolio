import dotenv from "dotenv";
import { validatDeployTarget, validateBaseUrl } from "./envsValidations";

dotenv.config();

export enum DeploySites {
  GithubPages = "github",
  Vercel = "vercel",
  Local = "local",
}

interface EnvironmentVariables {
  deployTarget: DeploySites;
  baseUrl: string;
}

enum EnvironmentVariablesMap {
  deployTarget = "NEXT_PUBLIC_DEPLOY_TARGET",
  baseUrl = "NEXT_PUBLIC_BASE_URL",
}

const environmentVariables: EnvironmentVariables = {
  deployTarget: validatDeployTarget(process.env[EnvironmentVariablesMap.deployTarget]!)
    ? (process.env[EnvironmentVariablesMap.deployTarget] as DeploySites)
    : DeploySites.Local,
  baseUrl: validateBaseUrl(process.env[EnvironmentVariablesMap.baseUrl] ?? ""),
};

export default environmentVariables;
