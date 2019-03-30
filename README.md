# relay-compiler-language-js-flow-uncommented
Language plugin for Relay that generates the same output as the default compiler, but with Flow types as actual source and not inside comments. 

*Compability*: Relay `>=2.0.0`.

## Why?
Some IDEs/editors (like WebStorm/IDEA) do not understand Flow when it's inside comments (even though that's actually valid Flow). This thin language plugin solves that. 

## Usage
Install the package.

```
yarn add --dev relay-compiler-language-js-flow-uncommented
```

In your script that runs the compiler, add `--language js-flow-uncommented`. Example as a script in `package.json`:
```
...
"scripts": {
  ...
  "relay": "relay-compiler --src src --schema src/config/schema.graphql --language js-flow-uncommented"
  ...
}
...
```
