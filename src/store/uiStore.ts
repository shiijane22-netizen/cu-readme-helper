import { create } from "zustand";

interface ConfirmationState {
  open: boolean;
  message: string;
}

interface UIState {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  confirmation: ConfirmationState;
  setScrolled: (isScrolled: boolean) => void;
  setMobileMenuOpen: (isOpen: boolean) => void;
  showConfirmation: (message: string) => void;
  closeConfirmation: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isScrolled: false,
  isMobileMenuOpen: false,
  confirmation: {
    open: false,
    message: "",
  },
  setScrolled: (isScrolled) => set({ isScrolled }),
  setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
  showConfirmation: (message) =>
    set({ confirmation: { open: true, message } }),
  closeConfirmation: () =>
    set({ confirmation: { open: false, message: "" } }),
}));
