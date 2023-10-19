import AppContent from "../AppContent/AppContent";
import AppFooter from "../AppFooter/AppFooter";
import AppHeader from "../AppHeader/AppHeader";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </>
  )
}

export default App;