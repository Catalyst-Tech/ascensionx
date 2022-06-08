import "./App.css";
import Landingpage from "./components/Landingpage";
import Tokenomics from "./components/Tokenomics";
import Team from "./components/Team";
import Community from "./components/Community";
import Roadmap from "./components/Roadmap";
import About from "./components/About";
import Gameplay from "./components/Gameplay";
import Countdown from "./components/Countdown";
import Faq from "./components/Faq";

function App() {
  return (
    <div>
      <main className="main">
        <div className="main--container">
          <Landingpage />

          <article>
            <About />
          </article>

          <article>
            <Gameplay />
          </article>

          <article>
            <Tokenomics />
          </article>

          <article>
            <Roadmap />
          </article>

          <article>
            <Faq />
          </article>

          <article>
            <Team />
          </article>

          <article>
            <Community />
          </article>

          <article>
            <Countdown />
          </article>

          <footer>© 2022.</footer>
        </div>
      </main>
    </div>
  );
}

export default App;
