// utils.js (create a new file)

export const generateSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  };
  