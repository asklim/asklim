# asklim
Andrei Klim`s Utils
1. weeks
2. http
3. logger

## install via [npm](npmjs.org)

```shell
npm install git+https://asklim@github.com/asklim/asklim.git
```
Installs the package from the hosted git provider, cloning it with git. For a full git remote url, only that URL will be attempted.

<protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish> | #semver:<semver>]

<protocol> is one of git, git+ssh, git+http, git+https, or git+file
 If #<commit-ish> is provided, it will be used to clone exactly that commit. 
 If the commit-ish has the format #semver:<semver>, <semver> can be any valid semver range or exact version, and npm will look for any tags or refs matching that range in the remote repository, much as it would for a registry dependency. If neither #<commit-ish> or #semver:<semver> is specified, then the default branch of the repository is used.

If the repository makes use of submodules, those submodules will be cloned as well.

If the package being installed contains a prepare script, its dependencies and devDependencies will be installed, and the prepare script will be run, before the package is packaged and installed.


## node.js using
```code
const weeks = require('asklim\weeks');
const {
  julianDay,
  week21c 
} = weeks;
```
## browser support

