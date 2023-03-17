
const initialize = {
    users: [],
    user: {},
    addresses:[],
    address:{}
  };
  
  export const usersReducer = (state = initialize, action) => {
    switch (action.type) {
      case "GET_USERS_LIST":
        return{
          ...state,
          users:action.payload
        }
        case "GET_USERS_LIST_FILTER":
          return{
            ...state,
            users:action.payload
          }
      case "DELET_USER":
        return {
          ...state,
            users:action.payload.Users
        }
        case "GET_USER_LIST_PAGE":
        console.log(action.payload,'kk')
        return {
            ...state,
            users: action.payload
        }
      case "UPDATE_USER":
          return {
            ...state
          }
      case "ADD_USER":
        state.users.push(action.payload)
        return{
          ...state,
          user:action.payload
        }
      case "GET_SINGIL_USER":
        return{
          ...state,
          user:action.payload
        }
        case "GET_ADDRESSES_LIST":
        return{
          ...state,
          addresses:action.payload
        }

        case "ADD_USER_ADDRESS":
          state.users.push(action.payload)
          return{
            ...state,
            user:action.payload
          }
          case "DELET_ADDRESS":
            return {
              ...state,
              addresses:action.payload
            } 
            case "GET_ADDRESS":
              return{
                ...state,
                address:action.payload
              }
              case "UPDATE_ADDRESS":
                return {
                  ...state
                }
                case "DEFAULT_ADDRESS":
                  return {
                    ...state,
                    addresses:action.payload
                  }
      default:
        return state;
    }
  };
