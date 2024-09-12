const _default = new Proxy({"src":"/netstation/_astro/default.CczmzLWf.png","width":2560,"height":1440,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/zhaokaien/workspace/netstation/src/assets/images/default.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/zhaokaien/workspace/netstation/src/assets/images/default.png");
							return target[name];
						}
					});

export { _default as default };
