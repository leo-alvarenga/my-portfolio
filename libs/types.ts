// props

/**
 * Interface abstraction of the default _props_ object used throughout the project.
 */
export interface DefaultProps {
    children?: JSX.Element[];
}

/**
 * Interface abstraction of the _props_ object used on the blog post card in the _Home_ page.
 */
export interface MiniPost extends DefaultProps {
    title: string;
    date?: Date | string;
    subheading?: string;
    href?: string;
};

/**
 * Interface abstraction of the _props_ object used on the Skill list in the _Home_ page.
 */
export interface SkillListProps extends DefaultProps {
    skills: Skill[];
};

/**
 * Interface abstraction of the object that holds the data relevant
 * to a _Badge_ component.
 */
export interface BadgeProps extends Skill {
    href?: string;
}

// other types

/**
 * Interface abstraction of the object that holds the data relevant
 * to the blog post card in the _Home_ page.
 */
export interface IPostPreview {
    id: string;
    title: string;
    date?: Date | string;
    subheading?: string;
};

/**
 * Interface abstraction of the object that holds the data relevant
 * to the _Post_ page.
 */
export interface IPost extends IPostPreview{
    content?: string;
};

/**
 * Interface abstraction of the object that holds the data relevant
 * to a _Skill_.
 */
export interface Skill {
    src: string;
    alt?: string;
    title?: string;
};

/**
 * Interface abstraction of the object that holds the data relevant
 * to a _Repository_.
 */
export interface Repo {
    name: string;
    description: string;
    href: string;
    technologies: string[];
};

/**
 * Interface abstraction of the object that holds the data relevant
 * to a _Project_.
 */
export interface Project {
    name: string;
    description: string;
    href: string;
    technologies: Skill[];
};

/**
 * Interface abstraction of the object that holds the data relevant
 * to the profile _Status_.
 */
export interface Status {
    title: string;
    src: string;
};