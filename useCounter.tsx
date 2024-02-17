import React, { createContext, useContext } from "react";
import { CounterProviderPropsType, CounterProviderValueType } from "./useCounter.types";

export const CounterContext = createContext<CounterProviderValueType>({
    getCounter: () => { throw new Error('getCounter is not implemented') },
})

export const useCounter = () => {
    const counterContext = useContext(CounterContext);

    if (!counterContext) {
        throw new Error('useCounter must be used within a CounterProvider');
    }

    return counterContext;
};


const CounterProvider: React.FC<CounterProviderPropsType> = (props) => {
    const [counter, setCounter] = React.useState(0);

    const getCounter = () => counter;

    return (
        <CounterContext.Provider value={{ getCounter }}>
            {props.children}
        </CounterContext.Provider>
    )
}

export default CounterProvider;
