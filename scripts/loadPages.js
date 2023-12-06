async function loadPage(pageName) {
  const pageReq = await fetch(`pages/${pageName}`);
  const pageRes = await pageReq.text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(pageRes, 'text/html');
  const newPage = doc.getElementById(pageName);
  const oldPage = document.getElementById(pageName);

  oldPage.parentNode.replaceChild(newPage, oldPage);
}

function loadPages() {
  loadPage('home');
  loadPage('about');
  loadPage('work-experience');
  loadPage('projects');
  loadPage('skills');
  loadPage('education');
  loadPage('contact');
}



document.addEventListener('DOMContentLoaded', loadPages);
