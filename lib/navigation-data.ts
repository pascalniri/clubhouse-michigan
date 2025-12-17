import { Users, Briefcase, BookOpen, Globe, Info, Newspaper, Heart } from 'lucide-react';

export interface DropdownItem {
    icon: any;
    title: string;
    description: string;
    badge?: string;
    color: string;
    href: string;
}

export interface NavItem {
    label: string;
    href: string;
    hasDropdown?: boolean;
    dropdownContent?: {
        sections: { title: string; items: DropdownItem[] }[];
        featured?: { title: string; description: string; cta: string; href: string };
    };
}

export const COLORS = {
    primary: '#9F2943',
    secondary: '#0E5282',
} as const;

export const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '/' },
    {
        label: 'About',
        href: '/about',
        hasDropdown: true,
        dropdownContent: {
            sections: [
                {
                    title: 'Overview',
                    items: [
                        {
                            icon: Info,
                            title: 'What is a Clubhouse?',
                            description: 'Understanding our community-based model',
                            color: COLORS.primary,
                            href: '/about/what-is-a-clubhouse',
                        },
                        {
                            icon: Globe,
                            title: 'International Standards',
                            description: 'Our accreditation and quality guidelines',
                            color: COLORS.secondary,
                            href: '/about/standards',
                        },
                        {
                            icon: Heart,
                            title: 'Mission & History',
                            description: 'Empowering lives since our founding',
                            color: COLORS.primary,
                            href: '/about/mission',
                        },
                    ],
                },
                {
                    title: 'Impact',
                    items: [
                        {
                            icon: Users,
                            title: 'Member Stories',
                            description: 'Real journeys of recovery and hope',
                            badge: 'Inspiring',
                            color: COLORS.secondary,
                            href: '/about/stories',
                        },
                    ],
                },
            ],
            featured: {
                title: 'Donate Today',
                description: 'Support our mission to help individuals with mental illness regain their lives.',
                cta: 'Make a Difference →',
                href: '/donate',
            },
        },
    },
    { label: 'Find a Clubhouse', href: '/locations' },
    {
        label: 'Resources',
        href: '/resources',
        hasDropdown: true,
        dropdownContent: {
            sections: [
                {
                    title: 'Stay Connected',
                    items: [
                        {
                            icon: Newspaper,
                            title: 'News & Media',
                            description: 'Latest updates from our network',
                            badge: 'New',
                            color: COLORS.secondary,
                            href: '/resources/news',
                        },
                        {
                            icon: Briefcase,
                            title: 'Job Postings',
                            description: 'Join our dedicated team',
                            color: COLORS.primary,
                            href: '/resources/jobs',
                        },
                    ],
                },
                {
                    title: 'Learn More',
                    items: [
                        {
                            icon: BookOpen,
                            title: 'FAQs',
                            description: 'Common questions answered',
                            color: COLORS.secondary,
                            href: '/resources/faq',
                        },
                    ],
                },
            ],
        },
    },
    { label: 'Contact', href: '/contact' },
];
