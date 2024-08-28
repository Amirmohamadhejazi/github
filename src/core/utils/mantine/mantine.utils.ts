import rtlPlugin from 'stylis-plugin-rtl'

const rtlCacheObject = {
    key: 'mantine-rtl',
    stylisPlugins: [rtlPlugin],
}

const ltrCacheObject = {
    key: 'mantine-ltr',
}

export { rtlCacheObject, ltrCacheObject }
