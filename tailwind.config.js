/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "blog.html", "sustainability.html", "career.html"],
  theme: {
    extend: {
      backgroundImage: {
        "career-hero": 'url("/src/img/career-hero.jpg")',
      },
    },
  },
  plugins: [],
};
