export interface INew {
  id: number;
  title: string;
  preview: string;
  link: string;
  source: string;
  date: string;
  imageLink?: string;
}

export interface INews {
  news: INew[];
}

export interface IPag {
  num: number;
}