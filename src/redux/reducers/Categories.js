const initialize = {
    categories: [],
    category: {}
};

export const categoryReducer = (state = initialize, action) => {
    // console.log(state);
    switch (action.type) {
        case "GET_Category_LIST":
            return {
                ...state,
                categories: action.payload
            }

        case "DELET_Category":
            return [...action.payload];

        case "DELET_SubCategory":
            return {
                ...state,
                category: action.payload
            };

        case "UPDATE_Category":
            return {
                ...state
            }
        case "UPDATE_SubCategory":
            return {
                ...state
            }
        case "ADD_Category":
            state.categories.push(action.payload)
            return {
                ...state,
                category:action.payload
            }
        case "GET_SINGIL_Category":
            return {
                ...state,
                category: action.payload
            }
        case "GET_SINGIL_SubCategory":
            return {
                ...state,
                category: action.payload
            }
        case "GET_CATEGORT_LIST_PAGE":
            return {
                ...state,
                categories: action.payload
            }
        case "GET_Category_LIST_ALL":
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    }
};