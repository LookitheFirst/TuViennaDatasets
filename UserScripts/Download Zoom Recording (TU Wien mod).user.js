// ==UserScript==
// @name         Download Zoom Recording (TU Wien mod)
// @namespace    http://www.bluespace.tech/
// @version      0.3
// @description  Add a green button to download zoom recorded video.
// @author       William Li, author of ID Guard Offline, a great password manager
// @match        https://tuwien.zoom.us/rec/*
// @grant        none
// @license      MIT
// @homepageURL  http://www.bluespace.tech/
// @supportURL   https://gist.github.com/everwanna/fbc88a56bd2a71ccc3f7c9443737fdb6
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.setTimeout(function() {
        var v = document.getElementsByTagName('video')[0];
        var source = v.currentSrc;

        var download = document.createElement('a');
        download.href = source;
        download.style = "position: fixed; right: 16px; top: 16px; background-color: MediumSeaGreen; color: white; padding: 12px;";

        download.innerText = "Right click, Save Link As...";
        document.body.appendChild(download);
        function enableContextMenu(aggressive = false) {
            void(document.ondragstart=null);
            void(document.onselectstart=null);
            void(document.onclick=null);
            void(document.onmousedown=null);
            void(document.onmouseup=null);
            void(document.body.oncontextmenu=null);
            enableRightClickLight(document);
            if (aggressive) {
                enableRightClick(document);
                removeContextMenuOnAll("body");
                removeContextMenuOnAll("img");
                removeContextMenuOnAll("td");
            }
        }
        function removeContextMenuOnAll(tagName) {
            var elements = document.getElementsByTagName(tagName);
            for (var i = 0; i < elements.length; i++) {
                enableRightClick(elements[i]);
            }
        }
        function enableRightClickLight(el) {
            el || (el = document);
            el.addEventListener("contextmenu", bringBackDefault, true);
        }
        function enableRightClick(el) {
            el || (el = document);
            el.addEventListener("contextmenu", bringBackDefault, true);
            el.addEventListener("dragstart", bringBackDefault, true);
            el.addEventListener("selectstart", bringBackDefault, true);
            el.addEventListener("click", bringBackDefault, true);
            el.addEventListener("mousedown", bringBackDefault, true);
            el.addEventListener("mouseup", bringBackDefault, true);
        }
        function restoreRightClick(el) {
            el || (el = document);
            el.removeEventListener("contextmenu", bringBackDefault, true);
            el.removeEventListener("dragstart", bringBackDefault, true);
            el.removeEventListener("selectstart", bringBackDefault, true);
            el.removeEventListener("click", bringBackDefault, true);
            el.removeEventListener("mousedown", bringBackDefault, true);
            el.removeEventListener("mouseup", bringBackDefault, true);
        }
        function bringBackDefault(event) {
            event.returnValue = true;
            (typeof event.stopPropagation === 'function') && event.stopPropagation();
            (typeof event.cancelBubble === 'function') && event.cancelBubble();
        }
        enableContextMenu();

    }, 2000);

})();
