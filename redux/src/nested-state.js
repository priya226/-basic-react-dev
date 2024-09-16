const redux = require('redux');

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

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case STREET_UPDATE:
            return {...state,
                address:{
                    ...state.address,
                    street:action.payload
                }}
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