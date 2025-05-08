import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from '@/components/app-layout';
import Home from '@/pages/home';
import Detail from '@/pages/detail';

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
