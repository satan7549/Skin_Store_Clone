const reducer =(state , action)=>{
    switch(action.type){
        case "LOGIN_LOADIN" :{
            return {
                isLoading:true,
                isAuth:false,
                isError:false,
                token:null
            }
        }
        case "LOGIN_SUCESS" :{
            return {
                isLoading:false,
                isAuth:true,
                isError:false,
                token: action.payload
            }
        }
        case "LOGIN_FAILURE" :{
            return {
                isLoading:false,
                isAuth:false,
                isError:true,
                token: null
            }
        }
        case "LOGOUT_SUCESS":{
            return{
                isLoading:false,
                isAuth:false,
                isError:false,
                token: null
            }
        }
        default : {
            return state;
        }
    }

}

export default reducer;
