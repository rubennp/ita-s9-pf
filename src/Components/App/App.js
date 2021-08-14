import { useState } from 'react';

// Styled Components
import * as Styled from './App.styled';

// Components
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

// Hooks
import useGetVideoList from '../../hooks';

/*
 * App
 */
const App = () => {
  const [search, setSearch] = useState('');
  const handleSubmit = search => setSearch(search);

  const videoList = useGetVideoList(search, [search]);
  
  const [videoSelected, setVideoSelected] = useState(null);
  const handleVideoSelect = idx => setVideoSelected(videoList.items[idx]);

  console.log(videoList);
  return (
    <Styled.Main>
      <SearchBar search={search} handleSubmit={handleSubmit}/>
      { videoList && <VideoList list={videoList.items} handleVideoSelect={handleVideoSelect}/> }
      <VideoDetail video={videoSelected} />
    </Styled.Main>
  );
}

export default App;