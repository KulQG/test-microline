import { useCallback } from "react";
import { address, myEmail } from "./constants";

const headers = {
  "Content-Type": "application/json",
  Host: "zont-online.ru",
  Authorization: "Basic edger:2BW-Kdw-wML-jK7",
  "X-ZONT-Client": myEmail,
};

export const useApi = () => {
    const postCount = useCallback(async (count: number) => {
      try {
        const response = await fetch(address, {
          method: "POST",
          headers: headers,
          body: JSON.stringify({ count: count }),
        });
  
        if (!response) {
          throw new Error("Network response was not ok");
        }
  
        const data = await response.json();
        return data.count;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        throw new Error(error);
      }
    }, []);
  
    return { postCount };
  };
