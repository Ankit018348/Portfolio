import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-white font-sans">
      <header className="text-center py-12 px-4 bg-white/5 backdrop-blur-sm shadow-md border-b border-white/10">
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 tracking-wide">Ankit Kumar Thakur</h1>
        <p className="mt-2 text-lg text-gray-300">Web Developer | Designer | Programmer</p>
        <nav className="mt-6 flex justify-center space-x-6">
          <a href="#home" className="text-white hover:text-yellow-400 transition">Home</a>
          <a href="#about" className="text-white hover:text-yellow-400 transition">About</a>
          <a href="#projects" className="text-white hover:text-yellow-400 transition">Projects</a>
          <a href="#skills" className="text-white hover:text-yellow-400 transition">Skills</a>
          <a href="#cv" className="text-white hover:text-yellow-400 transition">Resume</a>
        </nav>
      </header>

      <section id="home" className="py-16 px-4 text-center">
        <img
          src="image.png"
          alt="Ankit"
          className="mx-auto w-40 h-40 rounded-full border-4 border-yellow-400 shadow-lg object-cover mb-6 hover:scale-105 transition"
        />
        <h2 className="text-3xl sm:text-4xl font-semibold text-yellow-400">Hello, I'm Ankit</h2>
        <p className="mt-2 text-gray-300">I build responsive, engaging websites and applications.</p>
      </section>

      <section id="about" className="max-w-3xl mx-auto px-6 py-16 bg-white/5 backdrop-blur rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">About Me</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          I am a passionate web developer with a solid foundation in computer science, skilled in both front-end and back-end technologies, and dedicated to crafting responsive full-stack web applications.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          I am pursuing a degree in Computer Science with a strong focus on building impactful and user-centric web applications.
        </p>
        <p className="text-gray-300"><strong>Email:</strong> ankitkumar120p2q@gmail.com</p>
        <p className="text-gray-300"><strong>Phone:</strong> +91 89105 62272</p>
      </section>

      <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/5 backdrop-blur rounded-lg p-6 shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">Food Delivery Website</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-4">
              <li>Designed and developed a responsive food web application using React and JSX.</li>
              <li>Implemented state management for seamless user experience.</li>
              <li>Integrated location services to display nearby restaurants.</li>
              <li>Designed a responsive UI ensuring smooth navigation across devices.</li>
              <li>Optimized API calls and data fetching for faster performance.</li>
              <li>Implemented filtering and sorting features for restaurant listings.</li>
              <li>Enhanced user experience with intuitive search and categorization.</li>
            </ul>
            {/* Show Demo Button */}
            <a
              href="https://your-food-delivery-demo-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Show Demo
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur rounded-lg p-6 shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">Notes Management System</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-4">
              <li>Developed a Create Note application using EJS, CSS, JavaScript, Node.js, and Express.js.</li>
              <li>Enabled users to create, view, edit, and delete text files directly from the web interface.</li>
              <li>Integrated functionality to open and display file contents dynamically within the browser.</li>
              <li>Utilized the fs module in Node.js for seamless file handling and data persistence.</li>
            </ul>
            {/* Show Demo Button */}
            <a
              href="https://notes-app-nin0.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Show Demo
            </a>
          </div>

        </div>
      </section>

      {/* CV Download Section */}
      <section id="cv" className="max-w-3xl mx-auto px-6 py-16 text-center bg-white/5 backdrop-blur rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Download My Resume</h2>
        <p className="text-gray-300 mb-4">Click the button below to download my latest Resume.</p>
        <a
          href="/ankit_Resume.pdf"
          download
          className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Download Resume
        </a>
      </section>

      <section id="skills" className="max-w-3xl mx-auto px-6 py-16 bg-white/5 backdrop-blur rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          {[
            "HTML / CSS / JS",
            "React",
            "Node.js / Express",
            "MySQL",
            "C / Java / Python",
            "Git / GitHub"
          ].map((skill, idx) => (
            <li key={idx} className="bg-white/5 hover:bg-white/10 text-gray-200 py-3 rounded-lg transition">{skill}</li>
          ))}
        </ul>
      </section>

      <footer className="text-center py-6 text-gray-400 border-t border-white/10">
        © 2025 Ankit Kumar Thakur | All Rights Reserved
      </footer>
    </div>
  );
}
