import './App.css';
import MainCard from "./Card/mainCard";

// import backgroundImage from './Images/pattern-background-desktop.svg';

function App() {

    return (

        <div style={{
            // backgroundImage: "url('./Images/pattern-background-desktop.svg')",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>

            <MainCard/>

        </div>
    );
}

export default App;
