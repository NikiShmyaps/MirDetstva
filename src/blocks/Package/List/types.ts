export type TItem = {
  title: string;
  description?: string;
  dopList?: string[];
}

export type TPackagesData = {
  title: string;
  additionalTitle?: string;
  subtitle?: string;
  list: TItem[];
  subtext?: string;
  price?: string;
}[];