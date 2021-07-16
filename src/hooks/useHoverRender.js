import React, { useState, useEffect } from "react";

const useHoverRender = (props) => {
  const { isMounted } = props;
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      setShouldRender(false);
    }
  }, [isMounted]);
  return { shouldRender };
};

useHoverRender.propTypes = {};

export default useHoverRender;
