import {StyledPw} from './pw.styled';

interface Props {
    label: string;
};

export const Pw = ({label}: Props) => {
    return(
        <div>           
            <StyledPw type="password" placeholder="Password"></StyledPw>
        </div>
    );
};

export default Pw;