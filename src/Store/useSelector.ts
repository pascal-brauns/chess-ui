import { useSelector } from 'react-redux';
import { State } from './Reducer';

type Selector<T> = (state: State) => T;

export default <T>(selector: Selector<T>) => useSelector<State, T>(selector);