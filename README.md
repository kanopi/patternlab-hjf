# Pattern Lab for HJF

The Pattern Lab for HJF gives developers a clean and stable Drupal library used by the site's theme. Development is maintianed outside the theme for a fully decoupled approach.

## Prerequistes 

- [`composer`](https://getcomposer.org)

## Setup

Clone the repo

```
git clone git@github.com:kanopi/patternlab-hjf.git
cd patternlab-hjf
```

## First Time Install

1. Run `npm install` or `yarn install` to install dependencies.
1. Run `cd patternlab`.
1. Run `composer install` to install dependencies.
1. If prompted, answer as follows:

- the path ./source/_twig-components/filters already exists. `M`

- the path ./source/_twig-components/functions already exists. `M`

- the path ./source/_twig-components/tags already exists. `M`

- the path ./public/ already exists. `M`

- update the config option styleguideKitPath `n`


1. Commit new files generated.

## Gulp Tasks

Run `gulp` to watch and compile the CSS and JS needed for PatternLab. This will start BrowserSync as well. 
Ignore the following:

- Copy the following snippet into your website ...

## Helpful Commands

These are some helpful commands you can use on the command line for working with Pattern Lab from within the `patternlab` directory.

### One line start

This will compile PL and watch for changes while running the local server:

    `composer start` or `php core/console --server --quiet & php core/console --watch`

### Generate Pattern Lab

To generate the front-end for Pattern Lab type:

    `composer generate` or `php core/console --generate`

### Start a server to view Pattern Lab

You can use PHP's built-in web server to review your Pattern Lab project in a browser. In a separate window type:

    `composer server` or `php core/console --server`

Then open [http://localhost:8080](http://localhost:8080) in your browser.

### Updating Pattern Lab

	`composer update`
	