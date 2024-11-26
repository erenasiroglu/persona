import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PersonalInfo, Experience, Education } from '../types/cv';

interface CvStore {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: string[];
  activeTemplate: string;
  setPersonalInfo: (info: PersonalInfo) => void;
  setExperiences: (experiences: Experience[]) => void;
  setEducation: (education: Education[]) => void;
  setSkills: (skills: string[]) => void;
  setActiveTemplate: (template: string) => void;
  updatePersonalInfo: (field: keyof PersonalInfo, value: string) => void;
  addExperience: (experience: Experience) => void;
  removeExperience: (id: string) => void;
  addEducation: (education: Education) => void;
  removeEducation: (id: string) => void;
  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;
}

export const useCvStore = create<CvStore>()(
  persist(
    (set) => ({
      personalInfo: {
        fullName: '',
        title: '',
        email: '',
        location: '',
        website: '',
        linkedin: '',
        summary: '',
      },
      experiences: [],
      education: [],
      skills: [],
      activeTemplate: 'modern',

      setPersonalInfo: (info) => set({ personalInfo: info }),
      setExperiences: (experiences) => set({ experiences }),
      setEducation: (education) => set({ education }),
      setSkills: (skills) => set({ skills }),
      setActiveTemplate: (template) => set({ activeTemplate: template }),

      updatePersonalInfo: (field, value) =>
        set((state) => ({
          personalInfo: { ...state.personalInfo, [field]: value },
        })),

      addExperience: (experience) =>
        set((state) => ({
          experiences: [...state.experiences, experience],
        })),

      removeExperience: (id) =>
        set((state) => ({
          experiences: state.experiences.filter((exp) => exp.id !== id),
        })),

      addEducation: (education) =>
        set((state) => ({
          education: [...state.education, education],
        })),

      removeEducation: (id) =>
        set((state) => ({
          education: state.education.filter((edu) => edu.id !== id),
        })),

      addSkill: (skill) =>
        set((state) => ({
          skills: [...state.skills, skill],
        })),

      removeSkill: (skill) =>
        set((state) => ({
          skills: state.skills.filter((s) => s !== skill),
        })),
    }),
    {
      name: 'cv-storage',
    }
  )
); 