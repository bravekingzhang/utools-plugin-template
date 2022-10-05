// import path from 'path';
// import fs from 'fs/promises';

// const tempPath = path.join(utools.getPath('temp'), 'utools.tinypng');

export async function handlePluginEnter({ code, type, payload }: Parameters<Parameters<typeof utools.onPluginEnter>[0]>[0]) {

  window.dispatchEvent(new CustomEvent('tool-plugin-enter', {  detail:"some thing"}));
}

utools.onPluginEnter(handlePluginEnter);

utools.onPluginOut(async exit => {});
