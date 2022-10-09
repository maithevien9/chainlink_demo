//SPDX-License-Identifier: UNLICENSED
pragma solidity <=0.8.10;
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/access/Ownable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

import "hardhat/console.sol";

contract Enouvo is ERC20("Enouvo", "ENV"), ERC20Burnable, Ownable {
    uint256 private cap = 50_000_000_000 * 10**uint256(18);
    AggregatorV3Interface internal priceFeed;

    constructor() {
        console.log("owner: %s maxcap: %s", msg.sender, cap);
        priceFeed = AggregatorV3Interface(
            0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
        );
    }

    function getLatestPrice() public view returns (int) {
        (
            ,
            /*uint80 roundID*/
            int price, /*uint startedAt*/ /*uint timeStamp*/ /*uint80 answeredInRound*/
            ,
            ,

        ) = priceFeed.latestRoundData();
        return price;
    }
}
