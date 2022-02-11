declare module "hcmjs";

declare class hcmjs{
  constructor();
  log(...args: any): void;
  debug(...args: any): void;
  info(...args: any): void;
  warn(...args: any): void;
  error(...args: any): void;
  assert(...args: any): void;
  clear(...args: any): void;
  time(...args: any): void;
  timeEnd(...args: any): void;
  timeLog(...args: any): void;
  all(...args: any): void;
  http(...args: any): void;
  level(): number;
  alert(...args: any): void;
  console(...args: any): void;
  api.error(...args: any): void;
  api(...args: any): void;
}

declare const obj: hcmjs;
export default obj;