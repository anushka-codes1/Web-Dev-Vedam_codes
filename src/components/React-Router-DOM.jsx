import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// ==============================
// Q1 Add a New Route
// ==============================

function Q1Home() {
  return <h3>Home Page</h3>;
}

function Q1About() {
  return <h3>About Page</h3>;
}

function Q1Contact() {
  return <h3>Contact Us Page</h3>;
}

function Q1Services() {
  return <h3>Services Page</h3>;
}

function Question1() {
  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Q1. Add a New Route</h2>

      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Q1Home />} />
        <Route path="/about" element={<Q1About />} />
        <Route path="/contact" element={<Q1Contact />} />
        <Route path="/services" element={<Q1Services />} />
      </Routes>
    </div>
  );
}

// ==============================
// Q2 Portfolio Pages
// ==============================

function PortfolioHome() {
  return (
    <>
      <h3>Home</h3>
      <p>Welcome to my portfolio.</p>
    </>
  );
}

function Projects() {
  return (
    <>
      <h3>Projects</h3>
      <p>These are some of my projects.</p>
    </>
  );
}

function Resume() {
  return (
    <>
      <h3>Resume</h3>
      <p>This page contains my resume.</p>
    </>
  );
}

function Question2() {
  return (
    <div style={{ marginTop: "50px", marginBottom: "50px" }}>
      <h2>Q2. Portfolio Pages</h2>

      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
      </nav>

      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

// ==============================
// Q3 Food Menu App
// ==============================

function FoodHome() {
  return (
    <>
      <h3>Food Menu</h3>
      <p>Select your favorite food.</p>
    </>
  );
}

function Pizza() {
  return (
    <>
      <h3>Pizza</h3>
      <p>Cheesy and delicious pizza.</p>
    </>
  );
}

function Burger() {
  return (
    <>
      <h3>Burger</h3>
      <p>Juicy burger with fresh ingredients.</p>
    </>
  );
}

function Drinks() {
  return (
    <>
      <h3>Drinks</h3>
      <p>Refreshing cold beverages.</p>
    </>
  );
}

function Question3() {
  return (
    <div style={{ marginTop: "50px", marginBottom: "50px" }}>
      <h2>Q3. Food Menu App</h2>

      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/pizza">Pizza</Link>
        <Link to="/burger">Burger</Link>
        <Link to="/drinks">Drinks</Link>
      </nav>

      <Routes>
        <Route path="/" element={<FoodHome />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/burger" element={<Burger />} />
        <Route path="/drinks" element={<Drinks />} />
      </Routes>
    </div>
  );
}

// ==============================
// Q4 Simple Company Website
// ==============================

function CompanyHome() {
  return (
    <>
      <h3>Home</h3>
      <p>Welcome to our company website.</p>
    </>
  );
}

function AboutUs() {
  return (
    <>
      <h3>About Us</h3>
      <p>We build modern web applications.</p>
    </>
  );
}

function ContactUs() {
  return (
    <>
      <h3>Contact Us</h3>
      <p>Name: Your Name</p>
      <p>Email: yourname@gmail.com</p>
      <p>Phone: 9876543210</p>
    </>
  );
}

function Question4() {
  return (
    <div style={{ marginTop: "50px" }}>
      <h2>Q4. Simple Company Website</h2>

      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CompanyHome />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

// ==============================
// Main Component
// ==============================

export default function ReactRouterDOM() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <h1>React Router DOM Assignment</h1>

        <Question1 />

        <hr />

        <Question2 />

        <hr />

        <Question3 />

        <hr />

        <Question4 />
      </div>
    </BrowserRouter>
  );
}