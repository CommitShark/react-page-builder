import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ElementProps } from "../../types";
import { ElementWrapper } from "../common/styled";

const StyledText = styled(motion.div)`
  min-height: 20px;
  padding: 8px;
  outline: none;
  border-radius: 4px;

  &:focus {
    background: #f8f9fa;
  }
`;

export const TextElement: React.FC<ElementProps> = ({
  element,
  isSelected,
  onSelect,
  onUpdate,
}) => {
  const handleContentChange = (content: string) => {
    onUpdate({ props: { ...element.props, content } });
  };

  return (
    <ElementWrapper isSelected={isSelected} onClick={onSelect}>
      <StyledText
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => handleContentChange(e.currentTarget.innerHTML)}
        dangerouslySetInnerHTML={{
          __html: element.props.content || "Click to edit text",
        }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      />
    </ElementWrapper>
  );
};
