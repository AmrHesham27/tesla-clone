import { useState } from "react";

function useDynamicContentParent(initialContent) {
  const [content, setContent] = useState(initialContent);
  const [opacity, setOpacity] = useState(100);

  return { content, setContent, opacity, setOpacity }
}

export default useDynamicContentParent;
