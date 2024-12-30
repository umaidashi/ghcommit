#!/usr/bin/env bun

import { cli } from "cleye";
import { version } from "../package.json";
import { checkCommandIsInstalled, checkGhCopilotIsInstalled } from "./utils";
import { template } from "./template";
import { ghcmdExplain } from "./ghcmd";

export const CLI = cli(
  {
    name: "ghcommit",
    version,
    //flags: {
    //  template: String,
    //},
  },
  async () => {
    const isInstalledGh = await checkCommandIsInstalled("gh");
    if (!isInstalledGh) {
      console.error("gh is not installed.");
    }
    const isInstalledGhCopilot = await checkGhCopilotIsInstalled();
    if (!isInstalledGhCopilot) {
      console.error("gh copilot extension is not installed.");
    }

    const test = await ghcmdExplain();

    console.log(JSON.stringify(test, null, " "));
  },
);
