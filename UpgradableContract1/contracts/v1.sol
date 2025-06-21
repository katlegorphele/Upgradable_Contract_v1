// SPDX-License-Identifier: SEE LICENSE IN LICENSE
// this is the implementation contract!
pragma solidity ^0.8.10;

contract v1 {
    uint public val;

    function initialise (uint _val) external {
        val =_val;
    }
}