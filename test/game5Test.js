const { assert } = require("chai");

// keep creating wallet using random eths
// use that wallet when conditions are met
// ethers.createRandom wallet -> while 

describe("Game5", function() {
  it("should be a winner", async function() {
    const Game = await ethers.getContractFactory("Game5");
    const game = await Game.deploy();
    await game.deployed();

    // good luck
    const threshold = 0x00FfFFfFFFfFFFFFfFfFfffFFFfffFfFffFfFFFf;
    let randomWallet = ethers.Wallet.createRandom();

    // so much work
    while (await randomWallet.getAddress() >= threshold) {
      randomWallet = ethers.Wallet.createRandom();
    }

    const signer = ethers.provider.getSigner(0);
    const wallet = randomWallet.connect(ethers.provider);

    await signer.sendTransaction({
      to: wallet.address,
      value: ethers.utils.parseUnits("1", "ether"),
    });

    await game.connect(wallet).win();

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
