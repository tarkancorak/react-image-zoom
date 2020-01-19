import React from 'react';
import PropTypes from 'prop-types';
import ImageZoom from 'js-image-zoom';

const ReactImageZoom = props => {
  let imageZoom;
  let container;

  React.useEffect(() => {
    if (imageZoom) {
      imageZoom.kill();
      imageZoom = new ImageZoom(container, props);
    }
  }, [props.img]);

  React.useEffect(() => {
    rerenderImageZoom(props);
    return kill;
  }, [props]);

  const rerenderImageZoom = props => {
    imageZoom = new ImageZoom(container, props);
  };

  const kill = () => {
    imageZoom.kill();
    imageZoom = void 0;
  };

  const getRef = ref => {
    container = ref;
  };

  return <div ref={getRef}/>;

};

ReactImageZoom.propTypes = {
  width: PropTypes.number,
  img: PropTypes.string,
  height: PropTypes.number,
  zoomWidth: PropTypes.number,
  scale: PropTypes.number,
  offset: PropTypes.object,
  zoomStyle: PropTypes.string,
  zoomLensStyle: PropTypes.string,
  zoomPosition: PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'original'])
};

export default ReactImageZoom;
