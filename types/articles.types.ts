export interface Articles {
  status: string;
  copyright: string;
  response: Response;
}

interface Response {
  docs: Doc[];
  meta: Meta;
}

export interface Doc {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  print_section?: string;
  print_page?: string;
  source: Source;
  multimedia: Multimedia[];
  headline: Headline;
  keywords: Keyword[];
  pub_date: string;
  document_type: DocumentType;
  news_desk: string;
  section_name: string;
  subsection_name?: string;
  byline: Byline;
  type_of_material: TypeOfMaterial;
  _id: string;
  word_count: number;
  uri: string;
}

interface Byline {
  original: string;
  person: Person[];
  organization: null;
}

interface Person {
  firstname: string;
  middlename: null | string;
  lastname: string;
  qualifier: null;
  title: null;
  role: Role;
  organization: string;
  rank: number;
}

enum Role {
  Reported = "reported",
}

enum DocumentType {
  Article = "article",
}

interface Headline {
  main: string;
  kicker: null | string;
  content_kicker: null;
  print_headline: null | string;
  name: null;
  seo: null;
  sub: null;
}

interface Keyword {
  name: Name;
  value: string;
  rank: number;
  major: Major;
}

enum Major {
  N = "N",
}

enum Name {
  CreativeWorks = "creative_works",
  Glocations = "glocations",
  Organizations = "organizations",
  Persons = "persons",
  Subject = "subject",
}

export interface Multimedia {
  rank: number;
  subtype: string;
  caption: null;
  credit: null;
  type: Type;
  url: string;
  height: number;
  width: number;
  legacy: Legacy;
  subType: string;
  crop_name: string;
}

interface Legacy {
  xlarge?: string;
  xlargewidth?: number;
  xlargeheight?: number;
  thumbnail?: string;
  thumbnailwidth?: number;
  thumbnailheight?: number;
  widewidth?: number;
  wideheight?: number;
  wide?: string;
}

enum Type {
  Image = "image",
}

enum Source {
  TheNewYorkTimes = "The New York Times",
}

enum TypeOfMaterial {
  News = "News",
  Review = "Review",
}

interface Meta {
  hits: number;
  offset: number;
  time: number;
}
