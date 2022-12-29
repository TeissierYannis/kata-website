import React, {useEffect} from 'react';
import SideSection from "./Components/SideSection";
import CodeSection from "./Components/CodeSection";
import OutputSection from "./Components/OutputSection";
import Exercices, {Exercice} from "./Data/Katas";

function App() {

    const [output, setOutput] = React.useState("");
    const [currentExercice, setCurrentExercice] = React.useState<Exercice | null>(Exercices[0]);
    const [isDisplayed, setIsDisplayed] = React.useState(true);

    useEffect(() => {
        setIsDisplayed(false);
        setOutput("");
        setTimeout(() => {
            setIsDisplayed(true);
        }, 1);
    }, [currentExercice]);

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
            {isDisplayed &&
                (
                    <div style={{
                        width: "100%",
                        height: "90%",
                        display: "flex",
                    }}>
                        <SideSection
                            name={currentExercice?.name ?? ""}
                            description={currentExercice?.description ?? ""}
                            examples={currentExercice?.mathematicalExample ?? []}
                            setCurrentExercice={setCurrentExercice}
                        />
                        <div style={{
                            width: "70%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <CodeSection
                                tests={currentExercice?.tests ?? []}
                                baseCode={currentExercice?.baseCode ?? ""}
                                setOutput={setOutput}
                            />
                            <OutputSection output={output}/>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default App;
