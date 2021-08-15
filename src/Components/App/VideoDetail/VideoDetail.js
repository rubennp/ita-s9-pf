const VideoDetail = ({video}) => {
    return (
        <h2>{video ? video.snippet.title : "Please, select a video"}</h2>
    );
};

export default VideoDetail;