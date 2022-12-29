import React, {useEffect} from 'react';

type Props = {
    output: string;
}

const OutputSection = ({output}: Props) => {

    const [outputToDisplay, setOutputToDisplay] = React.useState(output);

    // create a css style for the output section that look like linux terminal
    const outputStyle = {
        width: "100%",
        height: "30%",
        background: "black",
        color: "white",
        paddingTop: "10px",
        paddingBottom: "10px",
        overflow: "scroll",
        fontFamily: "monospace",
        fontSize: "16px",
    };

    useEffect(() => {
        // format output string to replace \n with <br/>
        const formattedOutput = output.replace(/\n/g, "<br/>");

        // set the output to display with a little delay to make it look like a real terminal
        // split the output in multiple lines and display them one by one
        const outputLines = formattedOutput.split("<br/>");
        let outputToDisplay = "";
        outputLines.forEach((line, index) => {
            // random between 0 and 5000 seconds
            setTimeout(() => {
                outputToDisplay += line + "<br/>";
                setOutputToDisplay(outputToDisplay);
            }, 100 * index);
        });
    }, [output]);

    // auto scroll to the bottom of the output section
    useEffect(() => {
        const outputSection = document.getElementById("output_section");
        if (outputSection) {
            outputSection.scrollTop = outputSection.scrollHeight;
        }
    }, [outputToDisplay]);

    return (
        <div id="output_section" style={
            outputStyle
        }>
            <p dangerouslySetInnerHTML={{__html: outputToDisplay}}/>
        </div>
    );
};

export default OutputSection;