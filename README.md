# Nuchain Wiki

The Nuchain Wiki is the central source of truth for Nuchain. It is a community-focused initiative
led by the Rantai Nusantara Foundation to keep an up-to-date resource on the best information for building on
Nuchain, learning about Nuchain, or maintaining a node on Nuchain.

## Contributing to Documentation

The Wiki is a community-focused initiative and we will review all pull-requests and issues created
in this repository. If you notice typos or grammatical errors, please feel free to directly create
pull requests with these corrections. Larger contributions may start as issues to test the waters on
the subject with the maintainers. It is generally preferable to create a pull request over an issue
to propose a change to the wiki content.

### Running Locally

Both the Nuchain Wiki and the Kusama Guide are built from the source files in this repository.
After cloning the source locally, you can start the websites with each of these respective commands
(ensure you run `yarn` at the root of the repository first to install dependencies):

```zsh
yarn nuchain:start
```

```bash
npx prettier --write ./docs/
```

### Automated Deployments

The wiki is automatically deployed to GitHub Pages via the CircleCI job on each new commit to the
master branch. The Kusama guide is also deployed to GitHub Pages (via a separate repository). Both
websites are also uploaded to IPFS via GitHub actions.

### Dynamic Value Inserts

This documentation sometimes makes references to on-chain values that may change over time. For
example, it might reference the current number of validators. A custom script exists to populate
these values post-build. To avoid conflicts in source files, the replacement is done on **built**
files, not the MD files. The value placeholders are defined in
[scripts/inject-dict.json](scripts/inject-dict.json). The placeholders should be included in text
surrounded by double curly braces, like so: `{{ num_validators }}`.

To use the replace script:

```bash
yarn nuchain:inject
```

This will read the dictionary and do the replacements for the respective website.

It is recommended to use the dry run option when adding new values and templates in, to make sure
they resolve to values first and don't throw query errors. To use dry run (no replace, just output
of templates and their resolved potential replacements), use the `--dry` or `-d` flag:

```bash
yarn nuchain:inject --dry
```

The script defaults to the websocket URL `wss://node-sg.nuchain.riset.tech/`. To change to another URL
or to connect to a local node, use the `--node/-n` flag:

```bash
yarn nuchain:inject -n ws://localhost:9944
```

> Note: make sure you're running an archive node if you're querying into the past!

See other available options by using the `help` command.

```bash
yarn nuchain:inject help
```

The templates to replace in the text take the following format:

```json
  {
    "tpl": "tip_deposit_amount",
    "default": { "nuchain": 1 },
    "path": "consts.treasury.tipReportDepositBase",
    "filters": ["humanReadableToken"]
  },
```

- `tpl` is the template you want replaced in the text, it should be placed between `{{ }}` curly
  braces.
- `default` is either a literal value or an object with chain-specific defaults.
- `path` is the query to run on the chain
- `computed` is a value that should be set to `true` is the value does not need a `path`. Computed
  properties are exported from `computed.js`.
- `filters` is an array of filters to apply on the value after it's been fetched (does not apply to
  defaults). Filters are defined in `applyFilters` or `inject.js`.

To test the injection, run `nuchain:build` then `nuchain:inject`. Inspect the built files in the corresponding `build` folder under `website`.

## License

The Nuchain Wiki is licensed under the GPL-3.0 free software license.
