export interface PageElement {
  id: string;
  type: string;
  props: Record<string, any>;
  children?: PageElement[];
  style?: React.CSSProperties;
}

export interface PageData {
  id: string;
  title: string;
  elements: PageElement[];
  styles?: Record<string, any>;
}

export interface BuilderContextType {
  pageData: PageData;
  selectedElement: string | null;
  isEditing: boolean;
  addElement: (element: PageElement, parentId?: string) => void;
  updateElement: (elementId: string, updates: Partial<PageElement>) => void;
  deleteElement: (elementId: string) => void;
  selectElement: (elementId: string | null) => void;
  toggleEditMode: () => void;
}

export interface ElementProps {
  element: PageElement;
  isSelected: boolean;
  onSelect: () => void;
  onUpdate: (updates: Partial<PageElement>) => void;
}
