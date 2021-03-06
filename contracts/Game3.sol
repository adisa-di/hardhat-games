//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;
import "hardhat/console.sol";

contract Game3 {
    bool public isWon;
    mapping(address => uint256) balances;

    function buy() external payable {
        balances[msg.sender] += msg.value;
    }

    function win(
        address addr1,
        address addr2,
        address addr3
    ) external {
        require(balances[addr3] > 0, "Address 3 is greater than or equal to 0");
        require(
            balances[addr2] > balances[addr1],
            "Address 2 is less than or equal to address 1"
        );
        require(
            balances[addr1] > balances[addr3],
            "Address 3 is less than or equal to address 3"
        );

        isWon = true;
    }
}
