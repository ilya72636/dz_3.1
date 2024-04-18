import MainPage from './pages/mainPage/MainPage';import AboutPage from './pages/aboutPage/AboutPage';import TodosPage from './pages/todosPage/TodosPage';
import './App.css';


function App() {
  return (
    <div className="App">
      <MainPage/>
      
      <AboutPage/>
  
      <TodosPage/>
    </div>
  );
}

export default App;
