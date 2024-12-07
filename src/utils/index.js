export const ALL_MOVIES_API_URL = 'https://headless-cms-wp2p.onrender.com/api/movies?populate=*';

export const SINGLE_MOVIE_API_URL = (documentId) => {
    return `https://headless-cms-wp2p.onrender.com/api/movies/${documentId}?populate=*`;
}