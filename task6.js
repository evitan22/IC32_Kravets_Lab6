function checkBrackets(str) {
    let br = "(){}[]";
    let st = [];

    for (let i = 0; i < str.length; ++i) {
        let ch = str[i];
        let ind = br.indexOf(ch);
        if (ind >= 0) {
            if (ind & 1) {
                if (!st.length) return false;
                let last_br = st.pop();
                if (last_br != br[ind - 1]) return false;
            } else {         
                st.push(ch);
            }
        }
    }
    return !st.length;
}

function someFn() {
    const mas = [];
    if(mas.length == 0) {
        mas.push(1);
    }
    else {
        return false;
    }
}

const testString = someFn.toString();
console.log(checkBrackets(testString+'('));