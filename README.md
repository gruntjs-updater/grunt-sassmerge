# grunt-sassmerge

> Merge SASS variables from multiple files into one file.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sassmerge --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sassmerge');
```

## The "sassmerge" task

_Run this task with the `grunt sassmerge` command._

### Overview
In your project's Gruntfile, add a section named `sassmerge` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  sassmerge: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

_(Nothing yet)_

### Usage Examples

```js
grunt.initConfig({
  sassmerge: {
    options: {},
    files: {
      'dest/dest.scss': ['src/file1.scss', 'src/file2.scss'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
