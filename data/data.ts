import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import wordanalyticsImg from '@/public/wordanalytics.png';
import Twitter from '@/public/Twitter.png';
import portfolio from '@/public/3dportfolio.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'MernStack bootcamp',
    location: 'Lahore, Pk',
    description:
      'I graduated after 6 months of studying. I immediately found an internship  as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: 'June 2023 - Sep 2023',
  },
  {
    title: 'MERNSTACK Developer',
    location: 'Lahore, PK',
    description:
      'I worked as a fullstack developer for 6 months  in 1 job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jan 2024 - Apr 2024',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Lahore, PK',
    description:
      "I'm now a full-stack developer working at iifatech. My stack includes React, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: 'Aug 2024 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Twitter Clone',
    description:
      'It was Clone of Twitter Website Build using Bootstrap fully responsive Which was build in Internship at Narsun Studios',
    tags: ['HTML', 'CSS', 'Boostrap',"JavaScript"],
    imageUrl: Twitter,
  },
  {
    title: 'portfolio',
    description:
      'portfolio website build using three Js and Framer Motion to showcase the work',
    tags: ['React', 'TypeScript', 'Tailwind','Three Js','Framer Motion'],
    imageUrl:portfolio,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Redux',
  'Express',
  'Framer Motion',
] as const;
