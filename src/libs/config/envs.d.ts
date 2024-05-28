declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      SENDER_EMAIL: string; 
      SENDER_PASS: string;
    }
  }
}

export {};