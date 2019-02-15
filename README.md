_🚨 This method is no longer recommended, please use [tag parameters](https://markojs.com/docs/syntax/#parameters) instead. 🚨_ 

Marko Sample - scoped-variables
===============================

In this sample app we create a custom tag with the following usage:

```xml
<date-now var="now">
    The current time is $now.time.
    The current date is $now.dayOfWeek, $now.month $now.dayOfMonth, $now.year
</date-now>
```

The `<date-now>` custom tag introduces a scoped variable by declaring the `vars` property in the [taglib/date-now/marko-tag.json](./taglib/date-now/marko-tag.json) file as shown below:

```json
{
    "renderer": "./renderer",
    "@var": "identifier",
    "vars": [
        {
            "name-from-attribute": "var"
        }
    ]
}
```

The renderer for the `<date-now>` tag provides the value of the variable when invoking the `renderBody(out, var1, var2)` function as shown below:

```javscript
var now = {
    time: ...,
    dayOfWeek: ...,
    ...
};

renderBody(out, now);
```
