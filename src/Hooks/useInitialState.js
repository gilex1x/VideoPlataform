import {useState, useEffect} from 'react';

const useInitialState = (API)=>{
  const [video, setVideos]=useState({ mylist: [], trends: [], originals: [] });

  useEffect(()=>{
    fetch (API)
      .then(response=>response.json())
      .then(data=>setVideos(data)); 
  }, []);
  return video;
};

export default useInitialState;