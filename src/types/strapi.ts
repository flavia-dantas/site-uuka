export type ImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

export type ImageFormats = {
  thumbnail?: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
  large?: ImageFormat;
};

export type Image = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Header = {
  id: number;
  ButtonLabel: string;
  ButtonLink: string | null;
};

export type ImageHeroItem = {
  id: number;
  image: Image;
  overlayText: string | null;
};

export type MissionVisionValuesItem = {
  id: number;
  image: Image | null;
};

export type About = {
  id: number;
  imageHero: ImageHeroItem[];
  MissionVisionValues: MissionVisionValuesItem[];
};

export type TestimonialCard = {
  id: number;
  name: string;
  role: string;
  description: string;
  rating: number;
};

export type Testimonials = {
  id: number;
  TestimonialsCard: TestimonialCard[];
};

export type Supporters = {
  id: number;
  imageLogo: Image[];
};

export type ContactListItem = {
  id: number;
  label: string;
  link: string | null;
  icon: Image | null;
};

export type Contact = {
  id: number;
  ButtonLink: string | null;
  ButtonLabel: string;
  ContactList: ContactListItem[];
};

export type Partnerships = {
  id: number;
  ButtonLink: string | null;
  ButtonLabel: string;
};

export type LeadershipCard = {
  id: number;
  name: string;
  position: string;
  photo: Image;
  isColor?: boolean;
};

export type Leadership = {
  id: number;
  LeadershipCard: LeadershipCard[];
};

export type ApiData = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Header: Header;
  About: About;
  Testimonials: Testimonials;
  Supporters: Supporters;
  Contact: Contact;
  Partnerships: Partnerships;
  Leadership: Leadership;
};

export type ApiResponse = {
  data: ApiData;
  meta: Record<string, never>;
};
