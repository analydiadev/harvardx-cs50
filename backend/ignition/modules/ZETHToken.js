const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ZETHTokenModule", (m) => {
    const initialSupply = 1000000n * 10n ** 18n;

    const token = m.contract("ZETHToken", [initialSupply]);

    return { token };
});
