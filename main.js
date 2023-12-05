function loadPage(pageName) {
  document.addEventListener('DOMContentLoaded', async () => {
    const pageReq = await fetch(`pages/${pageName}`);
    const pageRes = await pageReq.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(pageRes, 'text/html');
    const newPage = doc.getElementById(pageName);
    const oldPage = document.getElementById(pageName);

    oldPage.parentNode.replaceChild(newPage, oldPage);
  });
}



loadPage('home');
loadPage('about');
loadPage('work-experience');
loadPage('projects');
loadPage('skills');
loadPage('education');
loadPage('contact');
