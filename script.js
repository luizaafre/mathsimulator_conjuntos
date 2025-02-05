let setA = new Set();
let setB = new Set();
let setC = new Set();

function addElement(set) {
    let input = document.getElementById(`add${set}`);
    let value = input.value.trim();

    if (value) {
        if (set === 'A') {
            setA.add(value);
            updateList('A');
        } else if (set === 'B') {
            setB.add(value);
            updateList('B');
        } else if (set === 'C') {
            setC.add(value);
            updateList('C');
        }
        input.value = '';
    }
}

function updateList(set) {
    let list = document.getElementById(`list${set}`);
    list.innerHTML = '';
    let currentSet = set === 'A' ? setA : set === 'B' ? setB : setC;
    currentSet.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

function checkPertence() {
    let value = document.getElementById("checkValue").value.trim();
    let result = '';

    if (setA.has(value)) {
        result += `O valor "${value}" pertence ao Conjunto A.<br>`;
    } else {
        result += `O valor "${value}" NÃO pertence ao Conjunto A.<br>`;
    }

    if (setB.has(value)) {
        result += `O valor "${value}" pertence ao Conjunto B.<br>`;
    } else {
        result += `O valor "${value}" NÃO pertence ao Conjunto B.<br>`;
    }

    if (setC.has(value)) {
        result += `O valor "${value}" pertence ao Conjunto C.<br>`;
    } else {
        result += `O valor "${value}" NÃO pertence ao Conjunto C.<br>`;
    }

    document.getElementById('pertenceResultado').innerHTML = result;
}

function performOperation(operation) {
    let result;

    switch (operation) {
        case 'uniao':
            result = new Set([...setA, ...setB, ...setC]);
            break;
        case 'intersecao':
            result = new Set([...setA].filter(x => setB.has(x) && setC.has(x)));
            break;
        case 'diferenca':
            result = new Set([...setA].filter(x => !setB.has(x) && !setC.has(x)));
            break;
        default:
            result = new Set();
    }

    displayResult(result);
}

function displayResult(resultSet) {
    let resultDiv = document.getElementById('resultado');
    resultDiv.innerHTML = 'Resultado: ' + Array.from(resultSet).join(', ') || 'Vazio';
}
