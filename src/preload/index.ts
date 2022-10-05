// import path from 'path';
// import fs from 'fs/promises';

// const tempPath = path.join(utools.getPath('temp'), 'utools.tinypng');

// 这个方法会自动挂在到window.preload,在vue中可以这么调用 window.preload.handlePluginEnter
export async function handlePluginEnter({ code, type, payload }: Parameters<Parameters<typeof utools.onPluginEnter>[0]>[0]) {

  window.dispatchEvent(new CustomEvent('tool-plugin-enter', {  detail:"some thing"}));
}

utools.onPluginEnter(handlePluginEnter);
  
utools.onPluginOut(async exit => {});
