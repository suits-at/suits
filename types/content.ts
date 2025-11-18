export interface Reference {
  title: string
  url: string
  date: string
  screenshot: string
  thumbnail: string
  _path: string
}

export interface Service {
  title: string
  description: string
  icon?: string
  _path: string
}

export interface ContactContent {
  title: string
  content: string
  iconMe?: string
  textMe?: string
  iconLocation?: string
  textLocation?: string
  iconMail?: string
  textMail?: string
}

export interface AboutContent {
  title: string
  content: string
  image: string
}

export interface ImprintContent {
  title: string
  content: string
}
