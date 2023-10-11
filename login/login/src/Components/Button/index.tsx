import {StyledButton} from "./button.styled";

interface Props {
    label: string;
    onClick: () => void;
};

function Button({label, onClick}: Props) {
    
    return (
        <StyledButton onClick = {onClick}>
            {label}
        </StyledButton>
    );
  }

  export default Button;