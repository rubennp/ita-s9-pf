import { Item } from './VideoItem.styled';
import { Card, Col, Row } from 'react-bootstrap';

import onErrorVidImg from '../../../../assets/img/default-video-thumbnail.jpeg';

const VideoItem = ({video, handleVideoSelect}) => {
    return (
        <Item onClick={()=> {
            handleVideoSelect(video);
        }} as="li">
            {/* <Row className="align-items-center item">
                <Col>
                    <Card.Img src={video.snippet.thumbnails.high.url} onError={e => {e.target.src = `${onErrorVidImg}`}}/>
                </Col>
                <Col xs={5} md={6} lg={5} xl={4}>
                    <Card.Title><h3>{video.snippet.title}</h3></Card.Title>
                </Col>
            </Row> */}
            <Card>
                <Card.Img src={video.snippet.thumbnails.high.url} onError={e => {e.target.src = `${onErrorVidImg}`}}/>
                <Card.Body>
                    <Card.Title>{video.snippet.title}</Card.Title>
                </Card.Body>
            </Card>
        </Item>
    );
};

export default VideoItem;