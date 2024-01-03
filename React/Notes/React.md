# React

## Overview

React is a JavaScript library for building user interfaces.
**Main features:**

- Declarative
- Component-Based
- Learn Once, Write Anywhere

**Main concepts:**

- Components
- JSX
- Props
- State, Events, and Forms
- Hooks, Refs, and Context

## Components

A component is a piece of the user interface. It can be a button, a form, a dialog, a screen, etc.

- Components are reusable and composable
- Components can be nested inside other components
- Components can have their own state

### Create a component

function component

- A function that returns a React element
- Only returns a single root element
  - If there are more than one element, wrap them in a div

## JSX

Declarative syntax to describe what components look like and how they work

- components must return a block of JSX
- Extension of JavaScript that allows embedding JavaScript, CSS and React components into HTML

### Declarative

- Imperative: How to do things
  - Manual DOM element creation
  - Step by step instructions
- Declarative: What to do
  - Describe the desired result
  - React takes care of the rest
  - Never touch the DOM directly, instead, consider the UI as a function of state
