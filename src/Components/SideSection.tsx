import React from 'react';
import Exercices from "../Data/Katas";

type Props = {
    name: string;
    description: string;
    examples: string[];
    setCurrentExercice: (exercice: any) => void;
}

const SideSection = ({name, description, examples, setCurrentExercice}: Props) => {

    // Style for the side section (this is the name of the exercice, what is the exercice about, and examples)
    const sideSectionStyle = {
        width: "30%",
        height: "100%",
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "monospace",
        fontSize: "20px",
    };

    const findExerciceByName = (name: string) => {
        setCurrentExercice(Exercices.find(exercice => exercice.name === name));
    }

    return (
        <div
            style={{...sideSectionStyle, flexDirection: "column"}}
        >
            <div>
                <p>Select an exercice</p>
                <select onChange={(e) => findExerciceByName(e.target.value)}
                        style={{
                            width: "90%",
                            height: "50px",
                            fontSize: "20px",
                            borderRadius: "5px",
                            outline: "none",
                            border: "none",
                            cursor: "pointer",
                        }}
                >
                    {Exercices.map((exercice, index) => {
                        return (<option key={index} selected={
                            exercice.name === name
                        } value={exercice.name}>{exercice.name}</option>)
                    })}
                </select>

                <hr style={{width: "100%", marginTop: "10px", marginBottom: "10px"}}/>
            </div>

            <div style={{width: "90%", height: "90%", marginTop: "10px", overflowY: "scroll"}}>
                <p style={{fontSize: "30px", paddingRight: "10px", paddingLeft: "10px"}}>{name}</p>
                <p style={{paddingRight: "10px", paddingLeft: "10px"}}>{description}</p>
                <p style={{paddingRight: "10px", paddingLeft: "10px"}}>Examples:</p>
                <ul>
                    {examples?.map((example, index) => {
                        return <li style={{paddingRight: "10px", paddingLeft: "10px"}} key={index}
                                   dangerouslySetInnerHTML={{__html: example}}/>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SideSection;