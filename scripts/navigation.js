async function loadScreen(screen) {
  const res = await fetch(`screens/${screen}.html`);
  const html = await res.text();
  document.getElementById("app").innerHTML = html;
}

async function go(screen) {
  await loadScreen(screen);

  // Run screen-specific logic AFTER load
  if (screen === "calling") {
    updateCallingUI();
  }
}