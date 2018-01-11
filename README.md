# Dixie Project

*This name is intented to change...*

## Install

### 1. [Homebrew](https://brew.sh/index_fr.html)

#### Check if [Homebrew](https://brew.sh/index_fr.html) is installed:

```bash
brew
```

The output should start with something like:

```bash
Example usage:
  brew search [TEXT|/REGEX/]
...
```

#### If not, install [Homebrew](https://brew.sh/index_fr.html):

*It could take a while...*

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### 2. [rbenv](https://github.com/rbenv/rbenv)

#### Check if [rbenv](https://github.com/rbenv/rbenv) is installed:

```bash
rbenv
```

The output should start with something like:

```bash
rbenv 1.0.0
Usage: rbenv <command> [<args>]
...
```

#### If not, install [rbenv](https://github.com/rbenv/rbenv):

*It could take a while...*

```bash
brew install rbenv
```

Then type the following command and follow the instructions:

```bash
rbenv init
```

### 3. [Ruby](http://ruby-doc.org)

#### Check if you have the proper [Ruby](http://ruby-doc.org) version installed:

```bash
rbenv versions
```

A list of ruby version will be printed, check if it contains `2.4.2`.

#### If not, install the proper [Ruby](http://ruby-doc.org) version:

*It could take a while...*

```bash
rbenv install 2.4.2
```

### 4. Clone the [repository](https://www.github.com/juliendargelos/dixie-project)

```bash
git clone git@github.com:juliendargelos/dixie-project.git
```

Then go into the project directory, probably:

```
cd dixie-project
```

### 5. [Bundler](http://bundler.io)

#### Check if [Bundler](http://bundler.io) is installed:

```bash
bundle -v
```

The output should look like:

```bash
Bundler version 1.16.0.pre.3
```

#### If not, install [Bundler](http://bundler.io):

*It could take a while...*

```bash
gem install bundler
```

### 6. Install the project 

*It could take a while...*

```
bundle
```

## Usage

### Serve:

```bash
middleman
```

### Build:

```
middleman build
```

### Deploy:

```
middleman deploy
```

*Will be accessible from [juliendargelos.com/dixie-project](http://juliendargelos.com/dixie-project/)*
