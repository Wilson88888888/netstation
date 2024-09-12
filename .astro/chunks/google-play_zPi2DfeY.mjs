const googlePlay = new Proxy({"src":"/netstation/_astro/google-play.ISTMcpLO.png","width":300,"height":89,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/zhaokaien/workspace/netstation/src/assets/images/google-play.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/zhaokaien/workspace/netstation/src/assets/images/google-play.png");
							return target[name];
						}
					});

export { googlePlay as default };
