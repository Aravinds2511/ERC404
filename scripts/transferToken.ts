import { ethers } from 'hardhat'

async function main() {
    const toAddress = '0x2d303fEDa3042363BC52e486F974601856DF30d9'
    const contractAddress = '0x9Ef2dEA0069b01F0A5C62996ba2847142cAc8540'

    console.log('Sending My404 token...')
    const my404 = await ethers.getContractAt('My404', contractAddress)

    const tx = await my404.transfer(toAddress, ethers.parseEther('20'))
    tx.wait()
    console.log(`Tx hash for sending My404 token: ${tx.hash}`)
}

main().catch(error => {
    console.error(error)
    process.exitCode = 1
})