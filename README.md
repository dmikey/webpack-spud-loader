# webpack-spud-loader
--------------------------

install

```bash
npm -i webpack-spud-loader
```

usage

```javascript
module.exports = {
    module: {
      rules: [{
        test: /\.properties$/,
        use: [
          'json-loader',
          'webpack-spud-loader'
        ]
      }]
    }
}

```

## what it does

transforms kraken properties files into json strings using `spud`, use other webpack loaders to transform or dynamically load things like locale.

### input

`strings.properties`

```
baz=foo
foo.bar=foo
```

### output

```javascript
  module.exports = {"baz":"foo","foo":{"bar":"foo"}}
```