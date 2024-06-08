const inistate = {
    list: []   
}

const todoReducers = (state = inistate, action) => {
    if(action.type === "ADDTODO"){
        const {id, data} = action.payload;
        return {
            ...state,
            list: [
                ...state.list,
                {
                    id : id,
                    data: data
                }
            ]
        }
    }
    else if(action.type === "DELETETODO"){
        const newlist = state.list.filter((e) => e.id !== action.id)
        return {
            ...state,
            list: newlist
        }
        
    }
    else if(action.type === "REMOVETODO"){ 
        return {
            ...state,
            list: []
        }
    }
    else {
        return state;
    }
}

export default todoReducers;