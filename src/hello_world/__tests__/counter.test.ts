import * as counter from '../counter';
import { ActionTypes } from '../../application/constants';
import { aNumber } from '../../application/test_helpers/random_test_values';

describe('the store creator', () => {
    it('should create store with given number as state', () => {
        const theNumber = aNumber();
        const theStore = counter.makeStore(theNumber);
        expect(theStore.value).toBe(theNumber);
    });
});

describe('the action for', () => {

    let theStore: counter.Store;
    let theValueInTheStore: number;

    beforeEach(() => {
        theValueInTheStore = aNumber();
        theStore = counter.makeStore(theValueInTheStore);
    });

    describe('increment', () => {

        let theIncrementAction: counter.SetCounterAction;

        beforeEach(() => {
            theIncrementAction = counter.increment(theStore);
        });

        it('should create action with type SET_COUNTER', () => {
            expect(theIncrementAction.type).toBe(ActionTypes.SET_COUNTER);
        });

        it('should create action with payload one larger than value in the store', () => {
            expect(theIncrementAction.payload.value).toBe(theValueInTheStore + 1);
        });
    });

    describe('decrement', () => {

        let theDecrementAction: counter.SetCounterAction;

        beforeEach(() => {
            theDecrementAction = counter.decrement(theStore);
        });

        it('should create action with type SET_COUNTER', () => {
            expect(theDecrementAction.type).toBe(ActionTypes.SET_COUNTER);
        });

        it('should create action with payload one less than value in the store', () => {
            expect(theDecrementAction.payload.value).toBe(theValueInTheStore - 1);
        });
    });
});

describe('the reducer', () => {
    let theStore: counter.Store;
    let theOldNumber: number;

    beforeEach(() => {
        theOldNumber = aNumber();
        theStore = counter.makeStore(theOldNumber);
    });

    it('should return store with value from action', () => {
        var theNewNumber = aNumber();
        var theNewStore = counter.reducer(theStore, { type: ActionTypes.SET_COUNTER, payload: { value: theNewNumber } });
        expect(theNewStore.value).toBe(theNewNumber);
    });

    it('should return store unchanged if action type is not SET_COUNTER', () => {
        var theNewNumber = aNumber();
        var wrongActionType = 'wrongActionType ';
        var theNewStore = counter.reducer(theStore, { type: wrongActionType, payload: { value: theNewNumber } });
        expect(theNewStore.value).toBe(theOldNumber);
    });

    it('should return store unchanged if payload is undefined', () => {
        var wrongActionType = 'wrongActionType ';
        var theNewStore = counter.reducer(theStore, { type: wrongActionType, payload: undefined });
        expect(theNewStore.value).toBe(theOldNumber);
    });
});
