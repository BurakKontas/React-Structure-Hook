

export type CounterProviderPropsType = {
    children: React.ReactNode;
}

export interface CounterProviderValueType {
    getCounter: () => number;
}