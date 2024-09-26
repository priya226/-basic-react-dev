const store = require('./app/store')

const cakeAction = require('./features/cake/cakeSlice').cakeAction

const icecreamAction = require('./features/icecream/icecreamSlice').icecreamAction

console.log('initial state..',store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log('updated state..',store.getState())
});
store.dispatch(cakeAction.ordered()) //action type willbe cake/ordered
store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.restocked(4))

store.dispatch(icecreamAction.ordered())//action type will be icecream/ordered
store.dispatch(icecreamAction.ordered())
store.dispatch(icecreamAction.ordered())
store.dispatch(icecreamAction.restocked(4))
unsubscribe();