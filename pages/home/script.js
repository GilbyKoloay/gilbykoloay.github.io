function changeTitlesGradients() {
  const name = document.getElementById('name');;
  const title = document.getElementById('title');;
  const gradients = [
    {lime: '#84cc16'},
    {green: '#22c55e'},
    {emerald: '#10b981'},
    {teal: '#14b8a6'},
    {cyan: '#06b6d4'},
    {sky: '#0ea5e9'},
    {blue: '#3b82f6'},
    {indigo: '#6366f1'},
    {violet: '#8b5cf6'},
    {purple: '#a855f7'},
    {fuchsia: '#d946ef'},
    {pink: '#ec4899'},
    {rose: '#f43f5e'},
    {red: '#ef4444'},
    {orange: '#f97316'},
    {amber: '#f59e0b'},
    {yellow: '#eab308'}
  ];
  let gradientIndex = 0;

  if (name && title) setInterval(() => {
    const leftGradient = gradients[gradientIndex];
    const middleGradient = gradients[(gradientIndex + 1) % gradients.length];
    const rightGradient = gradients[(gradientIndex + 2) % gradients.length];
    const style = `
      color: transparent;
      background: linear-gradient(to right, ${leftGradient[Object.keys(leftGradient)[0]]}, ${middleGradient[Object.keys(middleGradient)[0]]}, ${rightGradient[Object.keys(rightGradient)[0]]});
      -webkit-background-clip: text;
      background-clip: text;
    `;
  
    name.style = style;
    title.style = style;
    gradientIndex = (gradientIndex + 1) % gradients.length;
  }, 1000);
  else setTimeout(changeTitlesGradients, 500);
}



changeTitlesGradients();
