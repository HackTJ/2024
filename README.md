# HackTJ 11.0

[![lint](https://github.com/HackTJ/2024/workflows/lint/badge.svg)](https://github.com/HackTJ/2024/actions?query=workflow%3Alint)

The website for HackTJ 11.0.

## Setup

- `git clone git@github.com:HackTJ/2024.git hacktj-website`
- `pnpm install`

## Development

We use SvelteKit.

### Creating a New Event Website (2025)

```sh
mv hacktj-website hacktj-website-2024
git clone git@github.com:HackTJ/2024.git hacktj-website
cd hacktj-website
pnpm install
git reset "$(git commit-tree HEAD^"{tree}" -m "Push HackTJ 11.0 website")"  # squash all commits into 1
git remote set-url origin git@github.com:HackTJ/2025.git
git push
```

## Deployment

- `pnpm update --latest --interactive`
- `pnpm run format`
- `pnpm run lint`
- `pnpm run check`
- `pnpm run switch event`: switch to the event repository (configures the project so that builds are for `/2024`)
- `pnpm run switch homepage`: switch to the homepage repository (configures the project so that builds are for `/`)
- `pnpm run dev`: starts a development server on [port 3000](http://localhost:3000) and watches files for changes, compiling them on the fly
- `pnpm run build`: compiles all files to the `build/` directory but doesn't watch for changes or start a server
- `pnpm run preview`: starts a static server using the files in `build/`
- `pnpm run deploy event`: pushes to the `gh-pages` branch of this repository and deploys the site to <https://hacktj.org/2024>
- `pnpm run deploy homepage`: pushes to the [hacktj.github.io repo](https://github.com/HackTJ/hacktj.github.io) and deploys the site to <https://hacktj.org>
- `pnpm run deploy all`: shortcut for both `pnpm run deploy event` and `pnpm run deploy homepage`

In the case that one of the endpoints (/2024 or /) doesn't work but the other does, immediately set up a hardcoded redirect in the nonfunctional repository to redirect to the correct site.

To test a production build locally:

1.  `pnpm run switch homepage`
2.  `pnpm run build`
3.  `pnpm run preview`

To deploy a change:

1.  `pnpm run dev`
2.  make your changes; when you're done, close the development server
3.  `pnpm run format; pnpm run lint`
4.  `git add . && git commit`
5.  `pnpm run deploy all`
6.  `git push`

## Notes for next year

- create a new repository under the HackTJ organization for each event
- the `deploy event` script doesn't commit the source code to the repository's main branch, it only commits the built website
  - you should commit the source code to the `main` branch each time you deploy
    - before you commit to `main`, always make sure you run `pnpm run switch event`
      - if you need to, create a [pre-commit hook](https://git-scm.com/docs/githooks#_pre_commit) to automatically do this
- don't run `git pull` after `pnpm run switch homepage`
  - only pull when you're set up for the event repository
