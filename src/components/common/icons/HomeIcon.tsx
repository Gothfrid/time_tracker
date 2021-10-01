"use strict";

import React from 'react';
import { SvgIcon } from '@mui/material';
import { ISvgIcon } from '../../../utils/types_utils';

const HomeIcon = ({ fill }: ISvgIcon) => {

  return (
    <SvgIcon viewBox={"0 0 24 24"}>
      <path
        style={{
          transition: 'fill 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        }}
        d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"
        fill={fill}
      />
    </SvgIcon>
  )
}

export default HomeIcon;