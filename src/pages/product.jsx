import React, { Fragment, useEffect, useState } from 'react'

const Product = () => {
    const [ mostarTable, setMostrarTable] = useState(true)
    const [ textBotton, setTextoBotto ] = useState("Nuevo Producto")

    useEffect(() =>{
        if(mostarTable){
            setTextoBotto("Nuevo Producto");
        } else {
            setTextoBotto("Lista Prodcutos")
        }
    }, [mostarTable]);
    
  return (
    <Fragment>
    <div className="flex flex-col h-full w-full items-center justify-start p-6">
      <div className='flex flex-col '>
        <h2 className='text-3x1'>Probando PAGINA</h2>
        <button
          onClick={() => {
            setMostrarTable(!mostarTable);
          }}
          className="self-end mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">
          {textBotton}
        </button>
      </div>
      {mostarTable ? <TableProduct /> : <FormsProduct />}
      </div>
    </Fragment>
  );
};


const TableProduct = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2x1 font-extrabold'>TodosProducto</h2>
        <table>
            <thead>
                <tr>
                    <th>datos</th>
                    <th>datos</th>
                    <th>datos</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>dato1</td>
                    <td>dato2</td>
                    <td>dato3</td>
                </tr>
                <tr>
                <td>datalle1</td>
                <td>datalle2</td>
                <td>datalle3</td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}


const FormsProduct = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2x1 font-extrabold'>Crear Nuevo Producto</h2>
            <form className='grid grid-cols-2'>
                <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type='text' />
                <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type='text' />
                <input className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2' type='text' />
                <button className='col-span-2 mx-2 my-2 bg-slate-900 transition duration-150 ease-in-out focus:outline-none hover:bg-slate-700 hover:text-sky-200 rounded text-gray-100 px-6 py-2 text-xs"'>
                Guardar Cambios
                </button>
            </form>
        </div>
    )
}

export default Product