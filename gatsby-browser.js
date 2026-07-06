// custom typefaces
import "@fontsource-variable/montserrat"
import "@fontsource/merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import './src/globals.css'
// Highlighting for code blocks
import "prismjs/themes/prism.css"
// fonts
// NOTE: Syne has been globally replaced with DM Sans. Instead of loading the
// real Syne font files, we alias the 'Syne' font-family name to DM Sans in
// src/globals.css, so any component still referencing font-['Syne'] renders
// with DM Sans without needing component-level changes.
// dm sans normal、medium、bold
import "@fontsource/dm-sans/400.css"   // Regular
import "@fontsource/dm-sans/500.css"   // Medium
import "@fontsource/dm-sans/700.css"   // Bold