//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    overlock: {
      overlock: new (await import("./overlock/query.lcd")).LCDQueryClient({
        requestClient
      })
    }
  };
};