interface LogArgs {
    name: string;
    data: unknown;
    type: 'request' | 'response' | 'catch';
    payload?: any;
    isServer?: boolean;
}

declare function log({ name, data, type, payload, isServer }: LogArgs): void;

export { log };
