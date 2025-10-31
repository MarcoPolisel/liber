import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#6B7280',
        'custom-text-white': '#F9F5F1',
        'custom-gray-gradient': '#6B7280'
      },
      backgroundImage: {
        'custom-gray-gradient':
          'linear-gradient(269.84deg, rgba(0, 0, 0, 0) 40.87%, #6B7280 99.86%);',
        'custom-alt-gradient':
          'linear-gradient(-269.84deg, rgba(0, 0, 0, 0) -40.87%, #6B7280 99.86%);',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
export default config
