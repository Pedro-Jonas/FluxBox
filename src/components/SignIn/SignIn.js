import { useNavigate } from 'react-router-dom';
import StyledSignInSignUp from '../Styleds/StyledSignInSignUp';

export default function SignIn(){
    const navigate = useNavigate();
    return (
    <StyledSignInSignUp>
        SignIn
        <button onClick={()=> navigate("/SignUp")}>
            Login
        </button>
    </StyledSignInSignUp>
    );
};