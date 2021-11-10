// next
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import Head from 'next/head';

import ReactMarkdown from 'react-markdown';

// styles
import styles from '../../styles/Post.module.css';

// components
import SimpleButton from '../../components/SimpleButton';

// types
import { DefaultProps, IPost, IPostPreview } from '../../libs/types';

// data consumption
import { getPostById, getAllPostIds } from '../../libs/post';

interface PostProps extends DefaultProps {
    post: IPostPreview;
    content: string;
};

const Post : NextPage<PostProps> = (props) => {
    return (
        <div className={styles.postWrapper}>
            <Head>
                <title>{props.post.title}</title>
            </Head>

            <div className={styles.post}>
                <h1>{props.post.title}</h1>

                <h4>{props.post.subheading}</h4>
                <h6>{props.post.date}</h6>

                <ReactMarkdown sourcePos={true}>
                    {props.content}
                </ReactMarkdown>
                
            </div>

            <SimpleButton
                href="/"
                label="&larr; Voltar para a página principal"
            />
        </div>
    );
};

export const getStaticPaths : GetStaticPaths = async () => {
    const paths : Array<string | { params: { [key: string]: string } }> = await getAllPostIds();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps : GetStaticProps = async ({ params }) => {
    const { content, ...post } : IPost = await getPostById(params?.id as string);

    return {
        props: {
            post,
            content,
        },
    };
};

export default Post;