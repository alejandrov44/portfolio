import config from "@alejandrov44/eslint-config";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

const newConfig = [...config, ...compat.config({ extends: ["plugin:@next/next/recommended", "prettier"] })];

export default newConfig;
