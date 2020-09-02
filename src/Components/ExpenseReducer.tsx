import ExpenseDetail from "./ExpenseDetail";

const ExpenseReducer = ((state:any,action:any) => {
    switch(action.type){
        case "ADD":{
            return [action.payload, ...state]
        }
        default:
            return state;
    }
});

export default ExpenseReducer;