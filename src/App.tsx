import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectDetails } from './pages/ProjectDetails';
import { AllProjects } from './pages/AllProjects';
export function App() {
  return <BrowserRouter>
      <div className="bg-gray-900 text-gray-100 min-h-screen w-full">
        <Header />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>;
}