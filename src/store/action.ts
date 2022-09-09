import { WINNER , INDEX } from './type';


export const setWinner = (winner :any) => {
    return {
        type: WINNER,
        payload: winner
    };

};

export const setIndex = (index :any) => {
   return {
        type: INDEX,
        payload: index
    };

};