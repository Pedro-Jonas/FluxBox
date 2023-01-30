import { useNavigate } from 'react-router-dom';
import StyledSignInSignUp from '../Styleds/StyledSignInSignUp';

export default function SignUp(){
    const navigate = useNavigate();
    return (
    <StyledSignInSignUp>
        SignUp
        <button onClick={()=> navigate("/")}>
            Cadastro
        </button>
    </StyledSignInSignUp>
    );
};