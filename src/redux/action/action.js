
export const loading =(thu)=>{
    return {
        type:"loading",
        payload:thu
    }
}
export const register =(thu)=>{
    return{
        type:"register",
        payload:thu
    }
}

export const toggleUserStatus = (thu) =>{
    return {
        type:"toggleStatus",
        payload:thu
    }
}

export const postNewPost = (thu) =>{
    return {
        type:"postNewPost",
        payload:thu
    }
}

export const postLoading = (thu) => {
    return {
        type: "postLoading",
        payload: thu
    }
}

export const deletePostAct = (thu)=>{
    return {
        type:"deletePostAct",
        payload:thu
    }
}

export const updatePost = (thu)=>{
    return {
        type:"updatePost",
        payload:thu
    }
}

export const postComment = (thu) =>{
    return {
        type:"postComment",
        payload:thu
    }
}
