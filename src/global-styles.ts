import { createGlobalStyle } from 'typed-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Asap');

  * {
    font-size: inherit;
    font-family: inherit;
  }

  html {
    font-size: calc(1em + 1vw);
    font-family: Asap, sans-serif;
  }

  body {
    max-width: 20rem;
    margin: 0;
    padding: 1rem;
  }

  h1 {
    margin-top: 0;
    font-size: 1.25rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul:empty, .empty-state {
    display: none;
  }

  ul:empty + .empty-state {
    display: block;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tick {
    display: inline-block;
    width: 0.66rem;
    height: 0.66rem;
    border: 0.125rem solid;
    margin-right: 0.25rem;
    border-radius: 0.125rem;
  }

  [type="checkbox"]:checked +  label .tick {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI1MCIgd2lkdGg9IjUwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgdmlld0JveD0iMCAwIDUwLjAwMDAwMSA1MC4wMDAwMDEiPiA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xMDAyLjQpIj4gIDxyZWN0IHN0eWxlPSJzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlOiMxYTFhMWE7c3Ryb2tlLXdpZHRoOjMuNDQ1MztzdHJva2UtbGluZWNhcDpyb3VuZDtmaWxsOiMxYTFhMWEiIHRyYW5zZm9ybT0ibWF0cml4KC44ODc1OSAuNDYwNjQgLS40NTEyNyAuODkyMzkgMCAwKSIgcnk9IjEuMTUwNCIgaGVpZ2h0PSIzMS42OTEiIHdpZHRoPSI1Ljk5MyIgeT0iODgyLjcxIiB4PSI0ODcuMTkiLz4gIDxyZWN0IHN0eWxlPSJzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlOiMxYTFhMWE7c3Ryb2tlLXdpZHRoOjMuMTM5MjtzdHJva2UtbGluZWNhcDpyb3VuZDtmaWxsOiMxYTFhMWEiIHRyYW5zZm9ybT0icm90YXRlKDI3LjA4NSkiIHJ5PSIuOTExNjkiIGhlaWdodD0iNi4yNzgyIiB3aWR0aD0iMTguODM1IiB5PSI5MTEuMjIiIHg9IjQ3OC42MiIvPiA8L2c+PC9zdmc+);
    background-repeat: none;
    background-position: center;
    background-size: 100%;
  }

  [type="checkbox"]:checked + label .text {
    text-decoration: line-through;
  }

  li label {
    flex: 2;
  }

  li + li {
    margin-top: 0.55rem;
  }

  button {
    margin: 0;
    line-height: 1;
    border: 0;
  }

  li button {
    border: 0;
    padding: 0;
    background: 0;
  }

  button svg {
    width: 1.125em;
    height: 1.125em;
  }

  form {
    margin-top: 1rem;
    display: flex;
  }

  input, [type="submit"] {
    border: 0.125rem solid;
    border-radius: 0.125rem;
    line-height: 1;
  }

  [type="text"] {
    flex: 3;
    margin-right: 0.25rem;
  }

  [type="submit"] {
    background: #000;
    color: #fff;
    padding: 0.25rem 0.5rem;
    border: 2px solid #000;
  }

  [type="submit"][disabled] {
    opacity: 0.33;
  }

  ::-webkit-input-placeholder {
    color: #444;
    font-style: italic;
  }
  ::-moz-placeholder {
    color: #444;
    font-style: italic;
  }
  :-ms-input-placeholder {
    color: #444;
    font-style: italic;
  }
  :-moz-placeholder {
    color: #444;
    font-style: italic;
  }

  input:focus, button:focus, [type="checkbox"]:focus + label .tick {
    outline: none;
    box-shadow: 0 0 0 0.125rem #2a7fff;
  }

  [tabindex="-1"]:focus {
    outline: none;
  }

  .vh {
    position: absolute !important;
    clip: rect(1px, 1px, 1px, 1px);
    padding:0 !important;
    border:0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
  }

  .smaller {
    font-size: 0.75rem;
  }
`;

export default GlobalStyle;
