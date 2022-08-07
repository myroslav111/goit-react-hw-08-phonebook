import styled from '@emotion/styled';

export const FormFind = styled.form`
  position: relative;
  width: 100%;
  max-width: 17em;
`;

export const Label = styled.label`
  color: #e3e4e8;
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
`;

export const Input = styled.input`
  color: var(--fg);
  font: 1em/1.5 Hind, sans-serif;
  margin: auto;
  display: block;
  transition: all calc(var(--dur) * 0.5) linear;
  background: transparent;
  border-radius: 50%;
  box-shadow: 0 0 0 0.25em inset;
  caret-color: var(--primary);
  width: 2em;
  height: 2em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus,
  &:valid {
    background: var(--input);
    border-radius: 0.25em;
    box-shadow: none;
    padding: 0.25em 1em;
    transition-duration: calc(var(--dur) * 0.25);
    transition-delay: calc(var(--dur) * 0.25);
    height: 2em;
    width: 100%;
  }
  &:focus {
    animation: showCaret var(--dur) steps(1);
    outline: transparent;
  }
  &:focus + Span,
  &:valid + Span {
    animation: handleToCaret var(--dur) linear;
    background: transparent;
    width: 1px;
    height: 1.5em;
    transform: translate(0, -1em) rotate(-180deg) translate(7.5em, -0.25em);
  }
`;

export const Span = styled.span`
  margin: auto;
  display: block;
  transition: all calc(var(--dur) * 0.5) linear;
  background: currentColor;
  border-radius: 0 0 0.125em 0.125em;
  margin-bottom: -0.6em;
  width: 0.25em;
  height: 1em;
  transform: translate(0, -1em) rotate(-45deg) translate(0, 0.875em);
  transform-origin: 50% 0;
`;