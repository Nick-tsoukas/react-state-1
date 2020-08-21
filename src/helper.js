function random(){
    const numbers = ['one', 'two', 'three', 'four', 'five', 'six'];
    return numbers[Math.floor(Math.random() * numbers.length)];

}

export default random;