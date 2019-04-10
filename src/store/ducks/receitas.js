import { createActions, createReducer } from 'reduxsauce';

//Criando actions types e creators
export const {Types, Creators} = createActions({
	addReceita: ['ingrediente', 'quantidade'],
	removeReceita: ['id'],
});


//criando Reducers Handlers
const INITIAL_STATE = [];

const add = (state = INITIAL_STATE, action) => [
	...state,
	{id: Math.random(), text: action.payload.ingrediente, action.payload.quantidade}
];

const remove = (state = INITIAL_STATE, action) => state.filter(todo => todo.id != action.id);

//Crinado Reducer
export default createReducer(INITIAL_STATE, {
	[Types.ADD_RECEITA]: add,
	[Types.REMOVE_TODO] : remove,
});