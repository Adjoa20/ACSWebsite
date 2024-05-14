import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "schoolbg":"url('/images/SchoolLanding.png')",
        "acsbg":"url('/images/AcsLanding.png')",
        "historybg":"url('/images/HistoryLanding.png')",
        "missionbg":"url('/images/ MissionLanding.png')",
        "philosophybg":"url('/images/PhilosophyLanding.png')",
        "policybg":"url('/images/PolicyLanding.png')",
        "enrollbg":"url('/images/EnrollmentLanding.png')",
        "curriculumbg":"url('/images/CurriculumLanding.png')",
        "marketbg":"url('/images/MarketingLanding.png')",
        "environmentbg":"url('/images/EnvironmentLanding.png')",
        "staffbg":"url('/images/StaffingLanding.png')"
      },
    },
  },
  plugins: [],
};
export default config;
