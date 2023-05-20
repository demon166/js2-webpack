import path from "path";
import {buildWebpackConfig} from './config/buildWebpackConfig';
import { IEnv, buildOptions } from './config/types';

const config = (env: IEnv) => {
  const buildConfig: buildOptions = {
    env,
    paths: {
      entry: path.resolve(__dirname, "src", "index.ts"),
      html:  path.resolve(__dirname, "src", "index.html"),
      output: path.resolve(__dirname, "build"),
    }
  }
  return buildWebpackConfig(buildConfig);
};

export default config;
