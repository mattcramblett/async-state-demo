export type Country = {
  name: {
    common: string,
    official: string,
  },
  flag: string,
  population: number,
  subregion: string,
  flags: {
    png: string,
    svg: string,
    alt: string,
  }
}
