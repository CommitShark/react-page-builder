// src/components/common/styled.ts
import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  background: white;
`;

export const ElementWrapper = styled(motion.div)<{ isSelected: boolean }>`
  position: relative;
  border: ${(props) =>
    props.isSelected ? "2px dashed #007bff" : "2px dashed transparent"};
  padding: 8px;
  margin: 4px;
  border-radius: 4px;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${(props) => (props.isSelected ? "#007bff" : "#ccc")};
  }
`;

export const Toolbar = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const Button = styled(motion.button)`
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin: 4px;
  font-size: 14px;

  &:hover {
    background: #0056b3;
  }
`;
