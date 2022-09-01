export const sleep = async (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const now = (): number => new Date().getTime();

export type Timeout = {
  timeout: number;
  interval: number;
};

export const SHIPMENT_INFORMATION_TIMEOUT: Timeout = {
  interval: 5000,
  timeout: 300 * 1000,
};

export const PAGE_LOAD_TIMEOUT: Timeout = {
  interval: 2000,
  timeout: 30 * 1000,
};

/**
 * Wait without failing.
 * @param condition
 * @param timeout
 */
export const wait = async (
  condition: () => Promise<boolean>,
  timeout?: Timeout
): Promise<boolean> => {
  const to = timeout || {
    timeout: 30000,
    interval: 1000,
  };
  const initialTime = now();
  let result = await condition();
  while (!result && now() - initialTime < to.timeout) {
    await sleep(to.interval);
    result = await condition();
  }
  return result;
};

export const waitAndAssert = async (
  condition: () => Promise<boolean>,
  timeout?: Timeout,
  message?: string
): Promise<boolean> => {
  const to = timeout || {
    timeout: 30000,
    interval: 1000,
  };

  const timeoutMessage = `Timed out after ${to.timeout} ms.`;
  const result = await wait(condition, timeout);

  if (!result) {
    throw new Error(`${timeoutMessage}. \n${message}`);
  }

  return result;
};
