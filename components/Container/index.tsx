import styles from './Container.module.css';

interface Props {
    children?: JSX.Element | JSX.Element[];
}

const Container = (props : Props) : JSX.Element => {
    return (
        <div className={styles.container}>
            {props?.children}
        </div>
    );
};

export default Container;