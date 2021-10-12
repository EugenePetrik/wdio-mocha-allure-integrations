export const endpoints = {
  user: {
    register: '/users',
    login: '/users/login',
  },
  article: {
    getArticle(articleSlug) {
      return `/articles/${articleSlug}`;
    },
    createArticle: '/articles',
    updateArticle(articleSlug) {
      return `/articles/${articleSlug}`;
    },
    addArticleToFavorite(articleSlug) {
      return `/articles/${articleSlug}/favorite`;
    },
    deleteArticle(articleSlug) {
      return `/articles/${articleSlug}`;
    },
  },
  comment: {
    createComment(articleSlug) {
      return `/articles/${articleSlug}/comments`;
    },
    deleteComment(articleSlug, commentId) {
      return `/articles/${articleSlug}/comments/${commentId}`;
    },
  },
};
