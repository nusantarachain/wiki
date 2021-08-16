---
id: browser-extension
title: Browser Extension
sidebar_label: Extension
---

A login is usually required to access a service/application, but the term login in the Web3 world is irrelevant. What is needed in Web3 for authentication and authorization is a cryptographic key instead of _user name_ and _password_ as in the centralized world.

Currently, the development of Web3 has not been supported by a native frontend in the browser, so that access to the Web3 network still requires tools. For example, on the Ethereum ecosystem there is the Metamask tool, on Polkadot there is the Polkadot JS app. The existence of this tools is to make it easier for users to access Web3. In the future, when all browsers (_browser_) already support Web3 then tools (_extension_) like this will no longer be needed, because they are available natively in the browser.

## Installing the extension

At the present until the majority of browsers support Web3, we need a tool to access the Nuchain network. This tool is a _browser extension_, which you can get at:

1. [Nuchain App for Chrome browser](https://chrome.google.com/webstore/detail/nuchain-app/hfcdboaniimgkememgmilhmnkdgggkne)
2. [Nuchain App for Firefox browser](https://addons.mozilla.org/en-US/firefox/addon/nuchain-app/)

Once installed in the browser, the Nuchain icon will appear as shown in the following image:

![Nuchain App web extension](/img/nuchain-app-web-extension1.png)

## Extension function

The function of this Nuchain App browser extension is to store a _private key_ and secure it offline in your browser with a password. Furthermore, when you access a website that supports Web3 this extension will be active and ask for your permission to authorize the necessary operations/transactions on the Nuchain network securely without needing to expose your private key.

This is more secure than you putting the private key into a 3rd party application. It is recommended not to save your key in 3rd party app.

## Create an account

Browser extensions can be used to create accounts. Basically, accounts in the Web3 are just asymmetric cryptographic key pairs, so this extension only generates random cryptographic keys. For more details, please read the section [Creating an account using a browser extension](account.md#using-browser-extension).