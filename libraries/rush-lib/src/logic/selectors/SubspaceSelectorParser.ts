// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import type { RushConfiguration } from '../../api/RushConfiguration';
import type { RushConfigurationProject } from '../../api/RushConfigurationProject';
import type { Subspace } from '../../api/Subspace';
import { RushConstants } from '../RushConstants';
import type { IEvaluateSelectorOptions, ISelectorParser } from './ISelectorParser';

export class SubspaceSelectorParser implements ISelectorParser<RushConfigurationProject> {
  private readonly _rushConfiguration: RushConfiguration;

  public constructor(rushConfiguration: RushConfiguration) {
    this._rushConfiguration = rushConfiguration;
  }

  public async evaluateSelectorAsync({
    unscopedSelector
  }: IEvaluateSelectorOptions): Promise<Iterable<RushConfigurationProject>> {
    const subspace: Subspace = this._rushConfiguration.getSubspace(unscopedSelector);

    return subspace.getProjects();
  }

  public getCompletions(): Iterable<string> {
    // Tab completion is a performance sensitive operation, so avoid loading all the projects
    const subspaceNames: string[] = [];
    if (this._rushConfiguration.subspacesConfiguration) {
      subspaceNames.push(...this._rushConfiguration.subspacesConfiguration.subspaceNames);
    }
    if (!subspaceNames.indexOf(RushConstants.defaultSubspaceName)) {
      subspaceNames.push(RushConstants.defaultSubspaceName);
    }
    return subspaceNames;
  }
}
