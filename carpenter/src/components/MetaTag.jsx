import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



function MetaTag({ content }) {
  const location = useLocation();

  useEffect(() => {
    const metaTag = document.querySelector('meta[property="og:url"]');
    if (metaTag) {
      metaTag.content = content + location.pathname;
    }
  }, [content, location]);

  return null;
}

export default MetaTag;
