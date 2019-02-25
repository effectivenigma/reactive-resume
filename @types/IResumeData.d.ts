interface IStringMap<T> {
  [key: string]: T;
}

interface INumberMap<T> {
  [key: number]: T;
}

interface IResumeData {
  contact: IContactData;
  summary?: Array<string>;
  skills?: IStringMap<Array<string>>;
  experience: Array<IExperienceData>;
  projects?: Array<IProjectData>;
  education?: Array<IEducationData>;
}

interface IContactData {
  name: string;
  phone?: string;
  email: string;
  social?: ISocialData;
}
interface ISocialData {
  website?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  github?: string;
  gitlab?: string;
}
interface IExperienceData {
  organization: string;
  location?: string;
  tenure: IDurationData;
  roles: Array<IRoleData>;
}
interface IDurationData {
  start: string; //TODO limit to yyyy/mm/dd
  end?: string;
}
interface IRoleData {
  position: string;
  duration: IDurationData;
  highlights: Array<string>;
}
interface IProjectData {
  name: string;
  organization?: string;
  duration: IDurationData;
  contributions: Array<string>;
}
interface IEducationData {
  institution: string;
  location: string;
  major: string;
  minor?: string;
  duration: IDurationData;
  description: string;
  highlights: Array<string>;
}