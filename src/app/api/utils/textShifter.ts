const textShifter = (text: string, shiftCount: number): string => {
    let shiftedText = '';

    for(let i=0; i<text.length; i++){
        const asciiCode = text.charCodeAt(i);
        
        const smallAAsciiCode = 'a'.charCodeAt(0);
        const capitalAAsciiCode = 'A'.charCodeAt(0);
        const smallzAsciiCode = 'z'.charCodeAt(0);
        const CapitalZAsciiCode = 'Z'.charCodeAt(0);

        if((asciiCode < smallAAsciiCode || asciiCode > smallzAsciiCode) && ( asciiCode < capitalAAsciiCode || asciiCode > CapitalZAsciiCode)){
            shiftedText += text[i];
            continue;
        }
        
        let shiftedAsciiCode = text.charCodeAt(i) + shiftCount;

        if((shiftedAsciiCode > smallzAsciiCode) || ( shiftedAsciiCode> CapitalZAsciiCode && asciiCode< smallAAsciiCode)){
            shiftedAsciiCode =shiftedAsciiCode - 26;
        }

        const shiftedChar = String.fromCharCode(shiftedAsciiCode);

        shiftedText += shiftedChar;
    }

    return shiftedText;
}

export default textShifter;