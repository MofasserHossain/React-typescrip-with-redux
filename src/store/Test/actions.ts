import { ActionType } from './actionTypes';

interface Deposit {
  type: ActionType.DEPOSIT;
  payload: number;
}

interface Withdraw {
  type: ActionType.WITHDRAW;
  payload: number;
}

interface Bankrupt {
  type: ActionType.BANKRUPT;
}

export type Action = Deposit | Withdraw | Bankrupt;

// . action

export const deposit = (amount: number) => ({
  type: ActionType.DEPOSIT,
  payload: amount,
});
