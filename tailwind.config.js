/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "hero-image":
          "linear-gradient(to left bottom, rgba(0, 0, 0, .6), rgba(43, 108, 176, 0.3)), url('/hero/hero.webp')",

        "gallery-pattern1": "url('/gallery/img1.jpg')",

        "gallery-pattern2": "url('/gallery/img2.jpg')",

        "gallery-pattern3": "url('/gallery/img3.jpg')",

        "gallery-pattern4": "url('/gallery/img4.jpg')",

        "gallery-pattern5": "url('/gallery/img5.jpg')",
      },
    },
  },
  plugins: [],
};
