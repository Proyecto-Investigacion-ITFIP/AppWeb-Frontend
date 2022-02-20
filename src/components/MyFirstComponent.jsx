const MyFirstComponent = ( { texto, num } ) => {
  return (
    <div className='bg-sky-400 text-center text-2xl p-1'>
        traer las props: {texto} ({num})
    </div>
  )
}

export default MyFirstComponent