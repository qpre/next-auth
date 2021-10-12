/** Adds `signinUrl` and `callbackUrl` to each provider. */
export default function parseProviders ({ providers = [], baseUrl, basePath }) {
  return providers.map((provider) => ({
    callbackUrl: `${baseUrl}${basePath}/callback/${provider.id}`,
    ...provider,
    signinUrl: `${baseUrl}${basePath}/signin/${provider.id}`
  }))
}
