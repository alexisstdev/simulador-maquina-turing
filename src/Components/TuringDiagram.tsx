import { Box, ButtonGroup, Center, IconButton } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { FiRepeat, FiZoomIn, FiZoomOut } from 'react-icons/fi';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import Viz from 'viz.js';
import { Module, render } from 'viz.js/full.render.js';
import { Transition } from '../types/types';

interface Props {
  transitions: Transition[];
}

const TuringDiagram = ({ transitions }: Props) => {
  const graphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const viz = new Viz({ Module, render });

    const graph = `digraph G {
      graph [bgcolor=transparent, fontname=Arial, fontsize=14];
      node [shape=circle, style=filled, fillcolor=white, fontname=Arial, width=.8, height=.8, fontsize=16, color=white
      ];
      edge [color=white, arrowhead=vee, arrowsize=0.7, fontname=Arial, fontsize=14, fontcolor=white];
      ${transitions
        .map(({ from, to, read, write, direction }) => {
          return `"${from.name}" -> "${to.name}" [label="  ${read} / ${write}, ${direction}      "];`;
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
        console.error('Error rendering graph:', error);
      });
  }, [transitions]);
  return (
    <Box
      flex={0.5}
      position='relative'
      border='1px'
      borderColor='gray.200'
      borderRadius='md'
      overflow={'hidden'}
      maxH={'100%'}
    >
      <TransformWrapper limitToBounds={false}>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <TransformComponent>
              <Box ref={graphRef} w='100vw' />
            </TransformComponent>
            <Center position='absolute' w='100%' bottom='0'>
              <ButtonGroup my={2} alignItems={'center'}>
                <IconButton
                  aria-label='Zoom In'
                  icon={<FiZoomIn />}
                  onClick={() => zoomIn()}
                />
                <IconButton
                  aria-label='Zoom Out'
                  icon={<FiZoomOut />}
                  onClick={() => zoomOut()}
                />
                <IconButton
                  aria-label='Reset'
                  icon={<FiRepeat />}
                  onClick={() => resetTransform()}
                />
              </ButtonGroup>
            </Center>
          </>
        )}
      </TransformWrapper>
    </Box>
  );
};

export default TuringDiagram;
