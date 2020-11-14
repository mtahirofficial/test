import actiontypes from '../constants/Constants.js'

const states = {
    displayName : '',
    email : '',
    emailVerified : '',
    photoUrl : '',
    isAnonymous : '',
    uid : '',
    providerData : '',
    isLogged: false
}

export default (state = states, action) => {
    switch(action.type){
        case actiontypes.userLogin:
            return({
                displayName: action.payload.displayName,
                email: action.payload.email,
                emailVerified: action.payload.emailVerified,
                photoUrl: action.payload.photoUrl,
                isAnonymous: action.payload.isAnonymous,
                uid: action.payload.uid,
                providerData: action.payload.providerData,
                isLogged: action.payload.isLogged
            })
        case actiontypes.logoutUser:
            return( {
                displayName : '',
                email : '',
                emailVerified : '',
                photoUrl : '',
                isAnonymous : '',
                uid : '',
                providerData : '',
                isLogged: action.payload.isLogged
                }
            )
        default:
            return state
    }
}