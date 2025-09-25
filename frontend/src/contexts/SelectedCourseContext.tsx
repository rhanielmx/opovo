import { createContext, useContext, useState } from "react";
import type { Course } from "@/components/courses/courses";

type SelectedCourseContextType = {
  selectedCourse: Course | null;
  setSelectedCourse: (course: Course) => void;
};

const SelectedCourseContext = createContext<SelectedCourseContextType | undefined>(undefined);

export function SelectedCourseProvider({ children }: { children: React.ReactNode }) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  return (
    <SelectedCourseContext.Provider value={{ selectedCourse, setSelectedCourse }}>
      {children}
    </SelectedCourseContext.Provider>
  );
}

export function useSelectedCourse() {
  const context = useContext(SelectedCourseContext);
  if (!context) throw new Error("useSelectedCourse must be used within SelectedCourseProvider");
  return context;
}