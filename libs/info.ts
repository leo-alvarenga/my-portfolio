export const getGithubProfilePic = async () : Promise<string | undefined> => {
    try {
        const rawData = await (await fetch('https://api.github.com/users/leo-alvarenga')).json();

        return (await rawData?.avatar_url) + '.jpg';
    } catch (error) {
        return undefined;
    }
};