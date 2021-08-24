import * as S from './VideoDetail.styled';
import ButtonLike from '../../../VideoList/VideoItem/ButtonLike';

const VideoDetail = ({video, videoLiked, handleVideoLiked}) => {
    return (
        <S.Detail>
            <S.Video
                title={video.snippet.title}
                id="YT-player" 
                type="text/html"
                src={`http://www.youtube.com/embed/${video.id}?enablejsapi=1&origin=http://localhost:3000`}
                frameBorder="0"
            />
            <S.Info>
                <h2>{video.snippet.title}</h2>
                <p>{video.snippet.description}</p>
                <ButtonLike 
                    video={video} 
                    videoLiked={videoLiked} 
                    handleVideoLiked={handleVideoLiked} 
                />
            </S.Info>
        </S.Detail>
    );
};

export default VideoDetail;