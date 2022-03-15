var Donation = artifacts.require("../src/contracts/Donation.sol")

module.exports = function(deployer) {
  deployer.deploy(Donation)
};
