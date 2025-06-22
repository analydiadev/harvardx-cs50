const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ZETHToken", function () {
  let Token, token, owner, addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const initialSupply = ethers.parseEther("1000");
    Token = await ethers.getContractFactory("ZETHToken");
    token = await Token.deploy(initialSupply);
    await token.waitForDeployment();
  });

  it("should deploy with initial supply to deployer", async function () {
    const ownerBalance = await token.balanceOf(owner.address);
    expect(ownerBalance).to.equal(ethers.parseEther("1000"));
  });

  it("should allow anyone to mint tokens", async function () {
    const mintAmount = ethers.parseEther("50");
    await token.connect(addr1).mint(mintAmount);
    const addr1Balance = await token.balanceOf(addr1.address);
    expect(addr1Balance).to.equal(mintAmount);
  });
});
