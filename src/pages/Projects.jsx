import { useContext } from "react";
import { ThemeContext } from "../App";

function Projects() {
    const { projects, theme, strings, bahasa } = useContext(ThemeContext);
    return (
        <>
            <section className="py-7 px-5">
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5'>
                    {
                        projects.map((project) => {
                            return (
                                <figure key={project.id} className={`project-${theme} p-3 md:p-3 lg:p-4 border rounded-2xl flex flex-col gap-5`}>
                                    <img src={project.gambar} alt={project.nama} className='rounded w-full aspect-video' />
                                    <figcaption className='p-1 flex flex-col gap-1'>
                                        <h1 className='font-bold text-xl text-center'>{project.nama}</h1>
                                        <p className='text-justify h-14'>
                                            {project.deskripsi}
                                        </p>
                                        <div className='mt-6 flex justify-between'>
                                            {
                                                project.link && <a href={project.link} target='_blank'>
                                                <button className='w-32 h-10 bg-blue-700 border-none rounded-3xl cursor-pointer'>GitHub</button>
                                            </a>
                                            }
                                            {
                                                project.view && <a href={project.view} target='_blank'>
                                                    <button className='w-32 h-10 bg-red-600 border-none rounded-3xl cursor-pointer'>{strings[bahasa].view}</button>
                                                </a>
                                            }
                                        </div>
                                    </figcaption>
                                </figure>
                            )
                        })
                    }
                </div>
            </section></>
    )
}

export default Projects