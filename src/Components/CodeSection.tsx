import React, {useEffect} from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

type Props = {
    setOutput: (output: string) => void;
    tests: any[];
    baseCode: string;
}

const CodeSection = ({setOutput, baseCode, tests}: Props) => {


    const [code, setCode] = React.useState(baseCode);
    const [codeToExecute, setCodeToExecute] = React.useState(code);

    const [isExecuting, setIsExecuting] = React.useState(false);
    const [dataset, setDataset] = React.useState(tests);

    const [logOutput, setLogOutput] = React.useState("");

    useEffect(() => {
        setCodeToExecute(code);
        setCode("");
        setCode(baseCode);
        setLogOutput("");
        setDataset(tests);
        setOutput("");
    }, [baseCode]);

    console.log = (output: string) => {
        const newoutput = "[LOG] " + output + "<br/>" + logOutput;
        setLogOutput(newoutput);
    }
    console.error = (output: string) => {
        const newoutput = "[ERROR] " + output + "<br/>" + logOutput;
        setLogOutput(newoutput);
    }

    useEffect(() => {
        setCodeToExecute(code);
    }, [code]);

    useEffect(() => {
        setLogOutput("");
    }, [codeToExecute]);

    const executeCode = () => {
        setOutput("Script is running...");
        setIsExecuting(true);
        // Cache for test results
        const testResults = new Map();
        // remove comments
        const codeWithoutComments = codeToExecute.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "");
        // remove empty lines
        const codeWithoutEmptyLines = codeWithoutComments.replace(/^\s*[\r ]/gm, "");
        // remove function to first { (the string start with the keyword function and end with the first {)
        const codeWithoutFunction = codeWithoutEmptyLines.replace(/function[\s\S]*?\{/gm, "");
        // remove last }
        const codeWithoutLastBracket = codeWithoutFunction.replace(/\}$/, "");
        // in tests, get all indexes execpt "expected"
        const paramsNames = Object.keys(tests[0]).filter(key => key !== "expected");
        // execute code
        let outputString = '';
        try {
            let fn = new Function(...paramsNames, codeWithoutLastBracket);
            if (paramsNames.length < 1) {
                fn = new Function(codeWithoutLastBracket);
            }
            const timestamp = new Date().toLocaleTimeString();
            // Function for running a single test
            const runTest = (data: any, idx: number) => {
                const result = fn(...paramsNames.map(param => data[param]));
                if (result?.toString() !== data.expected?.toString()) {
                    testResults.set(idx, {status: "failed", expected: data.expected, got: result});
                    return;
                }
                testResults.set(idx, {status: "passed", expected: data.expected, got: result});
            };

            let failed = false;
            // loop through dataset in parallel
            Promise.all(dataset.map((data, idx) => runTest(data, idx))).then(() => {
                outputString = "================ Output ====================\n";
                testResults.forEach((result, idx) => {
                    if (result.status === "failed") {
                        outputString += `[${timestamp}] ❌ Test ${idx} failed, expected: ${result.expected}, got: ${result.got}\n`;
                        failed = true;
                    } else {
                        outputString += `[${timestamp}] ✅ Test ${idx + 1} passed\n`;
                    }
                });
                // get logs and add them to output
                const logs = "================ Logs ====================\n" + logOutput + "==========================================\n";
                if (logOutput.length > 0) {
                    outputString += logs;
                }
                if (!failed) {
                    outputString += "================ Success ====================\n";
                    outputString += "Congratulations, your code passed all tests!\n";
                } else {
                    outputString += "================ Failed ====================\n";
                    outputString += "Your code failed some tests, please try again!\n";
                }
                outputString += "============================================";
                setOutput(outputString);
                setIsExecuting(false);
            });
        } catch (e) {
            console.table(e);
            console.table(codeWithoutLastBracket);
            outputString = "================ Failed ====================\n" +
                "Your code failed some tests, please try again!\n" +
                `\n${e}\n` +
                "============================================";
            setIsExecuting(false);
            setOutput(outputString);
        }
    };

    // play button style
    const playButtonStyle = {
        width: "90%",
        height: "50px",
        background: "#1c8006",
        color: "white",
        fontSize: "20px",
        border: "none",
        cursor: "pointer",
        outline: "none",
        borderRadius: "5px",
        marginTop: "10px",
    };

    return (
        <div style={{
            width: "100%",
            height: "70%",
        }}>
            <div
                style={{height: "10%", display: "flex", justifyContent: "center", alignItems: "center"}}
            >
                <button
                    disabled={isExecuting}
                    style={playButtonStyle}
                    onClick={() => {
                        executeCode();
                    }}
                >
                    Run
                </button>

            </div>
            <CodeEditor
                value={code}
                language="js"
                placeholder="Please enter JS code."
                onChange={(evn) => setCode(evn.target.value)}
                padding={15}
                style={{
                    height: "90%",
                    width: "100%",
                    fontSize: 16,
                    backgroundColor: "#f5f5f5",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    overflowY: "scroll",
                }}
            />
        </div>
    );
};

export default CodeSection;