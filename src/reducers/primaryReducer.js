export const primaryReducer = (state,action) => {
    switch(action.type){
        case "INITIAL_DATA":
            console.log(action.payload)
            return {
                ...state,
                videos: [...action.payload]
            };
        default:
            return state;

    }
}

