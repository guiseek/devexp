#!/bin/bash

set -e

echo 'Check Format'
npx nx format:write

echo 'Lint Workspace & Code'
npx nx affected:lint

echo 'Unit Tests'
npx nx affected:test

echo 'Build affected projects'
npx nx affected:build --prod
