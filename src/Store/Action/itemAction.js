export const addItem = (item) => {
    return { type:"ADD_ITEM", item }
}

export const deleteItem = (id) => {
    return { type: "DELETE_ITEM", id }
}
