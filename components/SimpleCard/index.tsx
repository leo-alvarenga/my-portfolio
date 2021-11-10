// Next
import Link from 'next/link';

// styles
import styles from './SimpleCard.module.css';

import { MiniPost } from '../../libs/types';

interface Props extends MiniPost {
    externalLink?: boolean;
};

const SimpleCard = (props : Props) : JSX.Element => {
    return (
        <div className={styles.cardWrapper}>
            <Link href={props.href || '/'} passHref={props.externalLink}>
                <a className={styles.card}>
                    <h2>
                        {props.title}
                    </h2>

                    {
                        props.subheading
                        &&
                        <p>
                            <small>
                                {props.subheading}
                            </small>
                        </p>
                    }

                    {
                        props.date
                        ? ( 
                            <small>
                                {
                                    typeof props.date === 'string'
                                    ? props.date
                                    : props.date.toDateString()
                                }
                            </small>
                        )
                        : null
                    }
                </a>
            </Link>
        </div>
    );
};

export default SimpleCard;