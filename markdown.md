* * *

# How to Create Snippets for VS Code

[![Go to the profile of christoffer noring](https://cdn-images-1.medium.com/fit/c/100/100/0*xfH8DWS3kuvEgj3l.jpg)](https://levelup.gitconnected.com/@noringc?source=post_header_lockup)[christoffer noring](https://levelup.gitconnected.com/@noringc)<span class="followState js-followState" data-user-id="f0ec78893773"><button class="button button--smallest u-noUserSelect button--withChrome u-baseColor--buttonNormal button--withHover button--unblock js-unblockButton u-marginLeft10 u-xs-hide" data-action="sign-up-prompt" data-sign-in-action="toggle-block-user" data-requires-token="true" data-redirect="https://levelup.gitconnected.com/snippets-for-vs-code-6b36fc4ef11f" data-action-source="post_header_lockup"><span class="button-label  button-defaultState">Blocked</span><span class="button-label button-hoverState">Unblock</span></button><button class="button button--primary button--smallest button--dark u-noUserSelect button--withChrome u-accentColor--buttonDark button--follow js-followButton u-marginLeft10 u-xs-hide" data-action="sign-up-prompt" data-sign-in-action="toggle-subscribe-user" data-requires-token="true" data-redirect="https://medium.com/_/subscribe/user/f0ec78893773" data-action-source="post_header_lockup-f0ec78893773-------------------------follow_byline"><span class="button-label  button-defaultState js-buttonLabel">Follow</span><span class="button-label button-activeState">Following</span></button></span><time datetime="2018-12-30T10:51:38.067Z">Dec 30, 2018</time><span class="middotDivider u-fontSize12"></span><span class="readingTime" title="8 min read"></span>

This article is geared towards _JavaScript_ and _TypeScript_ so the code examples will be written in mentioned languages. However, the article describes snippet creation in a general way so even if _JavaScript_ or _TypeScript_ isn’t your choice of language, you will hopefully understand how snippet creation works.

Let’s talk about snippets generally. Snippets are pieces of code that we can use again and again in our code projects. They are usually created to speed up our development work so we can spend time-solving interesting problems instead of typing the __same old__ __boring code__.

We tend to use snippets someone else has created for us, or we create our own that fits our coding style.

So what is a good candidate to make a snippet out of:

*   **Class**, oftentimes we create plenty of classes in our solution
*   **If**, we tend to write quite a lot of _if_, _if else_, _if else if, else_ statements
*   **Try-catch**, this is also a very common construct. Wouldn’t it be nice if there was a snippet that supported _try, catch_ and _finally_?
*   **Function**, we create a ton of functions, so some kind of default function with a suitable number of parameters make sense
*   **Logging to the screen**, we tend to do this quite often for the purpose of debugging
*   **Your choice**, you might have things you do quite often that’s unique to you — such as reading to/from a file, accessing a database, etc. What snippets you exactly need, is up to you.

#### Snippets in VS Code

You can create two types of snippets in VS Code:

*   **global**, selectable for all languages
*   **language specific**, only possible to use for a specific language

#### Creating our first snippet

It’s almost dead easy to create a snippet so let’s do just that and explain concepts as we encounter them.

The first thing we need to do is to select the type of snippet we are about to create. Our choice here is _global_ vs _language specific_. Let’s head to the menu and create a _global_ snippet. Select the following from the menu _Code /Preference / User Snippets_

![](https://cdn-images-1.medium.com/max/1600/1*yHJ_JQVFSypxtvN-kuGIrA.png)

the above image shows you several things of interest:

*   **Existing snippets**, if you have created snippets before, you can select those and have them loaded into VS code
*   **New Global Snippets file…**, selecting this option creates a global file
*   **Language-specific files**, selecting any of these options will create a specific snippet file for that language. Select _HTML, for example,_ will create a _html.json_ file

As we stated earlier, let’s create a global file so select _New Global Snippets file_, the second option from the top. Let’s name it _global_, the result show looks like this:

![](https://cdn-images-1.medium.com/max/1600/1*VDtaVPpXFVIaRoBpbm3iiw.png)

It is worth noting that _global_ named itself _global.code-snippets_. This file has placed itself in _/Users/<username>/Library/Application Support/Code/User/snippets_, if you want to look at it afterward. We also see that everything is commented out. There is some code of interest though starting with _Example:_ so let’s uncomment that and have a closer look, so it looks like this:

![](https://cdn-images-1.medium.com/max/1600/1*3INTGAmqO8tKyvtZ4LZaEA.png)

Now we are looking at a working example. It is worth noting how everything starts with curly braces, and the reason for that is that we are simply editing a JSON file. The next point of interest is _Print to console._ This one is simply the name of the snippet. _Print to console_ defines an object within curly braces so let’s break down each property that it defines:

*   **scope**, this is the supported languages for this snippet, supported languages here are _javascript_ and _typescript_. Each supported language is separated by a comma. This means that if we are inside of _.js_ or _.ts_ file this snippet would be possible to use
*   **prefix**, this is what you need to type in the code window for the snippet to appear. In our case we need to type _log_
*   **body**, this is your snippet. The data type is an array and to support a snippet that has several rows we need to add a new entry to the array. We will go through that later
*   **description**, this is a field that lets us describe a little more what is going on
*   _$1_, _$2_, this is simply where the cursor ends up when you hit the tab button

**Trying out our snippet**

We stated the _log_ is what we need to type to activate the snippet and we need to be inside of a file ending in _.js_ or _.ts_ . So let’s try it:

![](https://cdn-images-1.medium.com/max/1600/1*ucScX7njOB-SYhnQA0LIdA.png)

We can see above that we are being presented with a list as we type _log_. The first item in the list our snippet. You can see that “_Print to console”_ is what we wrote as the snippet name and “_Log output to console”_ is our description field. We hit the `return` key at this point and we end up with this:

![](https://cdn-images-1.medium.com/max/1600/1*lYlnfjd_GqFsz4UwRuhPhQ.png)

We see our snippet is being placed in the code window, and we also see how our cursor ended up inside of the _log()_ method. Why is that? That has a very simple explanation, that’s where we said the cursor should end up, we decided upon that here:

![](https://cdn-images-1.medium.com/max/1600/1*W-9SE3m0iFgfl4LnhcX3Ww.png)

So you see where we place _$1_ or _$2_ matters and correctly placed it can really speed up the developer experience.

#### Second snippet — a class

Ok so know we understand what goes on and the inner anatomy of a snippet. Let’s create our own snippet from scratch now:

![](https://cdn-images-1.medium.com/max/1600/1*7BHoMGoVTQgeF5WOhqQ8CQ.png)

We have a second snippet and a multiline snippet at that. Let’s break it down.

We support _javascript_ and _typescript_ by defining that as values to _scope_.

We say to activate the snippet by typing `_cc_`.

Then we come to the actual snippet — our _body_ property, which is multiline. We can see that it is multiline as we have added x number of items in our _body_ array property. The value of the body is simply what we can expect from a class definition, with a constructor. We have added some interesting bits in here though `_$1_` and `_$2_`. Those are placed after the _class_ property and inside the constructor. This is done on purpose so the user has to type as little as possible. The first thing you typically do as a developer is to name the class and secondly is to add some initialization code to your constructor. If that isn’t the order in which you do things, feel free to move _$1_ and _$2_ to where they make sense to you.

**Trying out our snippet**

![](https://cdn-images-1.medium.com/max/1600/1*fzBwfnFyU2ifuj8FytDAHw.png)

Now we type `_cc_` to activate our snippet and we are faced with its name and description. Upon selecting the snippet by hitting the _return_ key we end up with this:

![](https://cdn-images-1.medium.com/max/1600/1*C2W2obJsZm76m22N4CP2Hg.png)

As you can see above, we are shown where the cursor first ends up _$1_, which is right after _class_. Hitting the _tab_ key again we should go to the point of the second tab step, _$2_. So let’s see what that looks like:

![](https://cdn-images-1.medium.com/max/1600/1*Kx2d8v4wpbCJX4xOQ4QcOg.png)

We see we have given the class a name _Test_ and we have hit _tab_ and we ended up with our cursor inside of the constructor function.

#### Language-specific snippet

This time we want to create a language-specific snippet. So we go to the menu and select Code / Preferences / User Snippets. Once there we select _Typescript_ and we are presented with the following result:

![](https://cdn-images-1.medium.com/max/1600/1*WwkULsG4IEE_nnHUCCxPiQ.png)

We can see that the filename is a bit different this time around. Instead of being called _<something>.code-snippets_ it’s called _typescript.json_. So when the file ends with _.json_ we are dealing with a language specific file. It is worth highlighting that a language-specific snippet will only work for that snippet, so if we are inside of a file ending in _.js_ typing our _prefix_ value won’t activate it. Instead, we need to be inside of _.ts_ file for our snippet to be selectable.

Ok let’s think for a second, we have chosen Typescript as the specific language, so that’s all we are going to support. This means we are about to create snippets using language specific constructs like types and other things. Let’s recreate our class snippet but for Typescript:

![](https://cdn-images-1.medium.com/max/1600/1*CR6ykn8l1EWB-8idZmN2eA.png)

Above we have created a snippet that utilizes some language-specific features from Typescript such as `_enum_` and `_private_` used within a constructor (that creates the backing fields for us ) and to top it off we have created a pretty cool theme, a fantasy environment. So if you had some game creation in mind, this snippet is ready for action :)

**Trying out our snippet**

Ok, so we set the _prefix_ to _tc_ so we need to type _tc_ to activate our snippet. The end result looks like the following:

![](https://cdn-images-1.medium.com/max/1600/1*WBWR8PAWGKEiVyZDXOdWyg.png)

Above we can see our enum construct `_CharacterTypes_` is being created and also our class snippet. We can now easily create an object from this by for example typing:

<pre name="a691" id="a691" class="graf graf--pre graf-after--p">const hero = new Hero(‘hero’, 18, CharacterTypes.Healer);</pre>

That’s it. Creating a language-specific snippet wasn’t all that different. The filename ending looks different and it is targeted to a specific language.

#### Summary

We have looked at snippets in VS Code. We have shown how we can

*   **load** existing snippets into our coding environment
*   **create** a global / language specific snippet
*   **explain** the different parts that make up a snippet and how to use it

It is my hope that you with this new found knowledge are able to both use existing snippets, create your own snippets, and boost your productivity.

**Further reading**

We’ve only scratched a bit on what is possible to do with a snippet but it should be enough to get you going. For more information on snippets please have a look at the official docs [Snippet creation](https://code.visualstudio.com/docs/editor/userdefinedsnippets?WT.mc_id=vscode-medium-chnoring#_creating-your-own-snippets).

#### **What’s next?**

In the next article, we will cover how we can package our snippet into an extension and tell the world about it. Why not let the whole code community benefit from your creation. :) Stay tuned.

* * *

[![](https://cdn-images-1.medium.com/max/1600/1*S9uYu-fFL3hIQLGVu0o-EQ.png)](https://levelup.gitconnected.com/)[**Learn JavaScript - Best JavaScript Tutorials (2019) | gitconnected**
_The top 64 JavaScript tutorials. Courses are submitted and voted on by developers, enabling you find the best…_gitconnected.com](https://gitconnected.com/learn/javascript "https://gitconnected.com/learn/javascript")[](https://gitconnected.com/learn/javascript)