import * as Styled from './VideoDetail.styled';

const VideoDetail = ({video}) => {
    return video ? (
        <Styled.Detail>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
            <Styled.VideoContainer>
                <Styled.Video
                    title={video.snippet.title}
                    id="YT-player" 
                    type="text/html" 
                    // width="640" 
                    // height="360" 
                    src={`http://www.youtube.com/embed/${video.id.videoId}?enablejsapi=1&origin=http://localhost:3000`}
                    frameBorder="0"
                >
                </Styled.Video>
            </Styled.VideoContainer>
        </Styled.Detail>
    ) : (
        <Styled.Info><h2>Please, select a video</h2></Styled.Info>
    );
};

export default VideoDetail;