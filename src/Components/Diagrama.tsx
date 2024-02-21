import { Box, ButtonGroup, Center, IconButton } from '@chakra-ui/react';
import { FiRefreshCcw, FiZoomIn, FiZoomOut } from 'react-icons/fi';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import useDiagrama from '../hooks/useDiagrama';

const Diagrama = () => {
  const { graphRef } = useDiagrama();

  return (
    <Box
      position='relative'
      border='1px'
      borderColor='gray.200'
      borderRadius='md'
      overflow={'hidden'}
      minH={'265px'}
      maxH={'100%'}
      cursor={'grab'}
    >
      <TransformWrapper limitToBounds={false}>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <TransformComponent>
              <Box ref={graphRef} w='100%' />
            </TransformComponent>
            <Center position='absolute' w='100%' bottom='0'>
              <ButtonGroup my={2} alignItems={'center'}>
                <IconButton
                  aria-label='Zoom In'
                  icon={<FiZoomIn />}
                  onClick={() => zoomIn()}
                  cursor={'default'}
                />
                <IconButton
                  aria-label='Zoom Out'
                  icon={<FiZoomOut />}
                  onClick={() => zoomOut()}
                  cursor={'default'}
                />
                <IconButton
                  aria-label='Reset'
                  icon={<FiRefreshCcw />}
                  onClick={() => resetTransform()}
                  cursor={'default'}
                />
              </ButtonGroup>
            </Center>
          </>
        )}
      </TransformWrapper>
    </Box>
  );
};

export default Diagrama;
