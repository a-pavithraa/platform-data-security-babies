export interface Testimonial {
  id: string;
  name: string;
  title: string;
  content: string;
  image?: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  videoId: string;
  thumbnailUrl: string;
  publishedAt: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}