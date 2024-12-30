#!/usr/bin/env bun

import { cli } from "cleye";
import { version } from "../package.json";
import {
	checkCommandIsInstalled,
	checkExistStagedDiff,
	checkGhCopilotIsInstalled,
} from "./utils";
import { ghcmdExplain } from "./ghcmd";

export const CLI = cli(
	{
		name: "ghcommit",
		version,
	},
	async () => {
		const isExistStagedDiff = await checkExistStagedDiff();
		if (!isExistStagedDiff) {
			console.error("There is no staged diff.");
			return;
		}

		const isInstalledGh = await checkCommandIsInstalled("gh");
		if (!isInstalledGh) {
			console.error("gh is not installed.");
		}
		const isInstalledGhCopilot = await checkGhCopilotIsInstalled();
		if (!isInstalledGhCopilot) {
			console.error("gh copilot extension is not installed.");
		}

		const test = await ghcmdExplain();

		test.forEach((t) => console.log(t));
	},
);
