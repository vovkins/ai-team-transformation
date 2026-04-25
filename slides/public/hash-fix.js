// Override Vue Router to use hash mode for GitHub Pages compatibility
// This fixes the issue where the overview page shows on mobile devices
window.addEventListener('DOMContentLoaded', () => {
  // Force redirect from /overview to /
  if (window.location.pathname.endsWith('/overview') || window.location.pathname === '/overview') {
    window.location.replace(window.location.pathname.replace('/overview', '') + '#/');
    return;
  }
});
