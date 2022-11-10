import cpluse from "./assets/c++.png";

import Django from "./assets/django.png";
import docker from "./assets/docker.png";
import github from "./assets/github.png";
import javascript from "./assets/js.png";
import kotlin from "./assets/Kotalin.png";
import mysql from "./assets/mysql.png";
import python from "./assets/phyton.png";
import PostgresSQL from "./assets/Postgress sql.png";
import react from "./assets/react.png";
import radios from "./assets/redis.png";
import springboot1 from "./assets/sringboot.png";


export const specification = [
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    title: "Connect your git",
    number: 1,
    feature: [
      {
        title: "Seamless GitOps",
      },
      {
        title: "Automated CI/CD pipelines",
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    title: "Choose a template or your existing code",
    number: 2,
    feature: [
      {
        title: "Website, API or apps",
      },
      {
        title: "Manage secrets",
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    title: "Deploy in 3 mins",
    number: 1,
    feature: [
      {
        title: "Get multiple environment",
      },
      {
        title: "Auto-update with every build",
      },
    ],
  },
];

export const languesIcons = [
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    name: 'Github',
    icon: github
  },
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    name: 'javascript',
    icon: javascript
  },
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    name: 'kotlin',
    icon: kotlin
  },
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    name: 'react',
    icon: react
  },
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    name: 'python',
    icon: python
  },
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    name: 'django',
    icon: Django
  },
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    name: 'springBot',
    icon: springboot1
  },
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    name: 'postgresSQL',
    icon: PostgresSQL
  },
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    name: 'radios',
    icon: radios
  },
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    name: 'mysql',
    icon: mysql
  },
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    name: 'docker',
    icon: docker
  },
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    name: 'c++',
    icon: cpluse
  },
]


export const questions = [
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    qst: 'Will I need to modify my code to run on SuperEasy.dev?',
    ans: 'No. We accept as you are. No changes required.'
  },
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    qst: 'Do I need to manually trigger deployment?',
    ans: 'No. We accept as you are. No changes required.'
  },
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    qst: 'Is SuperDevNow meant for only static websites?',
    ans: 'No. We accept as you are. No changes required.'
  },
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    qst: 'Can I keep my files on the server?',
    ans: 'No. We accept as you are. No changes required.'
  },
  {
    id: Math.floor(Math.random() * 100) * new Date(),
    qst: 'Can I use my own custom domains?',
    ans: 'No. We accept as you are. No changes required.'
  },
]