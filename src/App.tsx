import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footer } from 'components/Footer';
import { Header } from './components/Header';
import { CreateTodo } from './pages/CreateTodo';
import { ListTodos } from './pages/ListTodos';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/list-todos" element={<ListTodos />} />
          <Route path="/" element={<CreateTodo />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
