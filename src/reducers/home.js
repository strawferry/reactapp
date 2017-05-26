

import { homeAction } from '../actions/home';

const initialState = {
    str: 'initStr'
};



export default function home(state = initialState, action) {
    switch(action.type){
        case homeAction.TEST:
            return {
                ...state,
                str: action.test
            };


        default:
            return state;
    }
}