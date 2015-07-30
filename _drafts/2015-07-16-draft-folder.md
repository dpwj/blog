---
layout: blog
date: 2015-07-16
title: Draft folder
categories: Jekyll
---


<div class="message">
Hello, draft folder. Why do you exist? This article is showing up on the main page and will have all of this information in it. I wonder why someone would want to have a draft instead of a post? 
</div>


I just found out how drafts are supposed to work. 
Drafts are posts without a date. They’re posts you’re still working on and don’t want to publish yet. To get up and running with drafts, create a _drafts folder in your site’s root (as described in the site structure section) and create your first draft:

To preview your site with drafts, simply run jekyll serve or jekyll build with the --drafts switch. Each will be assigned the value modification time of the draft file for its date, and thus you will see currently edited drafts as the latest posts.