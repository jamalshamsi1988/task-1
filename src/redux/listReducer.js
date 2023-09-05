const initialState={
    selectedItems:[],
    checkOut:false
}

const listReducer=(state=initialState , action)=>{

    switch(action.type){
        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
               state.selectedItems.push({
                ...action.payload ,
                quantity:1
            })
            return {
                ...state , selectedItems:[...state.selectedItems] ,
                checkOut:false
            }
                
            }
            
    case "REMOVE_ITEM":
        const newSelectedItems=state.selectedItems.filter(item => item.id !==action.payload.id)
        return {
            ...state , selectedItems:[...newSelectedItems] ,
        }

        default :
        return state;
    }
       
}

export  default listReducer;