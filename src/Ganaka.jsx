import React, { useState } from 'react';
import { Button, Typography, Paper, Stack } from '@mui/material';
function गणक() {
  const [गणना, गणना_स्थापय] = useState(0);
  const वर्धय = () => {
    गणना_स्थापय(गणना + 1);
  };
  const न्यूनय = () => {
    if (गणना > 0) {
      गणना_स्थापय(गणना - 1);
    }
  };
  const पुनःस्थापय = () => {
    गणना_स्थापय(0);
  };
  return /*#__PURE__*/React.createElement(Paper, {
    elevation: 6,
    sx: {
      padding: 4,
      maxWidth: 400,
      margin: '100px auto',
      textAlign: 'center',
      fontFamily: "'Noto Sans Devanagari', sans-serif"
    }
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "h4",
    gutterBottom: true,
    sx: {
      fontWeight: 'bold'
    }
  }, "\u0917\u0923\u0915: ", गणना), /*#__PURE__*/React.createElement(Stack, {
    spacing: 2,
    direction: "row",
    justifyContent: "center",
    sx: {
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    color: "primary",
    onClick: वर्धय
  }, "\u2795 \u0935\u0930\u094D\u0927\u092F"), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    color: "error",
    onClick: न्यूनय,
    disabled: गणना === 0
  }, "\u2796 \u0928\u094D\u092F\u0942\u0928\u092F"), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    color: "warning",
    onClick: पुनःस्थापय
  }, "\uD83D\uDD04 \u092A\u0941\u0928\u0903\u0938\u094D\u0925\u093E\u092A\u092F")));
}
export default गणक;