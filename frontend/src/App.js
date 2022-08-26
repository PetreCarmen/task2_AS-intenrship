import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Projects from "./Pages/Projects";
import Candidates from "./Pages/Candidates";
import TableExample from "./components/example/TableExample";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Routes>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/candidates" element={<Candidates/>}/>
                    </Routes>
                </Router>
            </header>
            <TableExample/>
        </div>
    );
}

export default App;
