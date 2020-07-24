const initState = {
    items: [
        {id:1, item: 'WATER GLASS', serving: 2 }
    ],
};

const itemReducer = (state = initState, action) => {
    switch (action.type) {
        case "DELETE_ITEM":
            const newItem = state.items.filter((item) => item.id !== action.id);
            return{
                items: newItem,
            };
        case "ADD_ITEM":
            return {
                items: [action.item, ...state.items],
            };    
        default:
            return state;    
    }
};

export default itemReducer;