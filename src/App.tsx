import React from 'react';
import SideSection from "./Components/SideSection";
import CodeSection from "./Components/CodeSection";
import OutputSection from "./Components/OutputSection";
import Exercices from "./Data/Katas";

function App() {

    const [output, setOutput] = React.useState("");
    const [currentExercice, setCurrentExercice] = React.useState(Exercices[1]);

    return (
        <div className="App" style={{
            width: "100%",
            height: "100vh",
        }}>
            <header className="header_section"
                    style={{
                        width: "100%",
                        height: "10%",
                        background: "white",
                        fontFamily: "monospace",
                        fontSize: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                <p className="title">Kata</p>
            </header>
            <div style={{
                width: "100%",
                height: "90%",
                display: "flex",
            }}>
                <SideSection
                    name={currentExercice.name}
                    description={currentExercice.description}
                    examples={currentExercice.mathematicalExample}
                    setCurrentExercice={setCurrentExercice}
                />
                <div style={{
                    width: "70%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <CodeSection
                        tests={currentExercice.tests}
                        baseCode={currentExercice.baseCode}
                        setOutput={setOutput}
                    />
                    <OutputSection output={output}/>
                </div>
            </div>
        </div>
    );
}

export default App;
