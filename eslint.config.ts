import { defineConfig } from 'eslint/config';
import ts from '@eslint/js';

export default defineConfig([
    {
        files: ['**/*.ts'],
        plugins: {
            ts,
        },
        extends: ['ts/recommended'],
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
        },
    },
]);
