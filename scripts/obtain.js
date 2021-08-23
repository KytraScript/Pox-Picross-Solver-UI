const obtain = async () => {

    let columns = [];
    let columnValues = [];

    let values = await document.querySelectorAll('.rule-col');

    for (let i = 0; i < values.length; i++) {
        columns = [];
        for (let j = 0; j < values[0].children.length; j++) {
            columns.push(parseInt(values[i].children[j].lastChild.value));
        }
        columnValues.push(columns.filter( x => x));
    }

    console.log(columnValues);


    let rules = await document.querySelectorAll('.rule');

};

module.exports = obtain;

