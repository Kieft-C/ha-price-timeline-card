import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/price-timeline-card.js",
  output: {
    file: "price-timeline-card.js",
    format: "es"
  },
  plugins: [
    resolve(),
    commonjs()
  ]
};
