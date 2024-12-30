#!/usr/bin/env bun

import { cli } from "cleye";
import { version } from "../package.json";
import { checkCommandIsInstalled } from "./utils";

export const CLI = cli(
  {
    name: "ghcommit",
    version,
  },
  async () => {
    const isInstalledGh = await checkCommandIsInstalled("gh");
    if (!isInstalledGh) {
      console.error("gh is not installed.");
    }

    const isInstalledGhCopilot = await checkCommandIsInstalled("gh copilot");
    if (!isInstalledGhCopilot) {
      console.error("gh copilot extension is not installed.");
    }

    //await $`gh`;
  },
);
