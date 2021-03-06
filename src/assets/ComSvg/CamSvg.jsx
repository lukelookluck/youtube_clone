import React, { memo } from 'react';
import PropTypes from 'prop-types';

// SVG path COPIED FROM YOUTUBE

const CamSvg = ({ Theme }) => {
  return (
    <div id="cax" className="ytb_svg titleC">
      <svg className="ytb_svg__wrapper" viewBox="0 0 24 24" focusable={false}>
        <g>
          <path
            fill={Theme ? '#fff' : '#606060'}
            d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"
          />
        </g>
      </svg>
    </div>
  );
};

CamSvg.propTypes = {
  Theme: PropTypes.bool.isRequired,
};

export default memo(CamSvg);
