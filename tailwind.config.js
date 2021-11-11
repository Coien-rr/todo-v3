module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        // 'checked': ''
      }),
      gradientColorStops: theme => ({
        ...theme('colors'),
        'done': '#32f8bd',
        'bottom': '497BE8'
      }),
      maxHeight: {
        'px-max-height': '210px'
      },
      backgroundSize: {
        '80%': '80%',
        '16': '1rem'
      },
      backgroundImage: theme => ({
        'check': "url('/src/assets/check-solid.svg')",
       }),
      spacing: {
        'px-todo-width': '400px',
        'px-todo-height': '700px',
        'px-max-height': '210px'
      },
      backgroundColor: {
        'todoitem':'#F2F2F2',
        'todoli':'#32f8bd',
      }
    }
  },
  variants: {
    extend: {
      padding: ['hover'],
      margin: ['hover'],
      inset: ['hover'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      backgroundImage: ['checked'],
    },
  },
  plugins: [],
}
