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

export interface SkillListProps extends DefaultProps {
    skills: Skill[];
};

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

export interface Skill {
    src: string;
    alt?: string;
    title?: string;
};