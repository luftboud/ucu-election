import { Routes, Route } from 'react-router-dom';
import FacultiesPage from '../components/voting/FacultiesPage';
import SpecialtiesPage from '../components/voting/SpecialtiesPage';
import CoursePage from '../components/voting/CoursePage';
import CandidatesPage from '../components/voting/CandidatesPage';

export default function Voting() {
  return (
    <Routes>
      {/* Level 1: Faculties */}
      <Route path="/" element={<FacultiesPage />} />
      
      {/* Level 2: Specialties */}
      <Route path="/faculty/:facultyId" element={<SpecialtiesPage />} />
      
      {/* Level 3: Course Selection */}
      <Route path="/faculty/:facultyId/specialty/:specialtyId/master/:master" element={<CoursePage />} />
      
      {/* Level 4: Candidate Selection */}
      <Route path="/faculty/:facultyId/specialty/:specialtyId/master/:master/course/:courseId" element={<CandidatesPage />} />
    </Routes>
  );
}
