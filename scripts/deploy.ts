import { ethers } from 'hardhat'

async function main() {
    const [deployer] = await ethers.getSigners()

    console.log('Contract is deploying...')
    const my404 = await ethers.deployContract('My404', [deployer.address])

    await my404.waitForDeployment()

    console.log(`My404 contract is deployed. Token address: ${my404.target}`)

    console.log('Deployer address is being whitelisted...')
    const tx = await my404.setWhitelist(deployer.address, true)
    await tx.wait()
    console.log(`Tx hash for whitelisting deployer address: ${tx.hash}`)
}

main().catch(error => {
    console.error(error)
    process.exitCode = 1
})