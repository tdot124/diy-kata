const joinNames = namesObj => {
    
    if (namesObj.length > 2){
    
    const start = namesObj.shift().name;
    const end = ' & '+ namesObj.pop().name;
    const middleArr = namesObj.map (obj => ', ' + obj.name);
    const middle = middleArr.reduce((acc,person) => acc + person);    
    return `${start + middle + end}`;
    
    } else if (namesObj.length === 2) {
        return `${namesObj.shift().name} & ${namesObj.pop().name}`;
        } else {
            return `${namesObj.shift().name}`;
        }

};

module.exports = joinNames;
