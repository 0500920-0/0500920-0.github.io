export interface DependencyItem {
    id: string;
    name?: string;
    description?: string;
    href: string;
}

export const dependencyLinkList: DependencyItem[] = [
    { id: 'react', href: 'https://reactjs.org/', },
    { id: 'materialUI', href: 'https://material-ui.com/', },
    { id: 'ts', href: 'https://www.typescriptlang.org/', },
    { id: 'reactRouter', href: 'https://www.typescriptlang.org/', },
    { id: 'periodicTableJSON', href: 'https://github.com/Bowserinator/Periodic-Table-JSON', },
];