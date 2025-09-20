import React, { createContext, useContext, useReducer } from "react";
import { BuilderContextType, PageData, PageElement } from "../types";

interface BuilderState {
  pageData: PageData;
  selectedElement: string | null;
  isEditing: boolean;
}

type BuilderAction =
  | {
      type: "ADD_ELEMENT";
      payload: { element: PageElement; parentId?: string };
    }
  | {
      type: "UPDATE_ELEMENT";
      payload: { elementId: string; updates: Partial<PageElement> };
    }
  | { type: "DELETE_ELEMENT"; payload: string }
  | { type: "SELECT_ELEMENT"; payload: string | null }
  | { type: "TOGGLE_EDIT_MODE" };

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

const builderReducer = (
  state: BuilderState,
  action: BuilderAction
): BuilderState => {
  switch (action.type) {
    case "ADD_ELEMENT":
      // Implementation for adding elements
      return state;
    case "UPDATE_ELEMENT":
      // Implementation for updating elements
      return state;
    case "DELETE_ELEMENT":
      // Implementation for deleting elements
      return state;
    case "SELECT_ELEMENT":
      return { ...state, selectedElement: action.payload };
    case "TOGGLE_EDIT_MODE":
      return { ...state, isEditing: !state.isEditing };
    default:
      return state;
  }
};

export const BuilderProvider: React.FC<{
  children: React.ReactNode;
  initialData?: PageData;
}> = ({ children, initialData }) => {
  const [state, dispatch] = useReducer(builderReducer, {
    pageData: initialData || {
      id: "1",
      title: "New Page",
      elements: [],
    },
    selectedElement: null,
    isEditing: false,
  });

  const value: BuilderContextType = {
    pageData: state.pageData,
    selectedElement: state.selectedElement,
    isEditing: state.isEditing,
    addElement: (element, parentId) =>
      dispatch({ type: "ADD_ELEMENT", payload: { element, parentId } }),
    updateElement: (elementId, updates) =>
      dispatch({ type: "UPDATE_ELEMENT", payload: { elementId, updates } }),
    deleteElement: (elementId) =>
      dispatch({ type: "DELETE_ELEMENT", payload: elementId }),
    selectElement: (elementId) =>
      dispatch({ type: "SELECT_ELEMENT", payload: elementId }),
    toggleEditMode: () => dispatch({ type: "TOGGLE_EDIT_MODE" }),
  };

  return (
    <BuilderContext.Provider value={value}>{children}</BuilderContext.Provider>
  );
};

export const useBuilder = (): BuilderContextType => {
  const context = useContext(BuilderContext);
  if (!context) {
    throw new Error("useBuilder must be used within a BuilderProvider");
  }
  return context;
};
