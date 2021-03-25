import React from 'react'
import VideoItem from "./VideoItem";

const VideoList = ({videoList}) => {

   const renderedList =  videoList.map((video) => {
        return <VideoItem video = {video}/>
    })
    console.log(videoList.length)

    return (
        <div>
            {renderedList}
        </div>
    )
}

export default VideoList