declare var require: NodeRequire;
interface NodeRequire {
  <T>(path: string): any;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (
    paths: string[],
    callback: (require: <T>(path: string) => T) => void,
    name?: string
  ) => void;
}
