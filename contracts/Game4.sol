//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;
import "hardhat/console.sol";

contract Game4 {
    bool public isWon;

    mapping(address => mapping(address => bool)) nested;

    // x -> msg.sender -> true
    function write(address x) external {
        nested[x][msg.sender] = true;
    }

    // msg.sender -> y -> true
    // address x and y are the same
    function win(address y) external {
        require(nested[msg.sender][y], "Nope. Try again!");
        isWon = true;
    }
}
