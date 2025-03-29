import dotenv from "dotenv";
import { validatDeployTarget, validateBaseUrl } from "./environment-validations";

dotenv.config();

export enum DeploySites {
  GithubPages = "github",
  Local = "local",
  Vercel = "vercel",
}

interface EnvironmentVariables {
  baseUrl: string;
  deployTarget: DeploySites;
}

enum EnvironmentVariablesMap {
  baseUrl = "NEXT_PUBLIC_BASE_URL",
  deployTarget = "NEXT_PUBLIC_DEPLOY_TARGET",
}

const environmentVariables: EnvironmentVariables = {
  baseUrl: validateBaseUrl(process.env[EnvironmentVariablesMap.baseUrl] ?? ""),
  deployTarget: validatDeployTarget(process.env[EnvironmentVariablesMap.deployTarget] ?? "")
    ? (process.env[EnvironmentVariablesMap.deployTarget] as DeploySites)
    : DeploySites.Local,
};

export default environmentVariables;
