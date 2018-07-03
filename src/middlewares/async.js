// takes async actions.

export default ({ dispatch }) => next => action => {
    // check to see if the action
    // has a promise on its 'payload' property
    // if it doesn't, then send the action on to the
    // next middleware.
    // debugger;

    if (!action.payload || !action.payload.then) {
        console.log(`${action.type}, NO promise found.`);
        return next(action);
    }

    // we want to wait for the promise to resolve(get it's data) and
    // then create a new action with that data and dispatch it.
    console.log(`${action.type}, promise found.`);
    action.payload.then((response) => {
        const newAction = { ...action, payload : response }; // wait for the response.
        dispatch(newAction);
    });
}
