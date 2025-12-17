import { CategorySkill, Category, Familiarity } from '../types/skills';

export const skillsData: CategorySkill[] = [
  {
    category: Category.Frontend,
    tags: [
      { tag: 'HTML', familiarity: Familiarity.Familiar },
      { tag: 'CSS', familiarity: Familiarity.Familiar },
      { tag: 'JavaScript', familiarity: Familiarity.Familiar },
      { tag: 'TypeScript', familiarity: Familiarity.Novice },
      { tag: 'React', familiarity: Familiarity.Proficient },
    ],
  },
  {
    category: Category.Backend,
    tags: [
      { tag: 'Java (Spring Boot)', familiarity: Familiarity.Proficient },
      { tag: 'Node.js', familiarity: Familiarity.Familiar },
      { tag: 'Python', familiarity: Familiarity.Familiar },
    ],
  },
  {
    category: Category.Architecture,
    tags: [
      { tag: 'DDD', familiarity: Familiarity.Proficient },
      { tag: 'CA', familiarity: Familiarity.Proficient },
      { tag: 'MVC', familiarity: Familiarity.Proficient },
      { tag: 'Design patterns', familiarity: Familiarity.Familiar },
      { tag: 'Event Sourcing', familiarity: Familiarity.Familiar },
      { tag: 'CQRS', familiarity: Familiarity.Familiar },
    ],
  },
  {
    category: Category.Testing,
    tags: [
      { tag: 'TDD', familiarity: Familiarity.Proficient },
      { tag: 'BDD', familiarity: Familiarity.Proficient },
      { tag: 'DBC', familiarity: Familiarity.Proficient },
      { tag: 'Unit testing', familiarity: Familiarity.Proficient },
      { tag: 'Integration testing', familiarity: Familiarity.Familiar },
      { tag: 'E2E', familiarity: Familiarity.Familiar },
    ],
  },
  {
    category: Category.Database,
    tags: [
      { tag: 'PostgreSQL', familiarity: Familiarity.Proficient },
      { tag: 'MySQL', familiarity: Familiarity.Familiar },
      { tag: 'SQLite', familiarity: Familiarity.Familiar },
      { tag: 'EventStoreDB', familiarity: Familiarity.Proficient },
    ],
  },
  {
    category: Category.Collaboration,
    tags: [
      { tag: 'Scrum', familiarity: Familiarity.Proficient },
      { tag: 'Kanban', familiarity: Familiarity.Proficient },
    ],
  },
  {
    category: Category.MessagingStreaming,
    tags: [
      { tag: 'Kafka', familiarity: Familiarity.Familiar },
      { tag: 'RabbitMQ', familiarity: Familiarity.Familiar },
    ],
  },
  {
    category: Category.API,
    tags: [
      { tag: 'RESTful API', familiarity: Familiarity.Proficient },
      { tag: 'WebSocket', familiarity: Familiarity.Familiar },
    ],
  },
  {
    category: Category.DevTools,
    tags: [
      { tag: 'Git', familiarity: Familiarity.Proficient },
      { tag: 'VSCode', familiarity: Familiarity.Proficient },
      { tag: 'Cursor', familiarity: Familiarity.Familiar },
      { tag: 'Postman', familiarity: Familiarity.Familiar },
    ],
  },
  {
    category: Category.Mobile,
    tags: [
      { tag: 'Flutter', familiarity: Familiarity.Familiar },
      { tag: 'Dart', familiarity: Familiarity.Familiar },
    ],
  },
  {
    category: Category.BuildPackage,
    tags: [
      { tag: 'Maven', familiarity: Familiarity.Familiar },
      { tag: 'npm', familiarity: Familiarity.Familiar },
      { tag: 'Vite', familiarity: Familiarity.Novice },
    ],
  },
  {
    category: Category.Containerization,
    tags: [
      { tag: 'Docker', familiarity: Familiarity.Familiar },
      { tag: 'Kubernetes', familiarity: Familiarity.Novice },
    ],
  },
  {
    category: Category.CICDPipeline,
    tags: [
      { tag: 'GitHub Actions', familiarity: Familiarity.Familiar },
      { tag: 'Jenkins', familiarity: Familiarity.Novice },
    ],
  },
];
