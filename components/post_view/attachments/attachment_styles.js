import styled from 'styled-components';

import {changeOpacity} from 'utils/utils';

export const Attachment = styled.div`
    margin-left: -20px;
    position: relative;
`;
export const AttachmentContent = styled.div`
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    margin: 5px 0 5px 20px;
    padding: 2px 5px;
    background: ${(props) => props.theme.centerChannelBg};
    border-color: ${(props) => changeOpacity(props.theme.centerChannelColor, 0.3)};
`;