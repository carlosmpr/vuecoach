export default{
    login(){},
   async signup(context,payload){
       const response = await fetch(`https://securetoken.googleapis.com/v1/token?key=AIzaSyDE8ANbx6dLCziDExDUFS0BT0LFeAFnLiM`, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password:payload.password,
                returnSecureToken: true,
               
            })
        })


        const responseData = await response.json()
        if(!response.ok){
            console.log(responseData)
            const error = new Error(responseData.message || "Failed to authenticate")
            throw error;
        }

        console.log(responseData)
        context.commit('setUser', {
            token: responseData.idToken,
            userId:responseData.localId,
            tokenExpiration: responseData.expiresIn

        })


    }
}