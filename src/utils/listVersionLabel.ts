import { Version } from 'ddswap-token-lists'

export default function listVersionLabel(version: Version): string {
  return `v${version.major}.${version.minor}.${version.patch}`
}
