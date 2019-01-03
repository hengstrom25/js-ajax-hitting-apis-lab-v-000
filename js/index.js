// your code here

function displayCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        '<li><strong>' +
        commit.author.login +
        '</strong> - ' +
        commit.commit.message +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('commits').innerHTML = commitsList;  
}

function getCommits() {
  
}

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load');
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}

function getBranches() {
  
}


