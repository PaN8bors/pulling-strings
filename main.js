function main() {

    const myName = 'Parish Neighbors';
    const mySplit = myName.split(' ');
    const first = myName.slice(0, 6);
    const last = myName.slice(7);
    const nameArray = ['Parish', 'Allen', 'Neighbors'];
    const arrayFirst = nameArray[0];
    const arrayLast = nameArray[nameArray.length -1];


    console.log(myName);
    console.log(`${arrayFirst} ${arrayLast}`);
    console.log(first + ' ' + 'Allen' + ' ' + last);
    console.log(`${first} Allen ${last}`);
    console.log(myName.replace('N', 'Allen N'));
    console.log(myName.toUpperCase());
    console.log(myName.toLowerCase());
    console.log(mySplit[1] + ' ' + mySplit[0]);
    console.log(myName.slice(0, 2));
    console.log(myName.slice(7, 12));
    console.log(myName[0]);
    console.log(myName[7]);



}

main();