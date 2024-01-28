import FinanceAdminProject_1 from "@/public/finance-admin-project-1.png";
import FinanceAdminProject_2 from "@/public/finance-admin-project-2.png";
import FinanceAdminProject_3 from "@/public/finance-admin-project-3.png";
import NotionCloneProject from "@/public/notion-clone-project.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Graduated university",
		location: "Kampala, UG",
		description: "I graduated after 4 years of studying. I immediately enrolled into online classes to expand my programming knowledge.",
		icon: React.createElement(LuGraduationCap),
		date: "2017 - 2022",
	},
	{
		title: "Biomedical engineer",
		location: "Kampala, UG",
		description:
			"I worked as a freelance design engineer on two linked implant projects. One project entailed an occipital bone screw implant while the other was about the maxillae bone implant.",
		icon: React.createElement(CgWorkAlt),
		date: "June - August, 2022",
	},
	{
		title: "Full-stack developer",
		location: "Kampala, UG",
		description: "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: "2023 - present",
	},
] as const;

export const projectsData = [
	{
		title: "Finance Admin Dashboard 1",
		description: "Finance dashboard to showcase and manage expenses & profits/losses.",
		tags: ["React", "Next.js", "Tailwind", "Redux", "MongoDB", "Recharts", "Regression", "Mui Material"],
		imageUrl: FinanceAdminProject_1,
	},
	{
		title: "Finance Admin Dashboard 2",
		description: "Administrator's dashboard for managing company finances.",
		tags: ["React", "TypeScript", "MongoDB", "Next.js", "Tailwind", "Redux", "Nivo Charts", "Mui Material", "Full Calendar", "React Emotion"],
		imageUrl: FinanceAdminProject_2,
	},
	{
		title: "Finance Admin Dashboard 3",
		description: "A full-stack MERN administrator app for managing company sales data.",
		tags: ["React", "Next.js", "Vite", "MongoDB", "Tailwind", "Redux", "Nivo Charts", "Mui Material", "React Emotion"],
		imageUrl: FinanceAdminProject_3,
	},
	{
		title: "Notion Clone",
		description: "Jotion is a productivity and note-taking web application that offers organizational tools including task management, project tracking, to-do lists, and bookmarking.",
		tags: ["React", "Next.js", "Clerk", "Tailwind", "Radix", "Edgestore", "Blocknote"],
		imageUrl: NotionCloneProject,
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"Swift",
	"React",
	"Python",
	"Next.js",
	"Node.js",
	"Vite",
	"Git",
	"Vercel",
	"Tailwind",
	"Prisma",
	"MongoDB",
	"Redux",
	"MUI Material",
	"React Emotion",
	"Radix",
	"Nivo Charts",
	"Express",
	"PostgreSQL",
	"Python",
	"Django",
	"Framer Motion",
] as const;
