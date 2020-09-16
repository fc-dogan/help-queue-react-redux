import ticketListReducer from '../../reducers/ticket-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('ticketListReducer', () => {
  let action;
  // We declare an action but don't define it yet. Each of our new tests will define what the action should be (whether that is adding, updating, or deleting a ticket).

  const currentState = {
    1: {names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1 },
    2: {names: 'Jasmine and Justine',
    location: '2a',
    issue: 'Reducer has side effects.',
    id: 2 }
  }

  const ticketData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1
  };
  // We create a ticketData constant that provides ticket information for testing purposes.

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new ticket data to masterTicketList', () => {
    const { names, location, issue, id } = ticketData;
    // we use ES6 destructuring syntax to provide keys from our ticketData to the scope of our test.
    action = {
      type: c.ADD_TICKET,
      names: names,
      location: location,
      issue: issue,
      id: id
    };
    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    })
  });

  test('Should successfully delete a ticket', () => {
    action = {
      type: c.DELETE_TICKET,
      id: 1
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2 : {names: 'Jasmine and Justine',
      location: '2a',
      issue: 'Reducer has side effects.',
      id: 2 }
    });
  })
});

