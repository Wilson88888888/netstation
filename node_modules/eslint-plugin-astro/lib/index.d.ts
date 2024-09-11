import * as eslint from 'eslint';

declare const _default: {
    meta: {
        name: string;
        version: string;
    };
    environments: {
        astro: {
            globals: {
                Astro: boolean;
                Fragment: boolean;
            };
        };
    };
    rules: {
        [key: string]: eslint.Rule.RuleModule;
    };
    processors: {
        ".astro": eslint.Linter.Processor<string | eslint.Linter.ProcessorFile>;
        astro: eslint.Linter.Processor<string | eslint.Linter.ProcessorFile>;
        "client-side-ts": eslint.Linter.Processor<string | eslint.Linter.ProcessorFile>;
    };
} & {
    configs: {
        base: eslint.Linter.Config<eslint.Linter.RulesRecord, eslint.Linter.RulesRecord>;
        recommended: eslint.Linter.Config<eslint.Linter.RulesRecord, eslint.Linter.RulesRecord>;
        all: eslint.Linter.Config<eslint.Linter.RulesRecord, eslint.Linter.RulesRecord>;
        "jsx-a11y-strict": eslint.Linter.Config<eslint.Linter.RulesRecord, eslint.Linter.RulesRecord>;
        "jsx-a11y-recommended": eslint.Linter.Config<eslint.Linter.RulesRecord, eslint.Linter.RulesRecord>;
        "flat/base": eslint.Linter.FlatConfig<eslint.Linter.RulesRecord>[];
        "flat/recommended": eslint.Linter.FlatConfig<eslint.Linter.RulesRecord>[];
        "flat/all": eslint.Linter.FlatConfig<eslint.Linter.RulesRecord>[];
        "flat/jsx-a11y-strict": eslint.Linter.FlatConfig<eslint.Linter.RulesRecord>[];
        "flat/jsx-a11y-recommended": eslint.Linter.FlatConfig<eslint.Linter.RulesRecord>[];
    };
};

export { _default as default };
