import {useSelector, useDispatch} from 'react-redux';
import * as counterActions from './redux-test/test/actions';

function TestRedux() {

    const dispatch = useDispatch();
    const counterState = useSelector((state) => state.counter.value);

    const handleIncrement = () => {
        dispatch(counterActions.increment(5));
    };

    const handleDecrement = () => {
        dispatch(counterActions.decrement(5));
    };

    const handleFetch = () => {
        dispatch(counterActions.fetchAPI());
    };

    return (
        <>
        Reat Redux
        <h2>{counterState}</h2>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
        <button onClick={handleFetch}>fetch</button>
        </>
    );
}

export default TestRedux;
