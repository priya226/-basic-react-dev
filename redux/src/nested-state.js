const redux = require('redux');
const produce = require('immer').produce;
const initialState ={
    name :"Priya",
    address:{
        street: '122 B bakers Street',
        city: 'London',
        state:'UK'
    }
}

const STREET_UPDATE ='STREET_UPDATE';

const updateStreet =(street) =>{
    return {
        type:'STREET_UPDATE',
        payload : street
    }
}

/**
 * 
In Redux, reducers must return a new state object whenever the state is updated. Mutating the existing state directly would break Redux’s core principles.
 */
/**
 * Drafts for Mutative Logic: With Immer, you can write code that "mutates" state in a way that feels natural, but Immer handles the immutability for you. It does this by creating a draft of the state, tracking changes to the draft, and then generating a new immutable state from the modified draft.
 */
const reducer =(state=initialState,action)=>{
    switch(action.type){
        case STREET_UPDATE:
            // return {...state,
            //     address:{
            //         ...state.address,
            //         street:action.payload
            //     }}
            return produce(state,(draft)=>{ //this fn takes base state,draft (proxy of base state)
                //where we can apply direct change
                // Once the producer function has finished making changes to the draft, Immer produces a new immutable state by applying those changes to the draft.
                draft.address.street = action.payload
            })
        default:
            return state
    }
}

const store = redux.createStore(reducer)
console.log('Initial state.. ', store.getState())
const subscribe=store.subscribe(()=>{
    console.log('update state ..',store.getState());
});

store.dispatch(updateStreet('B223 Bakers street'));
subscribe();