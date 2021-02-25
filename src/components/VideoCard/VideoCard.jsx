import React from "react";
import Style from "./VideoCard.styles";

const VideoCard = props => {
    return (
        <Style.card>
            <img src={props.thumbnail} />
            <Style.title>{props.title}</Style.title>
            <Style.text>{props.description}</Style.text>
        </Style.card>
    )
}

export default VideoCard;