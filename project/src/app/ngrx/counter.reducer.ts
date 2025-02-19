import { createReducer, on } from '@ngrx/store'; // Correct import
import { increment, decrement, reset } from './counter.actions'; // Correct actions import



export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, () => initialState)
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}