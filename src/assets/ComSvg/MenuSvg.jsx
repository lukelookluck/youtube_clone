import React, { memo } from 'react';
import PropTypes from 'prop-types';

// SVG path COPIED FROM YOUTUBE

const MenuSvg = ({ Theme }) => {
  return (
    <div className="ytb_svg">
      <svg className="ytb_svg__wrapper" viewBox="0 0 24 24" focusable={false}>
        <g>
          <path
            fill={Theme ? '#fff' : '#606060'}
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          />
        </g>
      </svg>
    </div>
  );
};

MenuSvg.propTypes = {
  Theme: PropTypes.bool.isRequired,
};

export default memo(MenuSvg);
