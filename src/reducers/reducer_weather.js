import { FETCH_WEATHER }  from '../actions/index';
import { Sparklines, SparklinesLine } from 'react-sparklines';


export default function (state=[], action){
	
	switch (action.type){
		case FETCH_WEATHER:
		  return [action.payload.data,...state];
    }
	return state
}