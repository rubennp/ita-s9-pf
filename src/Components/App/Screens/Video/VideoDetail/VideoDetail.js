import * as S from './VideoDetail.styled';

const VideoDetail = ({video}) => {
    return video ? (
        <S.Detail>
            <S.VideoContainer>
                <S.Video
                    title={video.snippet.title}
                    id="YT-player" 
                    type="text/html" 
                    // width="640" 
                    // height="360" 
                    src={`http://www.youtube.com/embed/${video.id.videoId}?enablejsapi=1&origin=http://localhost:3000`}
                    frameBorder="0"
                >
                </S.Video>
            </S.VideoContainer>
            <S.Info>
                <h2>{video.snippet.title}</h2>
                <p>{video.snippet.description}</p>
            </S.Info>
        </S.Detail>
    ) : (
        <S.NoSelected><h2>Please, select a video</h2></S.NoSelected>
    );
};

export default VideoDetail;