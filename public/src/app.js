import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
    return (
        <main className="text-white bg-dark-gray body-font">
            <Navbar />
            <About />
            <Projects />
            <Contact />
        </main>
    );
}
