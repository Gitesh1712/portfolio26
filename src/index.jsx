import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";

const THEME_STORAGE_KEY = "portfolio-theme";

const getInitialTheme = () => {
	try {
		const saved = localStorage.getItem(THEME_STORAGE_KEY);
		if (saved === "dark" || saved === "light") {
			return saved;
		}
	} catch {
		// Ignore storage read failures and use default theme.
	}

	return "dark";
};

document.documentElement.classList.toggle("dark", getInitialTheme() === "dark");

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
