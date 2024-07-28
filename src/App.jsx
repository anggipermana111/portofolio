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
    deskripsi: "Sertifikat pelatihan logika algoritma menggunakan bahasa pemrograman C",
    gambar: Logika
  },
  {
    id: 2,
    nama: "Struktur Data (C Language)",
    deskripsi: "Sertifikat pelatihan struktur data menggunakan bahasa pemrograman C",
    gambar: Struktur
  },
  {
    id: 3,
    nama: "Basis Data (MySql)",
    deskripsi: "Sertifikat pelatihan basis data menggunakan MySQL",
    gambar: Basis
  },
  {
    id: 4,
    nama: "Web Dasar (HTML, CSS, Javascript)",
    deskripsi: "Sertifikat pelatihan web dasar menggunakan HTML, CSS, dan Javascript",
    gambar: Web
  },
  {
    id: 5,
    nama: "Java Fundamental (Swing)",
    deskripsi: "Sertifikat pelatihan fundamental serta implementasinya untuk membuat program desktop menggunakan Swing",
    gambar: Java
  },
  {
    id: 6,
    nama: "Advanced Java (Springboot for Backend)",
    deskripsi: "Sertifikat pelatihan java lanjutan mengunakan springboot untuk membuat API",
    gambar: Spring
  },
  {
    id: 7,
    nama: "Git / GitHub",
    deskripsi: "Sertifikat pelatihan git dan github untuk kerjasama dalam pembuatan project",
    gambar: Github
  },
  {
    id: 8,
    nama: "React (Frontend)",
    deskripsi: "Sertifikat pelatihan react untuk membuat frontend project website",
    gambar: Reacts
  },
  {
    id: 9,
    nama: "Instruktur Java Fundamental",
    deskripsi: "Sertifikat sebagai instruktur / pengajar Java Fundamental",
    gambar: InstrukturJava
  },
  {
    id: 10,
    nama: "Instruktur Git/Github",
    deskripsi: "Sertifikat sebagai instruktur / pengajar git dan github",
    gambar: InstrukturGithub
  },
]

const projects = [
  {
    id: 1,
    nama: "Koperasi",
    deskripsi: "Project koperasi simpan pinjam ini mencakup kelola data anggota koperasi, simpanan anggota, pinjaman anggota data angsuran dari setiap anggota, program ini adalah program project akhir pelatihan logika algoritma saya yang mengimplementasikan seluruh dasar logika pemrograman yang telah diajarkan dalam bentuk project console",
    link: "https://github.com/anggipermana111/koperasi-anggi-projekan-bahasa-C",
    gambar: Koperasi,
    view: null,
    tech: ["C Language"]
  },
  {
    id: 2,
    nama: "Tricksters Movies",
    deskripsi: "Project ini menampilkan mengenai film, seperti gambar poster film, deskripsi, rating, aktor, video trailer dan semua data yang berhubungan mengenai film berdasarkan API dari TMDB (API eksternal), project ini dibuat sebagai tugas akhir pelatihan WEB dasar dengan mengimplementasikan HTML, CSS, dan Javascript ke dalam project website",
    link: "https://github.com/anggipermana111/projek-movie",
    gambar: Movie,
    view: 'https://trickstersmovie.000webhostapp.com/',
    tech: ["HTML", "CSS", "Javascript"]
  },
  {
    id: 3,
    nama: "Monica Jaya",
    deskripsi: "Project ini adalah project untuk mengelola inventary barang di toko bangunan, project ini dibuat sebagai tugas akhir pelatihan Java dasar dengan mengimplementasikan Java swing menggunakan IDE netbeans ke dalam project desktop",
    link: "https://github.com/anggipermana111/projektokobangunan",
    gambar: Inventory,
    view: null,
    tech: ["Java", "Swing", "MySQL"]
  },
  {
    id: 4,
    nama: "Tiket Go",
    deskripsi: "Project ini bertema pemesanan tiket bioskop, berfungsi untuk memilih film yang akan ditonton, memilih kursi bioskop, dan melakukan pemesanan sekaligus pembayaran tiket, project ini dibuat sebagai tugas akhir pelatihan Java lanjutan dengan mengimplementasikan Java Springboot menggunakan IDE IntellIJ ke dalam project website, dibuat secara berkelompok yang terdiri dari 2 orang",
    link: "https://github.com/anggipermana111/UasJavaLanjutan",
    gambar: Tiket,
    view: null,
    tech: ["Java", "Springboot", "Javascript","React","Tailwind CSS", "MySQL"]
  }, 
  {
    id: 5,
    nama: "APCinema",
    deskripsi: "Project pemesanan tiket bioskop yang berfungsi untuk memilih film yang akan ditonton, memilih kursi bioskop, dan melakukan pemesanan sekaligus pembayaran tiket dengan mengimplementasikan pembayaran sandbox menggunakan Midtrans, project ini dibuat sebagai tugas akhir pelatihan React dengan mengimplementasikan React sebagai frontend dan Golang Gin sebagai Backend, menggunakan IDE VsCode dalam proses pembuatannya",
    link: "https://github.com/anggipermana111/last-project",
    gambar: APCinema,
    view: null,
    tech: ["Golang", "Gin", "Javascript","React", "Tailwind css", "PostgreSQL", "Midtrans payment"]
  }, 
  {
    id: 6,
    nama: "BidKiicks",
    deskripsi: "Project yang mengambil tema lelang, berfungsi untuk penjualan barang dengan sistem lelang sekaligus jika user ingin melakukan bid untuk barang lelang yang diminati,project ini di develop menggunakan MERN (MongoDB, Express.js, React, Node.js)",
    link: "https://github.com/anggipermana111/BidKiicks",
    gambar: Bidkiick,
    view: null,
    tech: ["Javascript", "Node.js", "Express.js", "React", "MongoDB"]
  },
  {
    id: 7,
    nama: "K&TA",
    deskripsi: "Project untuk reservasi bengkel online, berfungsi untuk melakukan reservasi bengkel dari jauh hari, project ini mengimplementasikan FONNTE API sebagai API external untuk fitur kirim pesan via whatsapp secara otomatis serta nodemailer untuk fitur forgot password yang akan mengirim kode OTP ke email jika user lupa password untuk login",
    gambar: Kenta,
    view: null,
    tech: ["Javascript", "Node.js", "Express.js", "React", "MySQL", "Fonnte API", "Nodemailer"]
  }
]

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