module.exports = {
  content: [
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./**/*.md",
    "./**/*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#7c3aed",
        sitebg: "#071025"
      },
      borderRadius: {
        xl: "12px"
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};