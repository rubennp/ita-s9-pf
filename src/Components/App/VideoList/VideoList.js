const VideoList = ({list}) => {
    console.log(list);
    return (
        <ul>
            {list.map((video, idx) => <li key={idx}>{video.snippet.title}</li>) }
        </ul>
    );
};

export default VideoList;