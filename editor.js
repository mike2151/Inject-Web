function hello() {
  chrome.tabs.executeScript({
        code: 'var code_to_inject = "'  + String(document.getElementById("editor_box").value) + '"'
    }, function(result) {
        chrome.tabs.executeScript({file: "insert.js"}, function(result) {
        });
    });
}


document.getElementById('inject_html_code').addEventListener('click', hello);