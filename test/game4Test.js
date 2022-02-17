const { assert } = require("chai");

describe("Game4", function() {
  it("should be a winner", async function() {
    const Game = await ethers.getContractFactory("Game4");
    const game = await Game.deploy();
    await game.deployed();

    // nested mappings are rough :}
    const signer = ethers.provider.getSigner(1);
    const address1 = signer.getAddress();
    await game.connect(signer).write(address1);
    await game.connect(signer).win(address1);

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
