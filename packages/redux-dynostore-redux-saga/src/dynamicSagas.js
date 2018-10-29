/**
 * Copyright 2018, IOOF Holdings Limited.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import flattenSagas from './flattenSagas'

const dynamicSagasEnhancer = sagaMiddleware => createHandlers => (store, ...params) => {
  const dynamicSagas = {}

  const runSagas = sagas => {
    const flattenedSagas = flattenSagas(sagas)
    Object.keys(flattenedSagas)
      .filter(key => !dynamicSagas[key])
      .forEach(key => (dynamicSagas[key] = sagaMiddleware.run(flattenedSagas[key])))
  }

  const cancelSagas = identifiers => {
    identifiers.filter(identifier => dynamicSagas[identifier]).forEach(identifier => {
      const runningSaga = dynamicSagas[identifier]
      delete dynamicSagas[identifier]
      runningSaga.cancel()
    })
  }

  const handlers = createHandlers(store, ...params)

  return {
    ...handlers,
    runSagas,
    cancelSagas
  }
}

export default dynamicSagasEnhancer
