# Color Me Angular
Learn ngRoute with colors.

This lab uses [148 Built-In CSS Color Names](https://gist.github.com/nathanallen/22dbc2c0dbe1b6d2d197721ec9eeab61#file-color_names-json).

> <img width="400" alt="screenshot of colors/index buttons" src="https://cloud.githubusercontent.com/assets/1489337/14548062/6a58ba58-0268-11e6-8556-ac822ab64dae.png">

## The Challenge
Your goal is to create an angular front-end that displays information about css colors:

* When a user navigates to `/`, they should see a list of all 148 css colors.
* When a user navigates to `/colors/33`, they should see information about hexadecimal color `#6495ED`, otherwise known as "CornFlowerBlue" (see the hard-coded list of `COLORS` in `app.js`).
* Color names should link to their approriate `show` page.
* The `colors/show.html` should have a convenient "Back" button that returns the user to the home page.

> <img width="200" alt="screenshot of colors#show" src="https://cloud.githubusercontent.com/assets/1489337/14548061/68072488-0268-11e6-8b50-1dc36103144a.png">

## Setup
Clone this repo.

We will be using a new development server called `budo` for this project.

```bash
npm install -g budo
```

Run the server:
```
budo -P --host=localhost --open
```


## Bonuses
**Semantic Routes**: Create separate routes for `/color/name/:name` and `color/hex/:hex`, but have them display the same show page.
    * Since there are only 148 named colors in css, and 16^6 (16,777,216) hex colors, not every show page can have a color name in the title. Can you accomodate for this?

<details>
<summary>Hint: *How do you find the color by `name` or `hex`?* (Click Here)</summary>
```js
var target_number = 2;
var foundObj = [{num:7},{num:2}].find(function(o){
    return o.num === target_number;
})
```
</details>

**Color Picker**: Add an HTML5 colorpicker (input type 'color') to `colors/show.html`.
   * Set its initial value to the hex value of the show page.
   * Stretch: when the user changes their color selection, redirect them to the appropriate show page.

**Sort the Colors**: Add a [filter](https://docs.angularjs.org/api/ng/filter/filter) to `colors/index.html` that sorts colors by name, alphabetically.
   * Next, add a button to the index page that, on click...
      * sorts colors by `name`.
      * sorts colors by `hex`.
      * Stretchy Stretch: toggles between ascending/descending sort order with every click.

## Resources
* Built-in Directives
   - [`ngRepeat`](https://docs.angularjs.org/api/ng/directive/ngRepeat)
      + [`filter`](https://docs.angularjs.org/api/ng/filter/filter)
   - [`ngHref`](https://docs.angularjs.org/api/ng/directive/ngHref)
   - [`ngStyle`](https://docs.angularjs.org/api/ng/directive/ngStyle)
* [`ngRoute` Module](https://docs.angularjs.org/api/ngRoute)
   - [`ngView` directive](https://docs.angularjs.org/api/ngRoute/directive/ngView)
   - [`$routeProvider`](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider)
   - [`$locationProvider`](https://docs.angularjs.org/api/ng/provider/$locationProvider)
   - [`$routeParams`](https://docs.angularjs.org/api/ngRoute/service/$routeParams)
