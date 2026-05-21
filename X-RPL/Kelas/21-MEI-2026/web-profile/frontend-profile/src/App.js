import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [profile, setProfile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ nama: '', kelas: '', email: '' });

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/profile')
      .then(response => setProfile(response.data))
      .catch(error => console.error("Gagal Orbit:", error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (userData.nama && userData.kelas && userData.email) {
      axios.post('http://127.0.0.1:8000/api/visitors', userData)
        .then(() => {
          setIsLoggedIn(true);
        })
        .catch(err => {
          console.error(err);
          alert("Gagal koneksi ke database! Pastikan Laravel jalan.");
        });
    } else {
      alert("Harap isi semua data untuk akses transmisi!");
    }
  };

  // 1. TAMPILAN HALAMAN FORM
  if (!isLoggedIn) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#090A0F', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        fontFamily: 'sans-serif',
        background: 'radial-gradient(circle at center, #1B2735 0%, #090A0F 100%)'
      }}>
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.05)', 
          padding: '40px', 
          borderRadius: '20px', 
          backdropFilter: 'blur(15px)', 
          border: '1px solid rgba(255, 255, 255, 0.1)',
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center',
          boxShadow: '0 0 50px rgba(79, 70, 229, 0.2)'
        }}>
          <h2 style={{ color: '#fff', marginBottom: '10px', letterSpacing: '2px' }}>masukan data anda petualang</h2>
          <p style={{ color: '#a5b4fc', fontSize: '0.9rem', marginBottom: '30px' }}>Silakan isi data untuk mengakses profil Navigator.</p>
          
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input 
              type="text" placeholder="Nama Lengkap" required
              style={inputStyle}
              onChange={(e) => setUserData({...userData, nama: e.target.value})}
            />
            <input 
              type="text" placeholder="Kelas" required
              style={inputStyle}
              onChange={(e) => setUserData({...userData, kelas: e.target.value})}
            />
            <input 
              type="email" placeholder="Alamat Email" required
              style={inputStyle}
              onChange={(e) => setUserData({...userData, email: e.target.value})}
            />
            <button type="submit" style={buttonStyle}>MASUK KE ORBIT 🚀</button>
          </form>
        </div>
      </div>
    );
  }

  // 2. TAMPILAN LOADING
  if (!profile) return (
    <div style={{textAlign:'center', paddingTop:'20%', color:'#a5b4fc', fontFamily:'sans-serif', backgroundColor: '#090A0F', height: '100vh'}}>
      Mengunduh Data Transmisi...
    </div>
  );

  // 3. TAMPILAN UTAMA (PROFIL KAMU)
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#090A0F', color: 'white', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      <div style={{ backgroundColor: '#4f46e5', padding: '10px', textAlign: 'center', fontSize: '0.8rem', letterSpacing: '1px' }}>
        Selamat Datang, Navigator <b>{userData.nama}</b> ({userData.kelas})
      </div>

      {/* HEADER SECTION */}
      <div style={{ display: 'flex', flexWrap: 'wrap', padding: '60px 8%', gap: '40px', alignItems: 'center' }}>
        <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
          <div style={{ 
            padding: '5px', borderRadius: '50%', 
            background: 'linear-gradient(45deg, #4f46e5, #ec4899)', 
            boxShadow: '0 0 30px rgba(79, 70, 229, 0.6)' 
          }}>
            <img 
              src={process.env.PUBLIC_URL + '/profile.jfif'} 
              alt="Avatar" 
              style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>

        <div style={{ flex: '2', minWidth: '300px' }}>
          <h1 style={{ fontSize: '3.5rem', margin: '0 0 10px 0', textShadow: '0 0 15px #4f46e5', letterSpacing: '2px' }}>
            {profile.nama.toUpperCase()}
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#a5b4fc', marginBottom: '25px' }}>
            🚀 {profile.kelas} | Navigator #{profile.absen} | {profile.sekolah}
          </p>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '25px', borderRadius: '15px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h4 style={{ color: '#f472b6', marginTop: 0, letterSpacing: '2px', textTransform: 'uppercase' }}>MISSION BIO</h4>
            <p style={{ lineHeight: '1.8', color: '#d1d5db', margin: 0 }}>{profile.bio}</p>
          </div>
        </div>
      </div>

      {/* DETAIL SECTION */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', padding: '0 8%', flexWrap: 'wrap', marginBottom: '100px' }}>
          <div style={{ background: 'rgba(79, 70, 229, 0.12)', padding: '25px', borderRadius: '12px', border: '1px solid rgba(79, 70, 229, 0.5)', minWidth: '280px', flex: '1' }}>
             <h4 style={{ color: '#818cf8', margin: '0 0 15px 0', textTransform: 'uppercase', letterSpacing: '2px' }}>HOBI</h4>
             <ul style={{ paddingLeft: '20px', color: '#e5e7eb', margin: 0 }}>
                {profile.hobi.map((h, i) => <li key={i} style={{ marginBottom: '8px' }}>{h}</li>)}
             </ul>
          </div>

          <div style={{ 
            background: 'rgba(236, 72, 153, 0.12)', padding: '25px', borderRadius: '12px', 
            border: '1px solid rgba(236, 72, 153, 0.5)', minWidth: '280px', flex: '1',
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: 'left'
          }}>
             <h4 style={{ color: '#f472b6', margin: '0 0 15px 0', textTransform: 'uppercase', letterSpacing: '2px' }}>SEKOLAH</h4>
             <p style={{ fontSize: '1.4rem', fontWeight: 'bold', margin: 0, color: '#ffffff' }}>{profile.sekolah}</p>
          </div>
      </div>

      {/* GAMBAR GAME SECTION + TOMBOL */}
      <div style={{ width: '100%', marginTop: '120px', position: 'relative', lineHeight: 0, textAlign: 'center' }}>
        <h2 style={{ 
          position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)',
          margin: 0, fontSize: '4rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '8px',
          color: 'rgba(255, 255, 255, 0.7)', textShadow: '0 0 20px rgba(79, 70, 229, 0.8)', zIndex: 10
        }}>
          space.io
        </h2>
        <div style={{ position: 'absolute', width: '100%', height: '100%', boxShadow: 'inset 0 0 120px #000', zIndex: 5 }}></div>
        <img 
          src={process.env.PUBLIC_URL + '/space-io.avif'} 
          alt="Space X" 
          style={{height: '700px', objectFit: 'cover' }}
        />
        
        {/* CONTAINER TOMBOL MAIN KAN SEKARANG */}
        <div style={{ backgroundColor: '#090A0F', padding: '60px 0', marginTop: '-5px' }}>
          <button 
            style={{
              padding: '20px 50px',
              fontSize: '1.2rem',
              fontWeight: '900',
              color: '#fff',
              backgroundColor: 'transparent',
              border: '2px solid #4f46e5',
              borderRadius: '50px',
              cursor: 'pointer',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              transition: '0.3s',
              boxShadow: '0 0 20px rgba(79, 70, 229, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '15px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#4f46e5';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(79, 70, 229, 0.8)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(79, 70, 229, 0.4)';
            }}
            onClick={() => alert("Menyiapkan Sistem Peluncuran...")}
          >
            MAIN KAN SEKARANG 🎮
          </button>
        </div>
      </div>

      <footer style={{ padding: '70px 8%', background: '#050505', textAlign: 'center', borderTop: '1px solid #1a1a1a' }}>
        <h3 style={{ color: '#a5b4fc', marginBottom: '35px', textTransform: 'uppercase', letterSpacing: '3px' }}>Hubungi Saya</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'12px', background: 'rgba(255,255,255,0.03)', padding: '10px 20px', borderRadius: '8px' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="24" alt="WA"/>
            <span>+62 8xx-xxxx-xxxx</span>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:'12px', background: 'rgba(255,255,255,0.03)', padding: '10px 20px', borderRadius: '8px' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="24" alt="IG"/>
            <span>@ragil_dzikrillah</span>
          </div>
        </div>
        <p style={{ marginTop: '50px', color: '#4b5563', fontSize: '0.85rem' }}>&copy; 2026 Muhamad Ragil. Semua sistem beroperasi normal.</p>
      </footer>
    </div>
  );
}

const inputStyle = {
  padding: '12px 15px',
  borderRadius: '8px',
  border: '1px solid rgba(255,255,255,0.2)',
  backgroundColor: 'rgba(0,0,0,0.3)',
  color: '#fff',
  fontSize: '1rem',
  outline: 'none'
};

const buttonStyle = {
  padding: '15px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#4f46e5',
  color: '#fff',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '10px',
  transition: '0.3s',
  boxShadow: '0 4px 15px rgba(79, 70, 229, 0.4)'
};

export default App;