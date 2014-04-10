---
layout: notes
topic: wp
title: Updating Wordpress
---

# Updating Wordpress

With version 3.7, Wordpress will automatically update itself for minor patches. Major patches still require you to update manually.

## Precautions & consequences

The updated Wordpress might not be compatible with your theme or a plugin. So the website might "break". Make sure that you:

1. Backup your Wordpress so that you can undo changes.
2. Test the update on your local machine first

Wordpress has a simple "one-click" update. Follow the instructions in the codex:
http://codex.wordpress.org/Updating_WordPress

## Backup Wordpress

To backup the Wordpress website you need a copy of the Wordpress folder and a copy of the database. Follow the instructions in the codex:
http://codex.wordpress.org/WordPress_Backups

There are services and plugins that can help do automatic backups:

* http://vaultpress.com/
* http://wordpress.org/plugins/backwpup/
* https://wpremote.com/