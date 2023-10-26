import React from 'react'
const Dat = require ("../Datos-ONIET---Hoja-1---JSON.json");

export const Data = () => {
    const temp = Dat[0]; //Datos del json
    console.log(temp)
    let arr = [Dat[0],Dat[1],Dat[2],Dat[3],Dat[4]];
    console.log(arr)
    console.log("REGISTRO: " + arr[0])

    const empresa1 = [arr[0].Empresa, arr[0].ProduccionTotal, (arr[0].ProduccionTotal)-(arr[0].CantidaPiezasConFallas), arr[0].CantidaPiezasConFallas, ((arr[0].ProduccionTotal-arr[0].CantidaPiezasConFallas) * 100) / arr[0].ProduccionTotal, (arr[0].CantidaPiezasConFallas * 100) / arr[0].ProduccionTotal]

    for (let i = 0; i < 20; i++) { //intenta recorrer el json y asignarlo al array
        arr =+ Dat[i];
    }

  return (
    <div>
       <div className='card'>
        <li>    {empresa1[0] + "----Produccion TOTAL: " + empresa1[1] + "---Piezas OK: " + empresa1[2] + "---Cant Piezas con falla: " + empresa1[3] + "---Piezas OK: %" + empresa1[4] + "---Piezas falladas: %" + empresa1[5]}
</li>
        </div>
    </div>
  )
}

export default Data;