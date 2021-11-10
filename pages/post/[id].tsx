// next
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import Head from 'next/head';

// components
import Container from "../../components/Container";

// types
import { DefaultProps, IPost } from '../../libs/types';

// data consumption
import { getPostById, getAllPostIds } from '../../libs/post';

interface PostProps extends DefaultProps {
    post: IPost;
};

const Post : NextPage<PostProps> = (props) => {
    return (
        <Container>
            <Head>
                <title>{props.post.title}</title>
            </Head>

            <h1>{props.post.title}</h1>

            <h4>{props.post.subheading}</h4>
            <h6>{props.post.date}</h6>

            <div>
                {props.post.content}
            </div>

        </Container>
    );
};

export const getStaticPaths : GetStaticPaths = async () => {
    const paths : Array<string | { params: { [key: string]: string } }> = await getAllPostIds();

    console.log(await paths)

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps : GetStaticProps = async ({ params }) => {
    const post : IPost = await getPostById(params?.id as string);

    return {
        props: {
            post,
        },
    };
};

export default Post;