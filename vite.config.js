import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://Jayh03.github.io/PTT_Rick_and_Morty/",
  plugins: [react()],
})
