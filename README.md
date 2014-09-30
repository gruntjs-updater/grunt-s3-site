grunt-s3-site
=============

Create and deploy static websites to Amazon S3.


## Getting Started

This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```
npm install grunt-s3-site --save-dev
```

Once the plsgin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```
grunt.loadNpmTasks('grunt-s3-site');
```


## The "s3site" task

### Overview

In your project's Gruntfile, add a section named `s3site` to the data object passed into `grunt.initConfig()`.

```
grunt.initConfig({
  s3site: {
    options: {
      // Task-specific options go here.
    },
    target: {
      // Target-specific options go here.
    }
  }
});
```

### Options

#### options.s3Config
s3 options object. All possible paramaters can be found in the [aws-sdk documentation](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property).

Type: `Object`

default: `{}`

#### options.name (required)
The name of your project. This will be used in the bucket name.

Type: `String`

#### options.env
The environment you would like to push to. This is added as a prefix to the bucket name.

Type: `String`

Default: `''`

#### options.prefix
A prefix to be used on the bucket name. Helpful for creating unique bucket names.

Type: `String`

default: `''`

#### options.srcPath
The source directory of the files you would like to push. Paths are relative to your `Gruntfile`.

Type: `String`

default: `us-east-1`

#### options.noCache
The following headers will be set on all specified files:

```
CacheControl: 'no-cache, no-store, must-revalidate',
Expires: (new Date()).toISOString()
```

Paths are relative to srcPath.

Type: `Array`

default: `us-east-1`


### Usage Examples

In this example, the `dev` target will upload files to a bucket named, `company-dev-my-awesome-static-site`, in the `us-east-1` region.

```
grunt.initConfig({
  s3site: {
    options: {
      name: 'my-awesome-static-site',
      prefix: 'company'
    },
    dev: {
      options: { env: 'dev' }
    }
  }
});
```


## License

The MIT License (MIT) Copyright (c) 2014 First Opinion

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.