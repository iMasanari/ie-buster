/*! IE Buster v1.1.0 MIT by Qrac */

!function () {
  var CURRENT_SCRIPT_ID = 'ie-buster-script'
  var DEFAULT_MAIN_TEXT = 'ご利用のインターネットブラウザは推奨環境ではありません。Webサイトの動作が保証できませんので、最新の Google Chrome をご利用ください。'
  var DEFAULT_LINK_TEXT = 'ダウンロードページへ'
  var DEFAULT_LINK_URL = 'https://www.google.com/chrome/'

  var userAgent = window.navigator.userAgent.toLowerCase()
  var isIe = ~userAgent.indexOf('msie') || ~userAgent.indexOf('trident')

  if (!isIe) return

  function ieBuster() {
    var currentScript = document.getElementById(CURRENT_SCRIPT_ID)
    var mainText = currentScript && currentScript.getAttribute('data-main-text') || DEFAULT_MAIN_TEXT
    var linkText = currentScript && currentScript.getAttribute('data-link-text') || DEFAULT_LINK_TEXT
    var linkUrl = currentScript && currentScript.getAttribute('data-link-url') || DEFAULT_LINK_URL

    var ieBusterApp = document.createElement('div')
    ieBusterApp.id = 'ie-buster-app'
    ieBusterApp.setAttribute(
      'style',
      'position: fixed; top: 0px; left: 0; width: 100%; padding: 16px; box-sizing: border-box; z-index: 999999;'
    )
    ieBusterApp.innerHTML =
      '<div style="width: 100%; max-width:866px; margin: 0 auto; padding: 16px 20px; background-color: #fff; box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 5px 0px; box-sizing: border-box; font-family: SegoeUI, Meiryo, sans-serif;">' +
      '<p style="display: block; float: left; width: 100%; max-width: 664px; margin: 0; color: #000; font-size: 14px; font-weight: 400; line-height: 1.5;">' +
      mainText +
      '</p>' +
      '<a style="display: block; float: right; height: 36px; width: 154px; padding: 0 16px; background-color: rgb(0, 120, 212); box-sizing: border-box; color: #fff; font-size: 12px; font-weight: 400; line-height: 36px; text-align: center; text-decoration: none; white-space: nowrap;" href="' +
      linkUrl +
      '" target="_blank" rel="noopener noreferrer">' +
      linkText +
      '</a>' +
      '<div style="clear: both;"></div>' +
      '</div>'
    document.body.appendChild(ieBusterApp)
  }

  if (window.addEventListener) {
    // for IE 9+
    window.addEventListener('DOMContentLoaded', ieBuster, false)
  } else {
    // for IE 8
    window.attachEvent('onload', ieBuster)
  }
}()
