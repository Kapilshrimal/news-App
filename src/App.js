import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';



function App() {
  
  // state = {
  //   progress:0
  // }

  // setProgress = (progress)=>{
  //   this.setState({progress : progress})
  // }
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={10}
        
      />
      
      
      <Routes>
   
          <Route path='/' element={<News key='general' category= 'general'/>}/>
          <Route path='/business' element={<News  key='business' category= 'business'/>}/>
          <Route path='/entertainment' element={<News key='entertainment' category= 'entertainment'/>}/>
          <Route path="/general" element={<News  key="general" category= "general"/>}/>
          <Route path="/health" element={<News  key="health" category= "health"/>}/>
          <Route path="/Science" element={<News  key="Science" category= "Science"/>}/>
          <Route path="/Sports" element={<News  key="Sports" category= "Sports"/>}/>
          <Route path="/technology" element={<News  key="technology" category= "technology"/>}/>
          </Routes>
      </Router>
 
    </div>
  );
}

export default App;
