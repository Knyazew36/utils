type ErrorCatchMode = 'first' | 'all';
type ErrorCatchOptions = {
    mode?: ErrorCatchMode;
    errorTextMap?: Record<string, string>;
    priorityErrors?: boolean;
};
declare function errorCatch(error: any, options?: ErrorCatchOptions): string | string[];

export { type ErrorCatchMode, type ErrorCatchOptions, errorCatch };
