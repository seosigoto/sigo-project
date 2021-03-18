// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import {IERC20} from '../../../dependencies/openzeppelin/contracts/IERC20.sol';
import {DataTypes} from '../types/DataTypes.sol';

/**
 * @title Helpers library
 * @author Wevest
 */
library Helpers {
  /**
   * @dev Fetches the user cdebt balances
   * @param user The user address
   * @param reserve The reserve data object
   * @return The debt balance
   **/
  function getUserCurrentDebt(address user, DataTypes.ReserveData storage reserve)
    internal
    view
    returns (uint256)
  {
    return IERC20(reserve.debtTokenAddress).balanceOf(user);
  }

  function getUserCurrentDebtMemory(address user, DataTypes.ReserveData memory reserve)
    internal
    view
    returns (uint256)
  {
    return IERC20(reserve.debtTokenAddress).balanceOf(user);
  }
}
