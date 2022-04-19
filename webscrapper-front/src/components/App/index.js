import usePages from "../../hooks/usePages";

function App() {
    const pages = usePages();

    return (
      <div>
        <button onClick={ () => console.log(pages) } type="button">
            joł            
        </button>
      </div>
    );
  }
  
  export default App;
  