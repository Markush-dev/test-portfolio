import { useEffect } from 'react';

import { useLocationChange } from './lib/hooks';
import Contact from './sections/contact';
import About from './sections/about';
import Projects from './sections/projects';
import { NavMenu } from './components/nav-menu';

function App() {
  const currentUrl = useLocationChange();

  useEffect(() => {
    const element = document.getElementById(currentUrl ? currentUrl : 'about');

    if (element) {
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      
      window.scrollTo({
        top: elementPosition - 70,
        behavior: 'smooth'
      });
    }
  }, [currentUrl]);

  return (
    <div className="min-h-full">
      <NavMenu />

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  )
}

export default App;
