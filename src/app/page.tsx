import Navbar from "./figma/page";
import Helo from './figma/helo'
import Component from "./figma/hero";
import Footers from "./figma/footers";


const Home: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <main className="p-4">
        <h1 className="text-2xl"></h1>
      </main>
      <Component/>
      <Helo/>
      <Footers/>
    </div>
  );
};

export default Home;




