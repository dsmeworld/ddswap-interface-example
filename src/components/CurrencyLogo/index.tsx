import { Currency, ETHER, Token } from 'ddswap-sdk'
import React, { useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'

import EthereumLogo from '../../assets/images/ethereum-logo.png'
import ConfluxLogo from '../../assets/images/conflux-logo.png'
import HtLogo from '../../assets/images/ht-logo.png'
import BnbLogo from '../../assets/images/bnb-logo.png'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import Logo from '../Logo'

const getTokenLogoURL = (address: string) =>
  `https://assets.dsme.world/token-info/heco/${address}/logo.png`
  /*`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${address}/logo.png`*/

const StyledEthereumLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`


const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  
  //获取chainid
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)
  const {chainId} = useWeb3React()

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return []

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, getTokenLogoURL(currency.address)]
      }

      return [getTokenLogoURL(currency.address)]
    }
    return []
  }, [currency, uriLocations])

  //通过chainid切换coinlogo
  if (currency === ETHER) {
    if(chainId === 1 ){
      return <StyledEthereumLogo src={EthereumLogo} size={size} style={style} />
    }else if(chainId === 1030 ){
      return <StyledEthereumLogo src={ConfluxLogo} size={size} style={style} />
    }else if(chainId === 128 ){
      return <StyledEthereumLogo src={HtLogo} size={size} style={style} />
    }else if(chainId === 56){
      return <StyledEthereumLogo src={BnbLogo} size={size} style={style} />
    }
    else{
      return <StyledEthereumLogo src={EthereumLogo} size={size} style={style} />
    }
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}
