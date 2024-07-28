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
    nama: "Logika Algoritma (C Language)",
    deskripsi: "Certified in mastering algorithmic logic using the C programming language, demonstrating a strong foundation in problem-solving and computational thinking.",
    gambar: Logika
  },
  {
    id: 2,
    nama: "Struktur Data (C Language)",
    deskripsi: "Certified in data structure proficiency using the C programming language, showcasing expertise in efficient data organization and manipulation.",
    gambar: Struktur
  },
  {
    id: 3,
    nama: "Basis Data (MySql)",
    deskripsi: "Certified in MySQL database management, highlighting skills in designing, implementing, and optimizing robust database solutions.",
    gambar: Basis
  },
  {
    id: 4,
    nama: "Web Dasar (HTML, CSS, Javascript)",
    deskripsi: "Certified in fundamental web development using HTML, CSS, and JavaScript, demonstrating the ability to create dynamic and responsive web interfaces.",
    gambar: Web
  },
  {
    id: 5,
    nama: "Java Fundamental (Swing)",
    deskripsi: "Certified in fundamental Java programming and its application in building desktop applications using Swing, showcasing a solid grasp of object-oriented programming.",
    gambar: Java
  },
  {
    id: 6,
    nama: "Advanced Java (Springboot for Backend)",
    deskripsi: "Certified in advanced Java development using Spring Boot for backend API creation, demonstrating expertise in building scalable and efficient backend services.",
    gambar: Spring
  },
  {
    id: 7,
    nama: "Git / GitHub",
    deskripsi: "Certified in Git and GitHub, proficient in version control and collaborative project management, essential for modern software development.",
    gambar: Github
  },
  {
    id: 8,
    nama: "React (Frontend)",
    deskripsi: "Certified in React for frontend development, showcasing the ability to build sophisticated and high-performance web applications.",
    gambar: Reacts
  },
  {
    id: 9,
    nama: "Instruktur Java Fundamental",
    deskripsi: "Certified as an instructor in Java Fundamentals, recognized for the ability to teach and mentor others in core Java programming concepts.",
    gambar: InstrukturJava
  },
  {
    id: 10,
    nama: "Instruktur Git/Github",
    deskripsi: "Certified as an instructor in Git and GitHub, acknowledged for expertise in guiding teams on version control best practices and collaborative workflows.",
    gambar: InstrukturGithub
  },
]

const projects = [
  {
    id: 1,
    nama: "Koperasi",
    deskripsi: "This credit union project includes managing cooperative member data, member savings, member loans, and installment data for each member. This program is the final project of my algorithm logic training, which implements all the basic programming logic taught in a console project.",
    link: "https://github.com/anggipermana111/koperasi-anggi-projekan-bahasa-C",
    gambar: Koperasi,
    view: null,
    tech: ["C Language"]
  },
  {
    id: 2,
    nama: "Tricksters Movies",
    deskripsi: "This project displays information about movies, such as movie posters, descriptions, ratings, actors, trailers, and all related data based on the TMDB API (external API). This project was created as the final assignment for basic web training, implementing HTML, CSS, and JavaScript in a website project.",
    link: "https://github.com/anggipermana111/projek-movie",
    gambar: Movie,
    view: 'https://trickstersmovie.000webhostapp.com/',
    tech: ["HTML", "CSS", "Javascript"]
  },
  {
    id: 3,
    nama: "Monica Jaya",
    deskripsi: "This project is for managing inventory at a hardware store. It was created as the final assignment for basic Java training, implementing Java Swing using the NetBeans IDE in a desktop project.",
    link: "https://github.com/anggipermana111/projektokobangunan",
    gambar: Inventory,
    view: null,
    tech: ["Java", "Swing", "MySQL"]
  },
  {
    id: 4,
    nama: "Tiket Go",
    deskripsi: "This cinema ticket booking project allows users to select movies, choose cinema seats, and make ticket reservations and payments. This project was created as the final assignment for advanced Java training, implementing Java Springboot using the IntelliJ IDE in a website project. It was developed in a group of two people.",
    link: "https://github.com/anggipermana111/UasJavaLanjutan",
    gambar: Tiket,
    view: null,
    tech: ["Java", "Springboot", "Javascript","React","Tailwind CSS", "MySQL"]
  },
  {
    id: 5,
    nama: "APCinema",
    deskripsi: "This cinema ticket booking project allows users to select movies, choose cinema seats, and make ticket reservations and payments, implementing sandbox payment using Midtrans. This project was created as the final assignment for React training, implementing React for the frontend and Golang Gin for the backend, using the VSCode IDE during development.",
    link: "https://github.com/anggipermana111/last-project",
    gambar: APCinema,
    view: null,
    tech: ["Golang", "Gin", "Javascript","React", "Tailwind css", "PostgreSQL", "Midtrans payment"]
  },
  {
    id: 6,
    nama: "BidKiicks",
    deskripsi: "This auction-themed project allows for the sale of items using an auction system. Users can bid on auction items they are interested in. This project was developed using MERN (MongoDB, Express.js, React, Node.js).",
    link: "https://github.com/anggipermana111/BidKiicks",
    gambar: Bidkiick,
    view: null,
    tech: ["Javascript", "Node.js", "Express.js", "React", "MongoDB"]
  },
  {
    id: 7,
    nama: "K&TA",
    deskripsi: "This online workshop reservation project allows users to make workshop reservations in advance. It implements the FONNTE API as an external API for automatic WhatsApp messaging and Nodemailer for the forgot password feature, which sends OTP codes to the user's email if they forget their login password.",
    gambar: Kenta,
    view: null,
    tech: ["Javascript", "Node.js", "Express.js", "React", "MySQL", "Fonnte API", "Nodemailer"]
  }
]

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