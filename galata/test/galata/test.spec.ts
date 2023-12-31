// Copyright (c) Jupyter Development Team.
// Copyright (c) Bloomberg Finance LP.
// Distributed under the terms of the Modified BSD License.

import { expect, test } from '@jupyterlab/galata';

test('should display the launcher', async ({ page }) => {
  await expect(page.launcher).toBeVisible();
});
