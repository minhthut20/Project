import axios from "axios"

const initState = []

const post = (state = initState, action) => {
    let postValue = action.payload
    switch (action.type) {
        case "postLoading":
            state = action.payload;
            return state
        case "postNewPost":
            state = [...state, action.payload]
            axios.post("http://localhost:5555/post", action.payload)
            return state
        case "deletePostAct":

            state = state.filter((post) => {
                return post.id != postValue.id
            })
            axios.delete(`http://localhost:5555/post/${postValue.id}`)
            return state
        case "updatePost":
            state = state.map((post)=>{
                if(post.id == postValue.id){
                    return postValue
                }
                else {
                    return post
                }
            })
            axios.put(`http://localhost:5555/post/${postValue.id}`,postValue)
            return state
        case "postComment":
            let id = action.payload.id
            let commentArr = action.payload.commentArr
            axios.patch(`http://localhost:5555/post/${id}`,{comment:commentArr}).then((i)=>{
                
            })
            
            return state
            
        default:
            return state
    }
}
export default post