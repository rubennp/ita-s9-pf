import styled from 'styled-components';

export const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    h2 {
        margin: 0;
    }
`;

export const Detail = styled.div`
    padding: .5rem;
`;

export const VideoContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%; // 16:9 = 9 : 16 = 0.5625
`;

export const Video = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
`;