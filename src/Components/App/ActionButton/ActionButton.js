import styled from 'styled-components';

// Styled & Bootstrap Components
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

// Icons
import { 
    ArrowRepeat, 
    Upload, 
    Trash,
} from 'react-bootstrap-icons';

const icons = {
    "ArrowRepeat": <ArrowRepeat />,
    "Upload": <Upload/>,
    "Trash": <Trash />,
};

const ActionButton = ({
    overlayKey,
    overlayPlacement,
    tooltipId,
    tooltipText,
    buttonVariant,
    buttonAction,
    buttonIcon,
}) => {
    return (
        <OverlayTrigger
            key={overlayKey}
            placement={overlayPlacement}
            delay={{ show: 150, hide: 150 }}
            overlay={
                <Tooltip id={tooltipId}>
                    <small>{tooltipText}</small>
                </Tooltip>
            }
        >
            <StyledButton 
                type="button" 
                size="sm" 
                variant={buttonVariant}
                onClick={() => buttonAction()}
            >{icons[buttonIcon]}</StyledButton>
        </OverlayTrigger>
    );
};

const StyledButton = styled(Button)`
    border-radius: 100%;
`;

export default ActionButton;