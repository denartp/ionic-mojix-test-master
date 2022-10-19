# Mojix Coding challenge

An Ionic 6 hybrid mobile application for multiple level recruiting

## Development Requirements

* [NodeJS](https://nodejs.org/en)
* [Ionic](http://ionicframework.com/docs/cli)
* [Cordova](http://cordova.apache.org)
* [Android Studio](https://developer.android.com/studio/index.html)
* [Android SDK](https://developer.android.com/sdk/download.html)
* [XCode](https://itunes.apple.com/us/app/xcode/id497799835)

## Installation

### Node Version Manager

In order to prevent system wide permission errors while using Node (avoiding the installation of packages and running node scripts with **sudo** for Unix based systems), NVM installs Node in a different directory other than the system's, and it allows to switch from version to version in a painless way.

#### Unix (macOS/Linux)

You can read the full instructions on the [NVM repository](https://github.com/creationix/nvm) or you can run the following cURL script directly on the unix terminal:

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.39.1/install.sh | bash
```

#### Windows

Follow the Node Version Manager for Windows [installation instructions](https://github.com/coreybutler/nvm-windows)
or download the [installer](https://github.com/coreybutler/nvm-windows/releases/download/1.1.6/nvm-setup.zip) directly, decompress the ZIP file and run **nvm-setup.exe**.

### NodeJS

Once you have NVM installed check it's accessible in your $PATH or as an alias in your terminal:

```bash
nvm ls
```

It should output the versions of node you have installed:
For this project the target version is 16.10.0

```bash
nvm install 16.10.0
```

Once installed you can optionally set it up as the default node version with the next command:

```bash
nvm alias default 16.10.0
```

Once you're done with the installation verify with the commands:

```bash
node -v && npm -v
```

It should output:
 
```bash 
v16.10.0
7.24.0
```

### Ionic CLI

To install the Ionic CLI, you will need to first install node and npm. Once installed, run the following command to get the latest version of the Ionic CLI:

```bash
npm install -g ionic@latest
```


### Dependencies

To install the application dependencies you need to run the following command:

```bash
npm install
```

To run the app

 ```bash
 ionic serve
 ```
