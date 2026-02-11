async function getData(){return 'OK'}
const cek = async() => "Siap"
async function delay(){await new Promise(r=>setTimeout(r,1000))}
async function hitung(a){return a*2}
async function tampil(){console.log(await getData())}
