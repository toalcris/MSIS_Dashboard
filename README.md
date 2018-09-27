

# Editor
We will use Atom in class, although you may use whichever editor you prefer. If you want to use vim, I won’t stop you.

## Useful Atom Packages
You may find the following Atom packages useful:

* **pigments** : I have the Marker Type set to `dot`.
* **atom-html-preview** : This may have been installed by default. If not, I recommend installing it. This packages shows a live preview of your HTML in a new tab.
* **less-than-slash** : Closes your current HTML tag when you type `</`. Use this *or* `autoclose-html`
* **autoclose-html** : Auto-closes your HTML tags when they’re created. Use this *or* `less-than-slash`.
* **color-picker** : Does what it says on the box. `⌘-shift-c` (Mac) or `ctrl-alt-c` (Windows) to bring up a color picker.

I also use the following:

* **minimap** : Put a "mini-map" of my code on the side. A feature of the SublimeText editor that I really like.

### Linters
A "Linter" is a static code analyzer, meaning it checks your code as best it can without running it. Linters are good for finding syntax errors (e.g., a missing bracket), but not capable of identifying run-time errors like trying to divide by zero or linking to a bad URL (continue to use the Console for that).

You may find the following linter packages userful:

* **linter-htmlhint** : Checks your HTML for correctness. To activate, go to the package settings, and make sure the 'Disable when no HTMLHint config is found' is _unchecked_.
* **linter-jshint** : Checks your Javascript for correctness. By default, it's a bit aggressive about telling you to include semi-colons, and does not allow some of the ES6 script idioms we use. To modify this behavior, see the `.jshintrc` config file in the repository. Only lints for correctness, not for style.
* **linter-eslint** : An optional alternative Javascript linter. By default, lints for style (e.g., spaces after commas, but not after a left paren) as well as correctness. Useful for enforcing a particular coding style, but requires a good bit of configuration. See its web page for more details.
* **linter-php** : Will only work if you have PHP already installed on your machine (Macs have PHP installed by default.) Lints your PHP code.

### Beautifiers
I may (after testing) recommend "beautifier". ("Linters" check for code correctness, while "beautifiers" fix your spacing in an opinionated way.)

### Built-in auto-indent

To have Atom automatically fix your indenting problems (common to new coders), select all with `cmd-a` (Mac) or `ctl-a` (Windows), the open the "Comman Palette", and type `Editor: Auto Indent`. Atom will correct the indentation of whatever you've selected.


# Version Control
We will use GitHub Desktop in class, although you may use whichever Git client you prefer—even the command line, if you’re into that sort of thing.

## Branches
This repository is split into multiple branches: _dev-red_, _dev-green_, and _dev-blue_; one for each section. I'll commit at the end of class each day, but there may be interim commits to prepare.

The _video_ branch shows the code as I described it in the videos.

The _master_ branch shows the "true" code.

All of these branches should be pretty similar, but may require some occasional merging to be wholly consistent.
