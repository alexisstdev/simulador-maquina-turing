import React, { useEffect, useRef } from 'react';
import Viz from 'viz.js';
import { Module, render } from 'viz.js/full.render.js';

const TuringDiagram = ({ transitions }) => {
  const graphRef = useRef(null);

  useEffect(() => {
    const viz = new Viz({ Module, render });
    const graph = `digraph G {
      node [shape=circle, style=filled, fillcolor=white];
      edge [color=black, arrowhead=vee, arrowsize=0.7];
      ${transitions.map(({ from, to, read, write, direction }) => {
        return `"${from}" -> "${to}" [label="${read}/${write},${direction}"];`;
      }).join('\n')}
    }`;

    viz.renderSVGElement(graph)
      .then((element) => {
        graphRef.current.innerHTML = '';
        graphRef.current.appendChild(element);
      })
      .catch((error) => {
        console.error('Error rendering graph:', error);
      });
  }, [transitions]);

  return (
    <div ref={graphRef} />
  );
};

export default TuringDiagram;
