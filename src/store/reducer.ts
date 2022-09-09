import { WINNER , INDEX} from './type';
import { INFTState } from '../component/interface-type';


    const INITIAL_STATE : INFTState = {
        winner: [],
        index: 0
    };

    const reducer = (state = INITIAL_STATE, action :any) => {

        switch (action.type) {

            case WINNER:
               return {
                 ...state,
                  winner: [...state.winner,action.payload],

               };
            case INDEX:
              return{
                  ...state, 
                  index: action.payload
              }

             default: return state;

        }

    };

    export default reducer;