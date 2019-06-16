import * as ACTION_TYPES from '../actions/actionTypes';
import { catchPokemon } from '../actions/actionCreators';

describe('Pokemon actions', () => {
	it('should create action catchPokemon', () => {
		const expectedAction = {
      type: ACTION_TYPES.CATCH_POKEMON
    };
		expect(catchPokemon()).toEqual(expectedAction);
	});
});