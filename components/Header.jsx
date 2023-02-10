import { ConnectButton } from "@rainbow-me/rainbowkit"
import React from "react"

const Header = () => {
  return (
    <div className="py-4 px-8 bg-black flex justify-between items-center">
      <a className="text-3xl text-white" href="/">
        Mudra
      </a>
      <ConnectButton />
    </div>
  )
}

export default Header
