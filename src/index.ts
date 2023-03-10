import { join } from 'path'
import { createUnplugin } from 'unplugin'
import type { Options } from './types'

const regPx = /-([1-9]\d*.\d*|0.\d*[1-9]\d)px|([1-9]\d*.\d*|0.\d*[1-9]\d)px|\dpx/g

export default createUnplugin<Options | undefined>(options => ({
  name: 'unplugin-px-to-rem',
  enforce: 'pre',
  transformInclude(id) {
    id = join(id, '')
    const cwd = process.cwd()
    const endWith = options?.endWith || []
    const dirs = options?.dirs || []
    const exclude = options?.exclude || []

    if (dirs.length !== 0 && !dirs.some(dir => id.includes(join(cwd, dir))))
      return false

    if (exclude.length !== 0 && exclude.some(dir => id.includes(join(cwd, dir))))
      return false

    return endWith.length === 0 ? true : endWith.some(item => id.includes(item))
  },
  transform(code) {
    return code.replaceAll(regPx, (item) => {
      const number: number = parseFloat(item)
      if (typeof number === 'number')
        return `${(number / (options?.fontBase || 16)).toFixed(4)}rem`

      return item
    })
  },
}))
