import React, { Fragment, useEffect, useState } from 'react'
import Product from './product';
import { nanoid } from 'nanoid';

const Forms = () => {
    const [ mostarTable, setMostrarTable] = useState(true)
    const [ textBotton, setTextoBotto ] = useState("Nuevo Producto")
    const [ colorBotton, setColorBotton ] = useState("indigo")

    useEffect(() =>{
        if( mostarTable){
            setTextoBotto("Nuevo Producto");
            setColorBotton("indigo");
        } else {
            setTextoBotto("Lista Prodcutos");
            setColorBotton("indigo");
        }
    }, [mostarTable]);
    
  return (
    <Fragment>
    <div className="flex flex-col h-full w-full items-center justify-start p-6">
      <div className='flex flex-col '>
        <h2 className='text-3x1'>Administar Producto</h2>
        <button
          onClick={() => {
            setMostrarTable(!mostarTable);
          }}
          className={`self-end mx-2 my-2 bg-${colorBotton}-700 transition duration-150 ease-in-out hover:bg-${colorBotton}-600 rounded text-white px-6 py-2 text-xs `}>
          {textBotton}
        </button>
      </div>
      {mostarTable ? <TableProduct /> : <FormsProduct />}
      </div>
    </Fragment>
  );
};


const TableProduct = () => {

    const submitEdit = (e) => { 
        e.preventDefault();
     };

    return (
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-2x1 font-extrabold">TodosProducto</h2>
        <form  onSubmit={submitEdit} className="w-full">
          <table className="tabla">
            <thead>
              <tr>
                <th>datos</th>
                <th>datos</th>
                <th>datos</th>
              </tr>
            </thead>
            <tbody>
              {listaProduct.map((product) => {
                return <filaProduct key={nanoid()} product={product} />;
              })}
            </tbody>
          </table>
        </form>
      </div>
    );
};

const filaProduct = ({ product }) => { 
  const [ edit, setEdit ] = useState(false);
  const [ infoProduct, setInfoProduct ] = useState({
    name: product.name,
    brand: product.brand,
    model: product.model,
  });
  

  return (
    <tr>
      {edit ? (
        <Fragment>
          <td>
            <input type="text" value={ infoProduct.name } 
            onChange={ (e) => setInfoProduct({...infoProduct, name: e.target.value  }) }  
            />
          </td>
          <td>
            <input type="text" value={ infoProduct.brand } />
          </td>
          <td>
            <input type="text" value={ infoProduct.model } />
          </td>
        </Fragment>
        ) : (
          <Fragment>
            <td>{product.name}</td>
            <td>{product.brand}</td>
            <td>{product.model}</td>
          </Fragment>
        )}

        <td>
          <div className="flex w-full justify-around">
            {edit ? (
              <button type="submit">
                <i onClick={() => setEdit(!edit)} className="fas fa-check" />
              </button>
            ) : (
              <i
                onClick={() => setEdit(!edit)}
                className="fa-solid fa-starfighter-twin-ion-engine"
              />
            )}
            <i className="fa-solid fa-starfighter-twin-ion-engine" />
          </div>
        </td>
      </tr>
    );
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

export default Forms