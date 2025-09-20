import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useBuilder } from "../../contexts/BuilderContext";
import { TextElement } from "../elements/TextElement";
import { Container, Toolbar, Button } from "../common/styled";
import { PageElement } from "../../types";

const ElementsContainer = styled(motion.div)`
  padding: 20px;
  min-height: 100vh;
`;

const elementComponents: Record<string, React.ComponentType<any>> = {
  text: TextElement,
  // Add more element types here
};

export const PageBuilder: React.FC = () => {
  const {
    pageData,
    selectedElement,
    isEditing,
    selectElement,
    updateElement,
    toggleEditMode,
  } = useBuilder();

  const renderElement = (element: any) => {
    const ElementComponent = elementComponents[element.type];
    if (!ElementComponent) return null;

    return (
      <ElementComponent
        key={element.id}
        element={element}
        isSelected={selectedElement === element.id}
        onSelect={() => selectElement(element.id)}
        onUpdate={(updates: Partial<PageElement>) =>
          updateElement(element.id, updates)
        }
      />
    );
  };

  return (
    <Container>
      <Toolbar
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleEditMode}
        >
          {isEditing ? "Preview" : "Edit"}
        </Button>
        {isEditing && (
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => console.log("Add element")}
          >
            Add Text
          </Button>
        )}
      </Toolbar>

      <ElementsContainer>
        <AnimatePresence>
          {pageData.elements.map((element) => (
            <motion.div
              key={element.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {renderElement(element)}
            </motion.div>
          ))}
        </AnimatePresence>
      </ElementsContainer>
    </Container>
  );
};
