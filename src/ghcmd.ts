import { $ } from "bun";
import { template } from "./template";

export const ghcmdExplain = async () => {
	const stagedDiff = await $`git diff --staged`.text();
	const prompt = template.replace("{{diff}}", stagedDiff);
	const res = await $`gh copilot explain "${prompt}"`.text();

	const commitMessages: string[] = res
		.split("\n")
		.map((line) => line.trim())
		.filter((line) => line.startsWith('"') && line.endsWith('",'))
		.map((line) => line.slice(1, -2));

	return commitMessages;
};
