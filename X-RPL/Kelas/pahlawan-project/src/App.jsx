import { useState } from 'react';
import './App.css';

const questions = [
  {
    id: 1,
    pertanyaan: "Siapakah nama pahlawan ini?",
    jawaban: "Bung Tomo",
    gambar: "/tomo.jfif", 
    opsi: ["Bung Tomo", "Soekarno", "Agus Salim"]
  },
  {
    id: 2,
    pertanyaan: "Siapakah nama pahlawan ini?",
    jawaban: "Bung Hatta",
    gambar: "/hatta.jfif",
    opsi: ["Sutan Sjahrir", "Bung Hatta", "Ki Hajar Dewantara"]
  },
  {
    id: 3,
    pertanyaan: "Siapakah nama pahlawan ini?",
    jawaban: "Soepomo",
    gambar: "/soepomo.jfif",
    opsi: ["Moh. Yamin", "Jenderal Sudirman", "Soepomo"]
  },
  {
    id: 4,
    pertanyaan: "Berdasarkan grafik tersebut, berapakah nilai titik potong y?",
    jawaban: "4", 
    gambar: "/mtk.png", 
    opsi: ["2", "4", "-2", "0"]
  },
  {
    id: 5,
    pertanyaan: "Berapa hasil dari penjumlahan tersebut?",
    jawaban: "5",
    gambar: "/jumlah.png",
    opsi: ["4", "2", "7", "5"],
  },
  {
    id: 6,
    pertanyaan: "Hasil dari luas segitiga adalah?",
    jawaban: "20cm",
    gambar: "/segitiga.png",
    opsi: ["19cm", "20cm", "21cm", "24cm"],
  },
  {
    id: 7,
    pertanyaan: "duluan ruang atau waktu",
    jawaban: "tidak tahu",
    gambar: "/ruang dan waktu.jfif",
    opsi: ["ruang","waktu","tidak tahu","keduanya"],
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState(null); 

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].jawaban) {
      setScore(score + 1);
      setFeedback("Benar! ✅");
    } else {
      setFeedback("Salah! ❌");
    }

    // Delay 1.2 detik sebelum pindah soal agar user bisa lihat feedback
    setTimeout(() => {
      setFeedback(null);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 1200);
  };

  return (
    <div className="app-container">
      {showScore ? (
        <div className="score-section">
          <h2>Kuis Selesai! 🏁</h2>
          <p>Skor Akhir: <strong>{score}</strong> dari <strong>{questions.length}</strong></p>
          <button className="btn-reset" onClick={() => window.location.reload()}>Ulangi Kuis</button>
        </div>
      ) : (
        <div className="quiz-card">
          {feedback && (
            <div className={`feedback-overlay ${feedback.includes('Salah') ? 'bg-red' : 'bg-green'}`}>
              <h2>{feedback}</h2>
            </div>
          )}

          <h1>Kuis Campuran</h1>
          <div className="progress">Soal {currentQuestion + 1} / {questions.length}</div>
          
          <div className="img-wrapper">
            <img src={questions[currentQuestion].gambar} alt="Soal Visual" />
          </div>

          <h3>{questions[currentQuestion].pertanyaan}</h3>
          
          <div className="options-grid">
            {questions[currentQuestion].opsi.map((opsi, index) => (
              <button 
                key={index} 
                onClick={() => handleAnswerClick(opsi)}
                disabled={feedback !== null}
              >
                {opsi}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;