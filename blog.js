const glasses = [{
        marka: 'Ray-Ban',
        color: 'black',
        size: '55'
    },
    {
        marka: 'Armani',
        color: 'blue',
        size: '54'
    },
    {
        marka: 'Cartier',
        color: 'yellow',
        size: '51'
    }
];

const listGlasses = () => {
    glasses.map((glass) => {
        console.log(`Gözlük Markası : ${glass.marka}, Gözlük Rengi : ${glass.color}, Gözlük Ekartman : ${glass.size}`);
    });
}


const addGlass = (newGlass) => {
    const promiseUtku = new Promise((resolve, reject) => {
        glasses.push(newGlass);
        resolve('Başarıyla Eklendi');
        //reject('hata');
    });
    return promiseUtku;
}

async function showRefreshGlassList() {
    try {
        
        await addGlass({marka: 'TagHeuer', color: 'orange', size: '57'})
        listGlasses();
  
    } catch (error) {
        console.log(error);
    }
}

showRefreshGlassList();


    


