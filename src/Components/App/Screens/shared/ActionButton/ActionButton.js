// Styled & Bootstrap Components
import { StyledButton } from './ActionButton.styled';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

// Icons
import { 
    ArrowRepeat, 
    Upload, 
    Trash,
    Shuffle,
} from 'react-bootstrap-icons';

const icons = {
    "ArrowRepeat": <ArrowRepeat />,
    "Upload": <Upload/>,
    "Trash": <Trash />,
    "Shuffle": <Shuffle />,
};

const ActionButton = ({
    small,
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
                small={small}
                type="button" 
                size="sm" 
                variant={buttonVariant}
                onClick={() => buttonAction()}
            >{icons[buttonIcon]}</StyledButton>
        </OverlayTrigger>
    );
};

export default ActionButton;