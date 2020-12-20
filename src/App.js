import React, {useRef, useState} from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./data"
import Library from './components/Library';
import Nav from "./components/Nav"
import "./styles/app.scss";

function App() {
  const [songs, setSongs] =  useState(data());
  const [currentSong, setCurrentSong] =  useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef= useRef(null);
  const [libraryStatus, setLibraryStatus]= useState(false);
  const [songInfo, setSongInfo]= useState({
    currentTime: 0,
    duration: 0,
    animationPercentage:0,
  })

  const timeUpdateHandler= (e) => {
    const current=e.target.currentTime;
    const duration= e.target.duration;
    const roundedCurrent= Math.round(current);
    const roundedDuration =Math.round(duration);
    const animation= Math.round((roundedCurrent/ roundedDuration)*100);
    setSongInfo({...songInfo, currentTime:current,  duration, animationPercentage:animation})
  }
  const songEndHandler=async()=>{
    let currentIndex= songs.findIndex((song)=> song.id===currentSong.id);
    await setCurrentSong(songs[(currentIndex+1)%songs.length]);
    if(isPlaying) audioRef.current.play();
  }
  return (
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player audioRef={audioRef} setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} songInfo={songInfo} setSongInfo={setSongInfo} setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong} />
      <Library libraryStatus={libraryStatus} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong}/>
      <audio onEnded={songEndHandler} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={ currentSong.audio }></audio>
    </div>
  );
}

export default App;
