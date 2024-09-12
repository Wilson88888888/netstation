const id = "astrowind-template-in-depth.mdx";
						const collection = "post";
						const slug = "astrowind-template-in-depth";
						const body = "\nimport DListItem from '~/components/ui/DListItem.astro';\nimport ToggleTheme from '~/components/common/ToggleTheme.astro';\n\n## Overview\n\nIt can be a somewhat daunting task trying to get a handle on _AstroWind_ internals, and particularly various points of usage.\n\nThis page outlines and clarifies some of the techniques found in _AstroWind_. Use it as a guide for further modification, or an instructional for techniques to use in your own endeavors.\n\n## Styling\n\nAs the name suggests, _AstroWind_ relies on _TailWind_ for styling. Furthermore, _AstroWind_ defines custom low level style settings which are incorporated into _TailWind_ seamlessly, and which provides consistency for higher level styling constructs, as well as enabling dark mode.\n\nThe styling mechanism consists of the following files (all paths are prefixed with `/src/` ):\n\n<DListItem dt=\"assets/styles/tailwind.css\">\n  This file is essentially an extension of _TailWind's_ base.css. High-level component styles are defined here. Note\n  also styling on elements selected by 'attribute' selectors at the bottom of the files, particularly those selected by\n  'data' attributes.\n</DListItem>\n<DListItem dt=\"components/CustomStyles.astro\">\n  Defines custom colors and fonts. For these to take effect in the 'base.css' file, they need to be loaded in the html\n  header section. See next.\n</DListItem>\n<DListItem dt=\"layouts/Layout.astro\">\n  This layout is used for all of the pages rendered by _AstroWind_. The contents of _tailwind.css_ and\n  _CustomStyles.astro_ component, described above, is injected into the html header.\n</DListItem>\n\n### Dark Mode\n\n_Dark Mode_ is triggered by the little 'sunlight' icon:<ToggleTheme/>in the page header. It is defined in the _components/common/ToggleTheme.astro_, but the event is attached and the action defined in _components/common/BasicScripts.astro_ in the following snippet:\n\n```javascript\nattachEvent('[data-aw-toggle-color-scheme]', 'click', function () {\n  if (defaultTheme.endsWith(':only')) {\n    return;\n  }\n  document.documentElement.classList.toggle('dark');\n  localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';\n});\n```\n\nNote that this is a client event. _BasicScripts.astro_ defines several other client-side functionality as well as this one.\n\n## Advanced Slot Usage\n\n_slots_ are part of the component implementation, which is a common concept among many frameworks, including _Astrojs_. The typical slot definition in a component looks like this:\n\n```astro\n---\n// (file: MyComponent.astro)\nconst { title } = Astro.props;\nexport interface Props {\n  title: string;\n}\n---\n\n<div>\n  <h2>{title}</h2>\n  <slot />\n  <!-- slot contents injected here -->\n  <div></div>\n</div>\n```\n\nAnd in usage elsewhere:\n\n```astro\nimport MyComponent from \"~/components/MyComponent\"; ...\n<MyComponent someArg=\"A Slot example\">\n  <p>This content will be displayed in the slot</p>\n</MyComponent>\n```\n\n### Alternate usage\n\nThere's another way we can use slots, useful particularly when a component can have markdown content is as follows (study carefully...):\n\n```astro\n---\n// (file: MyComponent.astro)\n\nconst { title } = Astro.props;\nexport interface Props {\n  title: string;\n}\nconst content: string = await Astro.props.render('default');\n---\n\n// renders the html to the 'content' variable\n<div>\n  <h2>{title}</h2>\n  <div set:html={content} />\n  <!-- slot contents injected here -->\n  <div></div>\n</div>\n```\n\nWhoa!! What's going on here?\n\nNotice there is no slot definition in the html portion of the component. Instead, what we do is have _Astro_ render the slot content (here, the 'default' content, but you can also render named slots) into a variable, and then use that content in a _div_ (for instance).\n\nSo, if the usage is in a markdown file, like so:\n\n```mdx\nimport MyComponent from '../../components/MyComponent';\n\n# Using the above component in a .mdx file (that can take components)\n\n{' '}\n\n<MyComponent title=\"This is a slot implementor\">### Here is some markdown content - With a bullet item.</MyComponent>\n```\n\n_MyComponent_ renders the markdown to html and then injects it into the div.\n\nThis actually has a big advantage -- consider that with the normal usage you don't have access to the slot contents: _Astro_ just plops the content into the _&lt;slot/&gt;_ tag. Using this method, however, allows you to access the content and further manipulate it before it gets inserted into the html.\n\nThis allows a great deal of flexibility in component design.\n\n### Yet Another Step\n\nNow, we get to the techniques used in _AstroWind_, we'll use the _pages/index.astro_ file to illustrate.\n\nYou'll note that the index file imports a lot of components, each one roughly analagous to a panel in the index page. Each of these components, in turn, is instantiated sequentially throughout the page. But, you'll notice that some of them use this kind of construct (we'll use the last section, _CallToAction_, as it is most illustrative of the technique):\n\n```astro\n<CallToAction\n  callToAction={{\n    text: 'Get template',\n    href: 'https://github.com/onwidget/astrowind',\n    icon: 'tabler:download',\n  }}\n>\n  <Fragment slot=\"title\">\n    Astro + <br class=\"block sm:hidden\" /><span class=\"sm:whitespace-nowrap\">Tailwind CSS</span>\n  </Fragment>\n\n  <Fragment slot=\"subtitle\">\n    Be very surprised by these huge fake numbers you are seeing on this page. <br class=\"hidden md:inline\" />Don't waste\n    more time! :P\n  </Fragment>\n</CallToAction>\n```\n\nSome things to note, here:\n\n<DListItem dt=\"The <em>callToAction</em> argument\">\n  This argument is actually being passed a javascript object -- not a string. (However, in the TS definition, it could\n  be a string...)\n</DListItem>\n<DListItem dt=\"There are several <em>Fragment</em> children\">\n  Furthermore, these &lt;Fragment/&gt; elements each have a _slot=\"(value)\"_ specifier.\n</DListItem>\n\nThe latter seems odd, because &lt;Fragment/&gt; is a built-in component over which you have no control, and doesn't have a provision for rendering slots, <em>per se</em>.\n\nThe answer lies in a paragraph in the _Astro_ docs, slots section, which states:\n\n> Use a `slot=\"my-slot\"` attribute on the child element that you want to pass through to a matching slot `name=\"my-slot\" />` placeholder in your component.\n\nThat's pretty concise and a bit of a head-scratcher to read, but basically what it says is that:\n\n1. Given a component that defines a slot:\n1. you can reference a slot from a child element of that component and,\n1. provide content to the parent component's slot from the child by naming the slot in the child with a `slot=\"<slot-name>\"` property assignment, where the _slot-name_ is the parent's slot.\n\nSo, in the example above, the _CallToAction_ component defines the _subtitle_ slot, and the following _&lt;Fragment slot=\"subtitle\"&gt;_ populates the slot with the following content:\n\n```astro\n<Fragment slot=\"subtitle\">\n  Be very surprised by these huge fake numbers you are seeing on this page. <br class=\"hidden md:inline\" />Don't waste\n  more time! :P\n</Fragment>\n```\n\nAnd, the _CallToAction_ component defines and renders it thusly:\n\n```astro\n---\n//...\nconst { subtitle = await Astro.slots.render('subtitle') } = Astro.props;\n---\n\n//...\n{subtitle && <p class=\"text-xl text-muted dark:text-slate-400\" set:html={subtitle} />}\n//...\n```\n\nThere's a lot to wrap your head around, here.\n\nNotice first that _subtitle_ is defined as a prop/argument, but it's being processed as a slot. Interestingly, prop args and slots seem to be somewhat interchangeable: if the subtitle was just a string, it would simply take that assignment. The main difference is that if you render them independently, you have to call the render with an _await_ modifier.\n";
						const data = {publishDate:new Date(1689552000000),title:"AstroWind template in depth",excerpt:"While easy to get started, Astrowind is quite complex internally.  This page provides documentation on some of the more intricate parts.",image:"https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1651&q=80",category:"Documentation",tags:["astro","tailwind css","front-end"],metadata:{canonical:"https://astrowind.vercel.app/astrowind-template-in-depth"}};
						const _internal = {
							type: 'content',
							filePath: "/Users/zhaokaien/workspace/netstation/src/content/post/astrowind-template-in-depth.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
