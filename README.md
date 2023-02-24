[![GoDoc](https://godoc.org/github.com/abhishekkr/goshield?status.svg)](https://go.dev/doc/)
[![Go version](https://img.shields.io/badge/Go_version-18.2.0-blue.svg)]()
[![Type](https://img.shields.io/badge/Training_Website-blue.svg)]()

# Table of Contents

1.  [Project explanation](#project-explanation)
2. [Tree structure](#tree-structure)
3. [Build](#build)
4. [Run Local](#run-local)
5. [Using docker to run the project](#using-docker-to-mock-a-network-of-nodes)
   1. [Step 1 - Build docker image](#using-docker-to-mock-a-network-of-nodes-step1)
   1. [Step 1 - Run the docker image](#using-docker-to-mock-a-network-of-nodes-step2)

5. [Usage](#usage)


# Project explanation <a id="project-explanation"></a>

This is a simple kata website to allow training algorithms directly on my personnal website.

This website includes the following features:
- [X] Few basics exercices
- [X] Javascript langages
- [X] Unit test dirctly on UI
- [ ] More languages support
- [ ] More exercices
- [ ] TDD approch
- [ ] Unit Test from code

# Tree structure <a id="tree-structure"></a>

```sh
.
├── README.md
├── public
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
├── src
│   ├── App.tsx
│   ├── index.css
│   ├── Components
│   ├──    ├── CodeSection.tsx
│   ├──    ├── OutputSection.tsx
│   ├──    ├── SideSection.tsx
│   ├── Data
│   ├──    ├── Katas.ts
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json

```


# Build  <a id="build"></a>
To build the executable file run the following command:
```sh
npm run build
```

# Run local  <a id="run-local"></a>
To build the executable file run the following command:
```sh
npm run start
```


# Using docker to run the projec <a id="using-docker-to-mock-a-network-of-nodes"></a>
## Step 1 - Build docker image <a id="using-docker-to-mock-a-network-of-nodes-step2"></a>
Build the docker images.
```sh
docker-compose build
```

## Step 2 - Run docker containers <a id="using-docker-to-mock-a-network-of-nodes-step3"></a>
Run the docker containers.
```sh
docker-compose up
```




