# Ninja - Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

##[3.0.8] - 2016-03-01
### Changed
- Corrects styling for Firefox.
- Tightens up style API.
- Brings dependencies up to date.

##[3.0.7] - 2015-12-13
### Added
- Repeat icon.

### Changed
- Maximizes icons within their bounding box.
- Balances relative size of all icons for balance.

##[3.0.6] - 2015-12-09
### Changed
- Makes inline-style-prefixer, lodash and react required dependencies.

##[3.0.5] - 2015-12-09
### Added
- Prefixed styles applied to arc for improved browser compatibility.

### Changed
- Updates examples with redux for data.
- Adds browser prefixed styles to examples.

##[3.0.4] - 2015-12-07
### Changed
- Improved scaling of examples with mobile devices.
- Removes onClick delegation. Instead, wrap the arc in your own container.
- Dependency updates.

### Fixed
- Corrects vertical alignment of children within an arc.

##[3.0.3] - 2015-12-03
### Changed
- lodash replaces "native" Object.assign for unviversal arc styles.
- Updates development dependencies.

##[3.0.2] - 2015-11-30
### Changed
- Updates development dependencies.

### Fixed
- Corrects accuracy of Arc's length.

##[3.0.1] - 2015-11-28
### Fixed
- Enables Arc's stroke-dashoffset property via the is property (was CSS).

##[3.0.0] - 2015-11-27
### Added
- Arc passes onClick prop to it's outermost DOM element.
- Arc now remains crisp any resolution and zoom level.

### Changed
- Each icon now directly exported, extended from a common component.
- Single icon component with graphic prop deprecated.

### Fixed
- Arc radius calculation corrected to avoid cropping at the boundary.

##[2.0.1] - 2015-11-25
### Fixed
- Corrects require paths for icon graphics.

## [2.0.0] - 2015-11-24
### Added
- Arc.
- Icons.
- Build infrastructure.
- Examples for arc and icon components.
- Test infrastructure (without tests).

### Changed
- Complete rewrite as React components with no backwards compatibility.

## 1.1.24 - 2012-09-30
### Added
- Previous jQuery plugin.

[Unreleased]: https://github.com/ninja/ninja/compare/develop...3.0.8
[3.0.8]: https://github.com/ninja/ninja/compare/3.0.8...3.0.7
[3.0.7]: https://github.com/ninja/ninja/compare/3.0.7...3.0.6
[3.0.6]: https://github.com/ninja/ninja/compare/3.0.6...3.0.5
[3.0.5]: https://github.com/ninja/ninja/compare/3.0.5...3.0.4
[3.0.4]: https://github.com/ninja/ninja/compare/3.0.4...3.0.3
[3.0.3]: https://github.com/ninja/ninja/compare/3.0.3...3.0.2
[3.0.2]: https://github.com/ninja/ninja/compare/3.0.2...3.0.1
[3.0.1]: https://github.com/ninja/ninja/compare/3.0.1...3.0.0
[3.0.0]: https://github.com/ninja/ninja/compare/3.0.0...2.0.1
[2.0.1]: https://github.com/ninja/ninja/compare/2.0.1...2.0.0
[2.0.0]: https://github.com/ninja/ninja/compare/2.0.0
