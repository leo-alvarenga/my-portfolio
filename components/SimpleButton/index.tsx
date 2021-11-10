import Link from 'next/link';

import styles from './SimpleButton.module.css';

interface IProps {
    href: string;
    label: string;
    external?: boolean;
};

const SimpleButton = (props : IProps) : JSX.Element => {
    return (
        props.external === true
        ? (
            <a href={props.href} className={styles.link}>
                <div className={styles.button}>
                    {props.label}
                </div>
            </a>
        )
        : (
            <Link href={props.href}>
                <div className={styles.button}>
                    {props.label}
                </div>
            </Link>
        )
    );
};

export default SimpleButton;