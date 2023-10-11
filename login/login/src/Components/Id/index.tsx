import {StyledId} from './id.styled';

interface Props {
    label: string;
};

export const Id = ({label}: Props) => {
    return(
        <div>
            <StyledId placeholder="Usuário"></StyledId>
        </div>
    );
};

export default Id;