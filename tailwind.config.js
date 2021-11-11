module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
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
