# Documentation Link:

https://github.com/acdlite/react-fiber-architecture


yt link: https://www.youtube.com/watch?v=MPCVGFvgVEQ&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=6

# React Fibre Architecture

- **What is React Fiber?**: React Fiber is a re-architecture of React's core algorithm.

React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. 

Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Other key features include:
    1.  the ability to pause, 
    2. abort, 
    3. or reuse work as new updates come in; 
    4. the ability to assign priority to different types of updates; 
    5. and new concurrency primitives.


# What is reconciliation?

Reconciliation is the process of determining what changes need to be made to the DOM in order to bring
it in line with the desired state of the application.
In React, this process is performed by the `reconciler`, which is responsible for:
1.  Determining what changes need to be made to the DOM.
2.  Creating a list of these changes (known as an `effect list`)
3.  Applying these changes to the DOM.


# reconciliation

The algorithm React uses to diff one tree with another to determine which parts need to be changed.

# update
A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.