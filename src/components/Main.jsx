import Gambar from '../../public/man.png'
import { ThemeContext } from '../App'
import { useContext } from 'react'

const Main = () => {
  const { strings, bahasa } = useContext(ThemeContext);
  return (
    <main className='py-3 px-5 md:px-14 lg:px-16 flex flex-col gap-10 h-full overflow-y-auto'>
      <section className='banner'>
        {/* Say Hallo */}
        <div className='flex flex-col gap-6'>
          <h1 className='title'>{strings[bahasa].hi} <span className='text-blue-700'>Anggi Permana</span> 👋</h1>
          <p className='text-lg lg:text-3xl'>
          As a web developer, I am skilled in both frontend and backend. I use React to create interactive UIs and Springboot and Node.js to build APIs, or create fullstack projects with Next JS 
          </p>
        </div>
        {/* Image */}
        <div className='flex justify-center'>
          <img src={Gambar} alt="Gambar ikon programmer" className='w-4/5'/>
        </div>
      </section>
    </main>
  )
}

export default Main