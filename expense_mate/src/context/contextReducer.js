

const createReducer = (state, action) => {
    let transactions;

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            //? # this filter method is used to filter out the transaction with the id that is passed in the payload of the action. foe example if the list of transactions is [1, 2, 3] and the id to be deleted is 2 then the new list of transactions will be [1, 3]
            transactions = state.filter((t) => t.id !== action.payload);
            return transactions;

        case 'ADD_TRANSACTION':
            //? # In this transaction action.payload and ...state means that the new transaction is added to the beginning of the list of transactions. for example if the list of transactions is [1, 2, 3] and the new transaction is 4 then the new list of transactions will be [4, 1, 2, 3]
            transactions = [action.payload, ...state];
            return transactions;
        default:
            //? # This return statement is used to return the state of the application if the action type is not recognized. for example if the action type is 'DELETE_TRANSACTION' then the state of the application will be returned.
            return;
    }
}

export default createReducer;