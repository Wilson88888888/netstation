declare const AGENTS: readonly ["npm", "yarn", "yarn@berry", "pnpm", "pnpm@6", "bun"];
type Agent = typeof AGENTS[number];
declare const LOCKS: Record<string, Agent>;
declare const COMMANDS: {
    npm: {
        agent: string;
        run: (args: string[]) => string;
        install: string;
        frozen: string;
        global: string;
        add: string;
        upgrade: string;
        'upgrade-interactive': null;
        execute: string;
        uninstall: string;
        global_uninstall: string;
    };
    yarn: {
        agent: string;
        run: string;
        install: string;
        frozen: string;
        global: string;
        add: string;
        upgrade: string;
        'upgrade-interactive': string;
        execute: string;
        uninstall: string;
        global_uninstall: string;
    };
    'yarn@berry': {
        frozen: string;
        upgrade: string;
        'upgrade-interactive': string;
        execute: string;
        global: string;
        global_uninstall: string;
        agent: string;
        run: string;
        install: string;
        add: string;
        uninstall: string;
    };
    pnpm: {
        agent: string;
        run: string;
        install: string;
        frozen: string;
        global: string;
        add: string;
        upgrade: string;
        'upgrade-interactive': string;
        execute: string;
        uninstall: string;
        global_uninstall: string;
    };
    'pnpm@6': {
        run: (args: string[]) => string;
        agent: string;
        install: string;
        frozen: string;
        global: string;
        add: string;
        upgrade: string;
        'upgrade-interactive': string;
        execute: string;
        uninstall: string;
        global_uninstall: string;
    };
    bun: {
        agent: string;
        run: string;
        install: string;
        frozen: string;
        global: string;
        add: string;
        upgrade: string;
        'upgrade-interactive': string;
        execute: string;
        uninstall: string;
        global_uninstall: string;
    };
};
type Command = keyof typeof COMMANDS.npm;
declare const INSTALL_PAGE: Record<Agent, string>;

export { AGENTS, type Agent, COMMANDS, type Command, INSTALL_PAGE, LOCKS };
