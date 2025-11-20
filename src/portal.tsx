// src/Portal.tsx

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

// Function to get the target node (document.body)
const portalRoot = document.body; 

export default function Portal({ children }: PortalProps) {
  // Renders the children into the portalRoot node (document.body)
  return createPortal(children, portalRoot);
}