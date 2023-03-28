// import {signInWithGooglepopup} from '../../utils/firebase/Firebase.component.js'
import {signInWithGooglepopup,createUserDocumentfromAuth} from '../../utils/firebase/Firebase.component.js'

const SignIn = () =>{

    const logGooglUser = async ()=> {
        const {user} = await signInWithGooglepopup()
        const userDocRef = await createUserDocumentfromAuth(user)
    }
return(
    <div>
     <h2>SignIn Page</h2>
     <button onClick={logGooglUser}>signInWithGooglepopup</button>
    </div>
)
}
export default SignIn;