import componentsImage from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((data, index) => (
              <CoreConcept
                key={index} // You should include a unique key for each element in lists
                title={data.title}
                description={data.description}
                image={data.image} // Removed the extra dot
                // {...data}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
