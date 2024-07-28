import Header from './components/Header'
import { useState } from 'react';
import { createContext } from 'react';
import Koperasi from '../public/koperasi.png'
import Movie from '../public/movie.png'
import Inventory from '../public/inventory.png'
import Tiket from '../public/tiket.png'
import APCinema from '../public/apcinema.png'
import Bidkiick from '../public/bidkiick.png'
import Kenta from '../public/k&ta.png'
import { useRef } from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Logika from '../public/Logika.png';
import Struktur from '../public/Struktur.png';
import Basis from '../public/Basis.png';
import Web from '../public/Web.png';
import Java from '../public/Java.png';
import Spring from '../public/Spring.png';
import Github from '../public/Github.png';
import Reacts from '../public/React.png';
import InstrukturGithub from '../public/InstrukturGithub.png';
import InstrukturJava from '../public/InstrukturJava.png';

export const ThemeContext = createContext({
  // theme: null,
  // setTheme: () => { },
});

const certificates = [
  {
    id: 1,
    name: "Algorithmic Logic (C Language)",
    description: "Certificate of training in algorithmic logic using the C programming language. This course provides a deep understanding of fundamental programming concepts and algorithm development.",
    image: Logic
  },
  {
    id: 2,
    name: "Data Structures (C Language)",
    description: "Certificate of training in data structures using the C programming language. This course covers essential data structures and their implementation, enhancing problem-solving skills.",
    image: Structure
  },
  {
    id: 3,
    name: "Database Management (MySQL)",
    description: "Certificate of training in database management using MySQL. This course provides comprehensive knowledge of database design, queries, and management techniques.",
    image: Database
  },
  {
    id: 4,
    name: "Basic Web Development (HTML, CSS, JavaScript)",
    description: "Certificate of training in basic web development using HTML, CSS, and JavaScript. This course covers the creation of responsive and interactive web pages.",
    image: Web
  },
  {
    id: 5,
    name: "Java Fundamentals (Swing)",
    description: "Certificate of training in Java fundamentals and desktop application development using Swing. This course lays a strong foundation in Java programming and GUI design.",
    image: Java
  },
  {
    id: 6,
    name: "Advanced Java (Spring Boot for Backend)",
    description: "Certificate of advanced Java training using Spring Boot for backend development. This course focuses on creating robust APIs and backend services.",
    image: Spring
  },
  {
    id: 7,
    name: "Git / GitHub",
    description: "Certificate of training in Git and GitHub for collaborative project development. This course covers version control, branching, and effective collaboration techniques.",
    image: Github
  },
  {
    id: 8,
    name: "React (Frontend Development)",
    description: "Certificate of training in React for frontend web development. This course teaches how to create dynamic and high-performance user interfaces.",
    image: React
  },
  {
    id: 9,
    name: "Java Fundamentals Instructor",
    description: "Certificate of recognition as an instructor for Java Fundamentals. This certification acknowledges the ability to teach and guide students in Java programming.",
    image: JavaInstructor
  },
  {
    id: 10,
    name: "Git/GitHub Instructor",
    description: "Certificate of recognition as an instructor for Git and GitHub. This certification highlights expertise in version control systems and the ability to educate others.",
    image: GitInstructor
  }
];

const projects = [
  {
    id: 1,
    name: "Koperasi",
    description: "This cooperative savings and loan project includes managing cooperative member data, member savings, member loans, and installment data for each member. It serves as a final project for my algorithmic logic training, implementing all basic programming logic taught in a console project.",
    link: "https://github.com/anggipermana111/koperasi-anggi-projekan-bahasa-C",
    image: Koperasi,
    view: null,
    tech: ["C Language"]
  },
  {
    id: 2,
    name: "Tricksters Movies",
    description: "This project displays information about movies, such as posters, descriptions, ratings, actors, trailers, and all related data based on the TMDB external API. It was created as a final project for basic web development training, implementing HTML, CSS, and JavaScript.",
    link: "https://github.com/anggipermana111/projek-movie",
    image: Movie,
    view: 'https://trickstersmovie.000webhostapp.com/',
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 3,
    name: "Monica Jaya",
    description: "This project is for managing inventory in a building material store. It was created as a final project for basic Java training, implementing Java Swing with NetBeans IDE in a desktop application.",
    link: "https://github.com/anggipermana111/projektokobangunan",
    image: Inventory,
    view: null,
    tech: ["Java", "Swing", "MySQL"]
  },
  {
    id: 4,
    name: "Tiket Go",
    description: "This cinema ticket booking project allows users to select movies, choose cinema seats, and make ticket reservations and payments. It was created as a final project for advanced Java training, implementing Java Spring Boot with IntelliJ IDEA in a group of two.",
    link: "https://github.com/anggipermana111/UasJavaLanjutan",
    image: Ticket,
    view: null,
    tech: ["Java", "Spring Boot", "JavaScript", "React", "Tailwind CSS", "MySQL"]
  },
  {
    id: 5,
    name: "APCinema",
    description: "This cinema ticket booking project allows users to select movies, choose seats, and make reservations and payments, implementing sandbox payment using Midtrans. It was created as a final project for React training, implementing React for the frontend and Golang Gin for the backend, using VS Code IDE.",
    link: "https://github.com/anggipermana111/last-project",
    image: APCinema,
    view: null,
    tech: ["Golang", "Gin", "JavaScript", "React", "Tailwind CSS", "PostgreSQL", "Midtrans payment"]
  },
  {
    id: 6,
    name: "BidKiicks",
    description: "This auction-themed project allows for the sale of items through an auction system, enabling users to bid on desired items. It was developed using the MERN stack (MongoDB, Express.js, React, Node.js).",
    link: "https://github.com/anggipermana111/BidKiicks",
    image: Bidkiick,
    view: null,
    tech: ["JavaScript", "Node.js", "Express.js", "React", "MongoDB"]
  },
  {
    id: 7,
    name: "K&TA",
    description: "This online workshop reservation project allows for advanced workshop reservations. It implements the FONNTE API for automatic WhatsApp messaging and Nodemailer for a password recovery feature that sends OTP codes via email.",
    image: Kenta,
    view: null,
    tech: ["JavaScript", "Node.js", "Express.js", "React", "MySQL", "Fonnte API", "Nodemailer"]
  }
];

// const certificates = [
//   {
//     id: 1,
//     nama: "Logika Algoritma (C Language)",
//     deskripsi: "Sertifikat pelatihan logika algoritma menggunakan bahasa pemrograman C",
//     gambar: Logika
//   },
//   {
//     id: 2,
//     nama: "Struktur Data (C Language)",
//     deskripsi: "Sertifikat pelatihan struktur data menggunakan bahasa pemrograman C",
//     gambar: Struktur
//   },
//   {
//     id: 3,
//     nama: "Basis Data (MySql)",
//     deskripsi: "Sertifikat pelatihan basis data menggunakan MySQL",
//     gambar: Basis
//   },
//   {
//     id: 4,
//     nama: "Web Dasar (HTML, CSS, Javascript)",
//     deskripsi: "Sertifikat pelatihan web dasar menggunakan HTML, CSS, dan Javascript",
//     gambar: Web
//   },
//   {
//     id: 5,
//     nama: "Java Fundamental (Swing)",
//     deskripsi: "Sertifikat pelatihan fundamental serta implementasinya untuk membuat program desktop menggunakan Swing",
//     gambar: Java
//   },
//   {
//     id: 6,
//     nama: "Advanced Java (Springboot for Backend)",
//     deskripsi: "Sertifikat pelatihan java lanjutan mengunakan springboot untuk membuat API",
//     gambar: Spring
//   },
//   {
//     id: 7,
//     nama: "Git / GitHub",
//     deskripsi: "Sertifikat pelatihan git dan github untuk kerjasama dalam pembuatan project",
//     gambar: Github
//   },
//   {
//     id: 8,
//     nama: "React (Frontend)",
//     deskripsi: "Sertifikat pelatihan react untuk membuat frontend project website",
//     gambar: Reacts
//   },
//   {
//     id: 9,
//     nama: "Instruktur Java Fundamental",
//     deskripsi: "Sertifikat sebagai instruktur / pengajar Java Fundamental",
//     gambar: InstrukturJava
//   },
//   {
//     id: 10,
//     nama: "Instruktur Git/Github",
//     deskripsi: "Sertifikat sebagai instruktur / pengajar git dan github",
//     gambar: InstrukturGithub
//   },
// ]

// const projects = [
//   {
//     id: 1,
//     nama: "Koperasi",
//     deskripsi: "Project koperasi simpan pinjam ini mencakup kelola data anggota koperasi, simpanan anggota, pinjaman anggota data angsuran dari setiap anggota, program ini adalah program project akhir pelatihan logika algoritma saya yang mengimplementasikan seluruh dasar logika pemrograman yang telah diajarkan dalam bentuk project console",
//     link: "https://github.com/anggipermana111/koperasi-anggi-projekan-bahasa-C",
//     gambar: Koperasi,
//     view: null,
//     tech: ["C Language"]
//   },
//   {
//     id: 2,
//     nama: "Tricksters Movies",
//     deskripsi: "Project ini menampilkan mengenai film, seperti gambar poster film, deskripsi, rating, aktor, video trailer dan semua data yang berhubungan mengenai film berdasarkan API dari TMDB (API eksternal), project ini dibuat sebagai tugas akhir pelatihan WEB dasar dengan mengimplementasikan HTML, CSS, dan Javascript ke dalam project website",
//     link: "https://github.com/anggipermana111/projek-movie",
//     gambar: Movie,
//     view: 'https://trickstersmovie.000webhostapp.com/',
//     tech: ["HTML", "CSS", "Javascript"]
//   },
//   {
//     id: 3,
//     nama: "Monica Jaya",
//     deskripsi: "Project ini adalah project untuk mengelola inventary barang di toko bangunan, project ini dibuat sebagai tugas akhir pelatihan Java dasar dengan mengimplementasikan Java swing menggunakan IDE netbeans ke dalam project desktop",
//     link: "https://github.com/anggipermana111/projektokobangunan",
//     gambar: Inventory,
//     view: null,
//     tech: ["Java", "Swing", "MySQL"]
//   },
//   {
//     id: 4,
//     nama: "Tiket Go",
//     deskripsi: "Project ini bertema pemesanan tiket bioskop, berfungsi untuk memilih film yang akan ditonton, memilih kursi bioskop, dan melakukan pemesanan sekaligus pembayaran tiket, project ini dibuat sebagai tugas akhir pelatihan Java lanjutan dengan mengimplementasikan Java Springboot menggunakan IDE IntellIJ ke dalam project website, dibuat secara berkelompok yang terdiri dari 2 orang",
//     link: "https://github.com/anggipermana111/UasJavaLanjutan",
//     gambar: Tiket,
//     view: null,
//     tech: ["Java", "Springboot", "Javascript","React","Tailwind CSS", "MySQL"]
//   }, 
//   {
//     id: 5,
//     nama: "APCinema",
//     deskripsi: "Project pemesanan tiket bioskop yang berfungsi untuk memilih film yang akan ditonton, memilih kursi bioskop, dan melakukan pemesanan sekaligus pembayaran tiket dengan mengimplementasikan pembayaran sandbox menggunakan Midtrans, project ini dibuat sebagai tugas akhir pelatihan React dengan mengimplementasikan React sebagai frontend dan Golang Gin sebagai Backend, menggunakan IDE VsCode dalam proses pembuatannya",
//     link: "https://github.com/anggipermana111/last-project",
//     gambar: APCinema,
//     view: null,
//     tech: ["Golang", "Gin", "Javascript","React", "Tailwind css", "PostgreSQL", "Midtrans payment"]
//   }, 
//   {
//     id: 6,
//     nama: "BidKiicks",
//     deskripsi: "Project yang mengambil tema lelang, berfungsi untuk penjualan barang dengan sistem lelang sekaligus jika user ingin melakukan bid untuk barang lelang yang diminati,project ini di develop menggunakan MERN (MongoDB, Express.js, React, Node.js)",
//     link: "https://github.com/anggipermana111/BidKiicks",
//     gambar: Bidkiick,
//     view: null,
//     tech: ["Javascript", "Node.js", "Express.js", "React", "MongoDB"]
//   },
//   {
//     id: 7,
//     nama: "K&TA",
//     deskripsi: "Project untuk reservasi bengkel online, berfungsi untuk melakukan reservasi bengkel dari jauh hari, project ini mengimplementasikan FONNTE API sebagai API external untuk fitur kirim pesan via whatsapp secara otomatis serta nodemailer untuk fitur forgot password yang akan mengirim kode OTP ke email jika user lupa password untuk login",
//     gambar: Kenta,
//     view: null,
//     tech: ["Javascript", "Node.js", "Express.js", "React", "MySQL", "Fonnte API", "Nodemailer"]
//   }
// ]

const strings = {
  id: {
    language: 'Bahasa',
    country: 'Indonesia',
    theme: 'tema',
    hi: "Hi semua, Aku",
    project: 'projek',
    view: 'lihat',
    by: 'by'
  },
  en: {
    language: 'Language',
    country: 'English',
    theme: 'theme',
    hi: "Hi there, I'm",
    project: 'project',
    view: 'view',
    by: 'oleh'
  }
}

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [bahasa, setBahasa] = useState('en')
  const projectRef = useRef(null);
  useEffect(()=>{
    console.log("Berhasil mengubah tema menjadi",theme=='dark'?"Gelap":"Terang");
  },[theme]);
  return (
    <ThemeContext.Provider value={{ certificates ,theme, setTheme, projects, strings, bahasa, setBahasa, projectRef }}>
      <div className={`body ${theme} flex flex-col`}>
        <Header />
        <Outlet/>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App