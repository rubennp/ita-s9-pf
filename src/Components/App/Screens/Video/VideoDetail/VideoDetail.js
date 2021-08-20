import * as S from './VideoDetail.styled';

const VideoDetail = ({video}) => {
    return (
        <S.Detail>
            <S.Video
                title={video.snippet.title}
                id="YT-player" 
                type="text/html"
                src={`http://www.youtube.com/embed/${video.id.videoId}?enablejsapi=1&origin=http://localhost:3000`}
                frameBorder="0"
            >
            </S.Video>
            <S.Info>
                <h2>{video.snippet.title}</h2>
                <p>{video.snippet.description}</p>
            </S.Info>
        </S.Detail>
    );
};

export default VideoDetail;