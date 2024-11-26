export interface PersonalInfo {
  fullName: string;
  title: string;
  email: string;
  location: string;
  website?: string;
  linkedin?: string;
  summary: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Template {
  id: string;
  name: string;
  preview: string;
} 