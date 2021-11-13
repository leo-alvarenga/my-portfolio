import styles from './PostList.module.css';

import { DefaultProps } from '../../libs/types';

interface ListProps extends DefaultProps {
    title?: string;
}

const PostList = (props : ListProps) : JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <h2>
                {props.title || 'Postagens'}
            </h2>
            <ul className={styles.list}>
                {
                    props.children?.map((el, index) => (
                        <li className={styles.listItem} key={`${index}`}>
                            {el}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default PostList;