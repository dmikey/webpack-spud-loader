# kraken-properties-loader
--------------------------

install

```bash
npm -i webpack-kraken-properties-loader
```

usage

```javascript
module.exports = {
    module: {
      rules: [{
        test: /\.properties$/,
        use: [
          'json-loader',
          'kraken-properties-loader'
        ]
      }]
    }
}

```

## what it does

transforms kraken properties files into json strings, use other webpack loaders to transform or dynamically load things like locale.

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