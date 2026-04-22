interface LogArgs {
    name: string;
    data: unknown;
    type: 'request' | 'response' | 'catch';
    payload?: any;
    isServer?: boolean;
    isDisabled?: boolean;
}

declare function log({ name, data, type, payload, isServer, isDisabled }: LogArgs): void;

export { log };
