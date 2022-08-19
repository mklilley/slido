import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/moon.css";
import "reveal.js/plugin/highlight/monokai.css";

let deck = new Reveal({
    plugins: [Markdown, RevealHighlight],
});
deck.initialize();
