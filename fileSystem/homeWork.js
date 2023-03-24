const { readFile, writeFile, appendFile, unlink } = require('node:fs');

writeFile('employees.json', '{"name": "Employee 1 Name", "salary":2000}', (err, data)=> {
    if(err) console.log(err);
    console.log('Employees.json oluşturuldu');
});


readFile('employees.json', 'utf8', (err, data) => {
    if(err) console.log(err);
    console.log(data);
    console.log('DOSYA OKUNDU');
});


appendFile('employees.json', '\ {"name": "Employee 2 Name", "salary":5500}', (err, data)=> {
    if(err) console.log(err);
    console.log('Employees.json güncellendi');
}); 

unlink('employees.json', (err)=> {
    if(err) console.log(err)
    console.log('dosya silindi');
})