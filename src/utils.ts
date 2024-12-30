import { $ } from "bun";

export const checkCommandIsInstalled = async (
  command: string,
): Promise<boolean> => {
  const { exitCode } = await $`${command}`.nothrow().quiet();
  return exitCode === 0;
};
