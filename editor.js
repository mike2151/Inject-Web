function hello() {
  chrome.tabs.executeScript({
    file: 'insert.js'
  }); 
}

document.getElementById('inject_html_code').addEventListener('click', hello);