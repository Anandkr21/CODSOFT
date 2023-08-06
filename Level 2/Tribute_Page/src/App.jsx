// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Admiring Someone Special</h1>
      </header>
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h2>Someone I Admire</h2>
            <p>
              APJ Abdul Kalam, also known as the "Missile Man of India," was a renowned Indian scientist and politician.</p>

            <p>He played a pivotal role in India's civilian space program and military missile development.</p>

            <p>Born in humble beginnings, Kalam rose to become the 11th President of India, serving from 2002 to 2007.</p>

            <p>He was a firm believer in education and tirelessly worked to inspire and mentor young minds, especially students.</p>

            <p>Kalam's motivational speeches and books touched the hearts of people from all walks of life.</p>

            <p>His vision for India was to see it as a developed nation by 2020, which he often referred to as "Vision 2020."</p>

            <p>Throughout his life, Kalam remained down-to-earth, approachable, and respected by all for his humility.</p>

            <p>He received numerous awards and honors, including the Bharat Ratna, India's highest civilian award.</p>

            <p>Kalam's legacy lives on, as he continues to be an inspiration to generations, encouraging them to dream big and work hard.</p>

            <p>His devotion to science, education, and humanity makes him a truly admirable and unforgettable figure in Indian history.
            </p>
          </div>
          <div className="hero-image">
            {/* Add an image of the person you admire */}
            {/* Replace the src attribute with the URL of the image */}
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQELRJNIDJxadkcbt9_NATcqHwCayKGYUoqwvwkjPgQKaMlcnwM" alt="Person I Admire" />
          </div>
        </section>
        <section className="qualities-section">
          <h2>Admirable Qualities</h2>
          <ul>
            <li>1. Visionary Leadership: APJ Abdul Kalam was a visionary leader who had a clear and inspiring vision for India's future. His vision of making India a developed nation by 2020, known as "Vision 2020," motivated and galvanized the entire nation to work towards that goal.</li>

            <li>2. Humility and Approachability: Despite his immense achievements and fame, Kalam remained humble and approachable. He was known for his warm and friendly demeanor, and he always encouraged young minds to approach him with their ideas and aspirations.
            </li>
            <li>3. Dedication to Education: Kalam was a strong advocate of education and believed that it was the key to unlocking India's potential. He devoted much of his life to teaching and mentoring students, inspiring them to pursue careers in science and technology and to contribute to the nation's progress.
            </li>
            {/* Add more admirable qualities */}
          </ul>
        </section>
      </main>
      <footer>
        <p>Created with admiration and love</p>
      </footer>
    </div>
  );
}

export default App;
