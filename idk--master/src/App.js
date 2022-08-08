import {
  
  Routes,
  Route
} from 'react-router-dom'
import Home from "./Pages/Home_1/Home";
import List from './Pages/list/List';
import Hotels from './Pages/hotels/Hotels';

function App() {
  return (
    
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/hotels" element={<List/>} />
          <Route path="/hotels/:id" element={<Hotels/>} />
        </Routes>
  
  );
}
export default App;
