import { useContext, useEffect, useRef } from 'react';
import Viz from 'viz.js';
import { Module, render } from 'viz.js/full.render.js';
import { Context } from '../Components/MaquinaProvider';

export default function useDiagrama() {
  const graphRef = useRef<HTMLDivElement | null>(null);
  const { maquina } = useContext(Context);
  const transitions = maquina.transiciones;

  useEffect(() => {
    const viz = new Viz({ Module, render });

    const graph = `digraph G {
      graph [bgcolor=transparent, fontname=Arial, fontsize=14];
      node [shape=circle, style=filled, fillcolor=white, fontname=Arial, width=.8, height=.8, fontsize=16, color=white
      ];
      edge [color=white, arrowhead=vee, arrowsize=0.7, fontname=Arial, fontsize=14, fontcolor=white];
      ${transitions
        .map(({ desde, hacia, leer, escribir, direccion }) => {
          return `"${desde.nombre}" -> "${hacia.nombre}" [label="  ${leer} / ${escribir}, ${direccion}      "];`;
        })
        .join('\n')}
      }`;

    viz
      .renderSVGElement(graph)
      .then((element) => {
        if (graphRef.current) {
          graphRef.current.innerHTML = '';
          graphRef.current.appendChild(element);
        }
      })
      .catch((error) => {
        console.error('Error renderizando grafico:', error);
      });
  }, [transitions]);

  return { graphRef };
}
