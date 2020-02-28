# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.4.0](https://github.com/mselerin/ngx-security/compare/ngx-security@2.3.0...ngx-security@2.4.0) (2020-02-28)


### Features

* `NgxSecurityState.permissionsChecker` and `NgxSecurityService.hasPermission` accept a 2nd parameter of type `any` ([eb878fe](https://github.com/mselerin/ngx-security/commit/eb878fe2e13c6b968e91777564fcb29eeb0f8542))






# [2.3.0](https://github.com/mselerin/ngx-security/compare/ngx-security@2.2.0...ngx-security@2.3.0) (2018-12-17)


### Features

* update angular range (allow >=6.0.0) ([50c4ed0](https://github.com/mselerin/ngx-security/commit/50c4ed0))





# [2.2.0](https://github.com/mselerin/ngx-security/compare/ngx-security@2.1.0...ngx-security@2.2.0) (2018-12-03)


### Bug Fixes

* when no change in directive evaluation, do nothing instead of clearing component ([658fa43](https://github.com/mselerin/ngx-security/commit/658fa43))


### Features

* allow guard with `authenticated: false` ([0d7051a](https://github.com/mselerin/ngx-security/commit/0d7051a))






<a name="2.1.0"></a>
# [2.1.0](https://github.com/mselerin/ngx-security/compare/ngx-security@2.0.0...ngx-security@2.1.0) (2018-10-04)


### Features

* adding type CheckerResult ([cfd876e](https://github.com/mselerin/ngx-security/commit/cfd876e))
* Checker functions now return Observable<boolean> | boolean ([b63fad1](https://github.com/mselerin/ngx-security/commit/b63fad1))





<a name="2.0.0"></a>
# [2.0.0](https://github.com/mselerin/ngx-security/compare/ngx-security@1.0.0...ngx-security@2.0.0) (2018-10-04)


### Features

* add directives 'IsMemberOfAny' and 'HasAnyPermissions' ([169aaa4](https://github.com/mselerin/ngx-security/commit/169aaa4))
* add directives 'IsNotMemberOf' and 'HasNotPermissions' ([3363923](https://github.com/mselerin/ngx-security/commit/3363923))
* adding unit test ([197f34e](https://github.com/mselerin/ngx-security/commit/197f34e))
* removing singular hasRole/hasNotRole directive ([7b36ca3](https://github.com/mselerin/ngx-security/commit/7b36ca3))
* removing warning when no access ([e31f9aa](https://github.com/mselerin/ngx-security/commit/e31f9aa))
* security check with Observable<boolean> ([0772cb7](https://github.com/mselerin/ngx-security/commit/0772cb7))


### BREAKING CHANGES

* removing singular hasRole/hasNotRole directive
* all security check return `Observable<boolean>`





<a name="1.0.0"></a>
# [1.0.0](https://github.com/mselerin/ngx-security/compare/ngx-security@0.3.0...ngx-security@1.0.0) (2018-10-03)

**Note:** Version bump only for package ngx-security





<a name="0.3.0"></a>
# [0.3.0](https://github.com/mselerin/ngx-security/compare/ngx-security@0.2.0...ngx-security@0.3.0) (2018-10-03)


### Features

* adding authorizedHandler inside NgxSecurityGuard ([9bea295](https://github.com/mselerin/ngx-security/commit/9bea295))





<a name="0.2.0"></a>
# [0.2.0](https://github.com/mselerin/ngx-security/compare/ngx-security@0.1.0...ngx-security@0.2.0) (2018-10-03)


### Features

* Adding a NgxSecurityGuard ([e326426](https://github.com/mselerin/ngx-security/commit/e326426))





<a name="0.1.0"></a>
# [0.1.0](https://github.com/mselerin/ngx-security/compare/ngx-security@0.0.1...ngx-security@0.1.0) (2018-10-03)


### Features

* add groups in NgxSecurityState ([62187bb](https://github.com/mselerin/ngx-security/commit/62187bb))
* add NgxSecurityState ([df3f97c](https://github.com/mselerin/ngx-security/commit/df3f97c))
* else block for directives ([8e319d2](https://github.com/mselerin/ngx-security/commit/8e319d2))





<a name="0.0.1"></a>
## 0.0.1 (2018-10-03)
> Initial release

**Note:** Version bump only for package ngx-security
