
const initState = []
const user = (state=initState,action)=>{
    switch (action.type) {
        case "loading":
            state = action.payload;
            return state
        case "register":
            state =[...state,action.payload]
           
            return state
        case "toggleStatus":
            let newUser = action.payload
            state= state.map((user)=>{
                if(user.id===newUser.id){
                    return newUser
                }
                else{
                    return user
                }
            })
            return state
        default:
            return state
    }
}

export default user