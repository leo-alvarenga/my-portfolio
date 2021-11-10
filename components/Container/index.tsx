import styles from './Container.module.css';

type Props = {
    children?: JSX.Element[];
}

const Container = (props : Props) : JSX.Element => {
    return (
        <div className={styles.container}>
            {props?.children}
        </div>
    );
};

export default Container;