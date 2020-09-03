export interface UsefulLinkListItem {
  id: string
  name?: string;
  description?: string;
  href: string;
  external?: boolean;
}

export const usefulLinkList: UsefulLinkListItem[] = [
  { id: 'random', href: '/random', },
  { id: 'periodicTable', href: '/periodic-table', },
  { id: 'about', href: '/about', },
  { id: 'profile', href: 'https://0500920-0.github.io/resume/index.html', external: true },
  // { id: 'ntu-cool', name: 'NTU Cool', description: '線上教學平臺', href: 'https://cool.ntu.edu.tw/', external: true, },
  // { id: 'ceiba', name: 'CEIBA', description: '數位課程管理平臺', href: 'https://ceiba.ntu.edu.tw/', external: true, },
  // { id: 'myntu', name: 'myNTU', description: '計中 myNTU', href: 'https://my.ntu.edu.tw/', external: true, },
];
