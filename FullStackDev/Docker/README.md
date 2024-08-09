# Docker

## Dockerfile

The Dockerfile is used to build the image. We provide a Dockerfile in the project to make it easier to deploy the application.

Common commands in the Dockerfile:

- `FROM` specifies the base image, which usually is the runtime environment for the application.
- `COPY` copies specified files from the build context to the container.
- `CMD` runs the command when the container starts.

### How to use the Dockerfile

Suppose we have cloned the project from GitHub, and there is a Dockerfile in the project. We can use it to build the image and run the container.

1. Build the image:

```bash
docker build -t <image-name> .
```

2. Run the container:

```bash
docker run -d -p <host-port>:<container-port> <image-name>
```
