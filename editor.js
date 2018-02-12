function clickaction() {
  document.getElementById('instructions').innerHTML = "Click anywhere on the page to insert your code.<br/>Note: if you do not see anything, the current website has blocked direct code injections.<br/> To stop the injections, open the chrome extension again.";
  chrome.tabs.executeScript({
        code: 'var code_to_inject = `'  + String(document.getElementById("editor_box").value) + '`;'
    }, function(result) {
        chrome.tabs.executeScript({file: "insert.js"}, function(result) {
        });
    });
}

document.getElementById('inject_html_code').addEventListener('click', clickaction);

//adopted from: http://jsfiddle.net/n9uuv0hd/80/
var tx = document.getElementsByTagName('textarea');
for (var i = 0; i < tx.length; i++) {
  tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}