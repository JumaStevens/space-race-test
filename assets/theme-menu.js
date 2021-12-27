(() => {
  // Menu constants
  const MENU = {
    SELECTOR: '.js-menu',
    IS_OPEN_CLASS: 'is-open'
  }
  const MENU_TOGGLE_SELECTOR = '.js-toggle-menu'

  // Required elements
  const menuEl = document.querySelector(MENU.SELECTOR)
  const menuToggleEls = document.querySelectorAll(MENU_TOGGLE_SELECTOR)

  // Tracks menu toggle state
  let isMenuOpen = false

  // Only proceed if required element(s) exist
  if (!menuEl || !menuToggleEls.length) return

  // Handles menu toggle event
  const onMenuToggle = (e) => {
    isMenuOpen = !isMenuOpen

    // Toggle menu open classname
    isMenuOpen
      ? menuEl.classList.add(MENU.IS_OPEN_CLASS)
      : menuEl.classList.remove(MENU.IS_OPEN_CLASS)
  }

  // Add event listeners to toggle menu triggers
  menuToggleEls.forEach((el) => el.addEventListener('click', onMenuToggle))
})()
