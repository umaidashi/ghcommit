import { $ } from "bun";

export const checkCommandIsInstalled = async (
  command: string,
): Promise<boolean> => {
  const { exitCode } = await $`${command}`.nothrow().quiet();
  return exitCode === 0;
};

export const checkGhCopilotIsInstalled = async (): Promise<boolean> => {
  const list = await $`gh extension list`.text();

  return list.includes("github/gh-copilot");
};
