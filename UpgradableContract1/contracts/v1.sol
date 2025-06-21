// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.10;

contract v1 {
    uint public val;

    function initialise (uint _val) external {
        val =_val;
    }
}