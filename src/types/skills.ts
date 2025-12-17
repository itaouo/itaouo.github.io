export enum Category {
  Frontend = 'frontend',
  Backend = 'backend',
  Architecture = 'architecture',
  Mobile = 'mobile',
  Testing = 'testing',
  Database = 'database',
  MessagingStreaming = 'messaging-streaming',
  API = 'api',
  Containerization = 'containerization',
  CICDPipeline = 'ci-cd-pipeline',
  DevTools = 'dev-tools',
  BuildPackage = 'build-package',
  Collaboration = 'collaboration',
}

export enum Familiarity {
  Novice = 'novice',
  Familiar = 'familiar',
  Proficient = 'proficient',
  Advanced = 'advanced',
  Expert = 'expert',
}

export interface SkillTag {
  tag: string;
  familiarity: Familiarity;
}

export interface CategorySkill {
  category: Category;
  tags: SkillTag[];
}