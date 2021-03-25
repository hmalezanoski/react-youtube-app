import React from 'react'
import VideoItem from "./VideoItem";

const VideoList = ({videoList,onVideoSelect}) => {

   const renderedList =  videoList.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} video = {video}/>
    })

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList