const appStore = new Proxy({"src":"/netstation/_astro/app-store.t3tG4Jz3.png","width":300,"height":89,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/zhaokaien/workspace/netstation/src/assets/images/app-store.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/zhaokaien/workspace/netstation/src/assets/images/app-store.png");
							return target[name];
						}
					});

export { appStore as default };
