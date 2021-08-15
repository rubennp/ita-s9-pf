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
 * App(): main Component
 */
const App = () => {
  const [search, setSearch] = useState('');
  const [videoSelected, setVideoSelected] = useState(null);

  const videoList = useGetVideoList(search, [search]);
  
  const handleSubmit = search => setSearch(search);  
  const handleVideoSelect = idx => setVideoSelected(videoList.items[idx]);
  
  return (
    <Styled.Main fluid>
      <Styled.Search>
        <SearchBar search={search} handleSubmit={handleSubmit}/>
      </Styled.Search>
      <Styled.Detail>
        <VideoDetail video={videoSelected} />
      </Styled.Detail>
      <Styled.List>
        { videoList && <VideoList list={videoList.items} handleVideoSelect={handleVideoSelect}/> }
      </Styled.List>  
    </Styled.Main>
  );
}

export default App;