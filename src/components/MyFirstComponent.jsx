const MyFirstComponent = ( { texto, num } ) => {
  return (
    <div className='bg-sky-400 text-center text-2xl p-1'>
        Mi primer comoponente pa {texto} ({num})
    </div>
  )
}

export default MyFirstComponent