## Template for Svelte + TypeScript + Vite + Sass

I nabbed this off of [git.lgjt.xyz](https://git.lgjt.xyz/Johannes/lgjt.xyz/src/branch/master), so props to him for making it in the first place.
Go take a look there to know why this is structured as it is.
Anyhow, I adopted it and made some changes.

**Prerequisites**

- Node [[link]](https://nodejs.org/en/) (personally I use [nvm](https://github.com/nvm-sh/nvm))

- Yarn [[link]](https://classic.yarnpkg.com/en/docs/install)

- Any code editor. VSC recommended.

**Setup**

1. Clone the repo

2. Enter its directory

3. Run `yarn` or alternatively `npm exec yarn`

4. Run `npm run dev`

That's it.

**Sass highlighting**

This won't work automatically in VSC.
The Svelte extension is a prerequisite.
To fix this,

1. Go to your settings

2. Search for "svelte"

3. Locate "Svelte > Language-server:"

4. Enter the path to your Node binary

This path can be found by running `which node`.