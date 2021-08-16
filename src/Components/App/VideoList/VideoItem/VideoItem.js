import { Item } from './VideoItem.styled';
import { Card, Col, Row } from 'react-bootstrap';

import onErrorVidImg from '../../../../assets/img/default-video-thumbnail.jpeg';

const VideoItem = ({video, idx, handleVideoSelect}) => {
    return (
        <Item onClick={e => {
            const lastSelected = document.querySelector('.video-selected');
            if (lastSelected) lastSelected.classList.remove('video-selected');
            e.currentTarget.children[0].classList.add('video-selected');
            handleVideoSelect(idx);
        }} as="li">
            <Row className="align-items-center item">
                <Col xs={7} md={6} lg={7} xl={8}>
                    <Card.Img src="default" onError={e => {e.target.src = `${onErrorVidImg}`}}/>
                </Col>
                <Col xs={5} md={6} lg={5} xl={4}>
                    <Card.Title><h3>{video.snippet.title}</h3></Card.Title>
                </Col>
            </Row>
        </Item>
    );
};

export default VideoItem;