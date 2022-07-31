## Template PWA for Svelte + TypeScript + Vite + Sass

Derived from [this repository](https://git.lgjt.xyz/Johannes/lgjt.xyz/src/branch/master).

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

If you want to build for production, do `npm run build` and `npm run preview` to start the preview server.

Service workers (necessary for the PWA) require that you use HTTPS (unless on localhost).

**Sass highlighting**

This won't work automatically in VSC.
The Svelte extension is a prerequisite.
To fix this,

1. Go to your settings

2. Search for "svelte"

3. Locate "Svelte > Language-server:"

4. Enter the path to your Node binary

This path can be found by running `which node`.
