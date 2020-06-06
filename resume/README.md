個人履歷—馮明佑
===
內容
---
由於我直至大一下學期還沒有什麼值得寫下的經歷，所以這份履歷是以高中時寫下的個人自述書為基礎作修改的。

我參考了手機中常見的 [Material Design](https://material.io/) 進行設計，例如標題列、字卡等，介面亦會隨螢幕大小而有改變。

部分字卡有連結至相關網頁，例如「電腦 > 澳大首屆智慧編程馬拉松」連結至澳門大學的新聞網頁。

技術
---
我並沒有使用任何模板和網頁框架（也沒有使用 jQuery 和 Bootstrap），希望只利用瀏覽器內建的功能來設計。

### HTML
為了方便 CSS 的設計，我使用了大量的 Semantic Elements（例如 \<header>、\<section> 等）。 

參考資料： [w3schools](https://www.w3schools.com/html/html5_semantic_elements.asp)、[MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)。

### CSS
由於 CSS 幾乎是從頭開始寫，所以這部分使用到、上課沒有提及的技術不少，僅列舉比較重要的幾項：
1. [position: sticky](https://developer.mozilla.org/en-US/docs/Web/CSS/position) — 使標題列到達頂部後，固定於上方。
2. [line-height](https://www.w3schools.com/css/css_align.asp) — 使標題更容易上下置中對齊。
3. [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) — 部分帶有連結的字卡，和按下手機版的漢堡選單時的淡入、淡出效果。
4. [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) — 因為沒有 Bootstrap，用來取代其 Grid System，以及簡化在 \<footer> 的排版。
5. [Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) — 也是為了代替 Bootstrap 而使用的，在不同螢幕大小下顯示不同的東西，例如在手機版會提供漢堡選單，電腦版則改變排版（2:8:2，利用 Flexbox）。
6. [CSS Variables](https://www.w3schools.com/css/css3_variables.asp) — 把較重要的長度數值記錄記錄成變數，方便電腦版變動排版，亦有利於後續修改。
7. [+ 號](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator) — 為圖片後方解釋文字加入樣式。
8. [::after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after) - 方便在標題後方加入外部連結符號。


### JavaScript
其實只有手機版的漢堡選單需要 JavaScript，但是因為沒有 jQuery，所以也須要使用到上課沒有提及的技術。
1. [document.querySelector(selector)](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) — 類似 $(selector)，只是每次只能選一個 Element。
2. [.addEventListener('click', fn)](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) — aka $(selector).on('click', fn)。
    - event.target — 被按下的目標。
    - [capture: true](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/) — 改變傳遞順序，使被按下的最內部 Element 成為 event.target。
3. [event.target.matches(selector)](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) — 測試 event.target 是否符合右方 selector。
4. [.classList.add 和 .remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) — aka $(selector).attr('class', ???) 之類的。

## 字體和圖示
使用[「jf open 粉圓字型」](https://justfont.com/huninn/)。
GitHub、郵件與連結圖示使用 [Octicons](https://primer.style/octicons/) 的 SVG 圖片檔。

## 圖片
1. 大頭照使用 2019 年 4 月 10 日於澳門拍攝的畢業證書用大頭照。
2. 背景照在 2019 年 9 月 10 日拍攝於臺大醉月湖面向積學館（化學系館）。
3. 澳門培正中學管樂團的戶外演出個人照片在 2016 年 12 月 11 日拍攝於澳門旅遊塔附近，由指導老師拍攝。
4. 第 20 屆亞太管樂節的照片在 2018 年 7 月 19 日拍攝於日本濱松 Act City 中演奏廳，應該是由指導老師拍攝的。
5. 澳門首屆智慧編程馬拉松頒獎前的照片在 2018 年 10 月 27 日於澳門大學聚賢樓內比賽場地拍攝。
6. Macao AI Challenge 2019 比賽培訓前的合照在 2018 年 12 月 15 日，由指導老師拍攝。

## 2020/06/06 更新內容
趁著還沒截止，追加新的東西。
1. 補上「Macao AI Challenge 2019」活動；
2. 在部分字卡上加入照片；
3. 在帶有外部連結的字卡標題後方加入連結符號；
4. 刪除「語言」中不重要的部分。

## 2020/06/04 建立內容
1. 重新上傳解析度較低的照片，以免載入過慢。
