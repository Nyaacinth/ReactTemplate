import React from "@vitejs/plugin-react"
import UnoCSS from "unocss/vite"
import Checker from "vite-plugin-checker"

import { defineConfig } from "vite"

export default defineConfig({
    server: {
        port: 1420,
        strictPort: true
    },
    clearScreen: false,
    envPrefix: ["VITE_", "TAURI_"],
    build: {
        target: ["es2021", "chrome105", "safari13"]
    },
    plugins: [
        React(),
        UnoCSS(),
        Checker({
            typescript: { tsconfigPath: "tsconfig.json" },
            eslint: {
                lintCommand:
                    "eslint --config .eslintrc.json --ignore-path .gitignore ./**/*.{js,ts,jsx,tsx} --no-error-on-unmatched-pattern"
            }
        })
    ]
})
