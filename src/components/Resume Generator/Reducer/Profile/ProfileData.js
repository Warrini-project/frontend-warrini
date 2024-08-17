import { PROFILE, CLEAR_PROFILE } from "../../../../actions/types"
const initialState ={
    Data: {}
 }

 export default function (state = initialState , action){
    if(action){
        switch(action.type){
            case PROFILE:
                return {
                    ...state,
                    Data: action.payload,
                }

            case CLEAR_PROFILE:
                return {
                    Data: {}
                }
            default:
                return state
         }

    }
 }