// for문을 이용한 *만들기

// star = '';

// for (let i = 0; i < 5; i++){
//     for (let j =0; j <i+1; j++){
//         star += '*';
//     }
//     star += '\n';
// }

// console.log(star)

//덧셈
const add = (num1, num2) => {
    const result = num1 + num2
    
    return result;
}

// //뺄셈
const subtract = (num1, num2) => {
    const result = num1 - num2
    
    return result;
}

// //곱하기
const multiply = (num1, num2) => {
    const result = num1 * num2
    
    return result;
}

// //나누기
const divide = (num1, num2) => {
    const result = num1 / num2
    
    return result;
}

// result = add(10, 20);
// console.log('result: ', result)


// result = subtract(10, 20);
// console.log('result: ', result)


// result = multiply(10, 20);
// console.log('result: ', result)


// result = divide(10, 20);
// console.log('result: ', result)

const addclick = () =>{
    //num1 값 입력
    const num1 = parseInt(document.getElementById('num1').value)
    console.log('num1:', num1)
    //num2 값 입력
    const num2 = parseInt(document.getElementById('num2').value)
    console.log('num2: ',num2)
    //더하기 함수 호출
    const result =add(num1, num2)
    console.log('result: ', result)
    //결과보기에 값 변경
    document.getElementById('result').innerText = result;
}

const subtractclick = () =>{

    const num1 = parseInt(document.getElementById('num1').value)
    console.log('num1:', num1)

    const num2 = parseInt(document.getElementById('num2').value)
    console.log('num2: ',num2)

    const result =subtract(num1, num2)
    console.log('result: ', result)

    document.getElementById('result').innerText = result;
}

const multiplyclick = () =>{

    const num1 = parseInt(document.getElementById('num1').value)
    console.log('num1:', num1)

    const num2 = parseInt(document.getElementById('num2').value)
    console.log('num2: ',num2)

    const result =multiply(num1, num2)
    console.log('result: ', result)

    document.getElementById('result').innerText = result;
}

const divideclick = () =>{

    const num1 = parseInt(document.getElementById('num1').value)
    console.log('num1:', num1)

    const num2 = parseInt(document.getElementById('num2').value)
    console.log('num2: ',num2)

    const result =divide(num1, num2)
    console.log('result: ', result)

    document.getElementById('result').innerText = result;
}