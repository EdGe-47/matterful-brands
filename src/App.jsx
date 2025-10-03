import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import Content from '@/layouts/Content';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Content />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
