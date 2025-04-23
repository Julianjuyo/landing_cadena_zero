import { TFunction } from "react-i18next";

export interface TeamMember {
  name: string;
  position: string;
  photo: string;
  description: string;
  linkedin: string;
}

export interface TeamSectionProps {
  title: string;
  text: string;
  members: TeamMember[];
  id: string;
  t: TFunction;
} 