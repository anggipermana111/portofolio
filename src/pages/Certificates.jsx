import { useContext } from "react";
import { ThemeContext } from "../App";

function Certificates() {
    const { certificates, theme, strings, bahasa } = useContext(ThemeContext);
    return (
        <>
            <section className="py-7 px-5">
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5'>
                    {
                        certificates.map((project) => {
                            return (
                                <figure key={project.id} className={`project-${theme} p-3 md:p-3 lg:p-4 border rounded-2xl flex flex-col gap-5`}>
                                    <img src={project.gambar} alt={project.nama} className='rounded w-full aspect-video' />
                                    <figcaption className='p-1 flex flex-col gap-1'>
                                        <h1 className='font-bold text-xl text-center'>{project.nama}</h1>
                                        <p className='text-justify'>
                                            {project.deskripsi}
                                        </p>
                                    </figcaption>
                                </figure>
                            )
                        })
                    }
                </div>
            </section></>
    )
}

export default Certificates