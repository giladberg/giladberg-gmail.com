import React, { Component } from 'react'
import NavList from './NavList'

export default class Navbar extends Component {
    state = { openMenu: '', scrolling: '', scrollingMode: true }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    changeScrollingMode = (status) => {
        this.setState({ scrollingMode: status })
    }

    handleScroll = (event) => {
        if (window.pageYOffset === 0) this.setState({ scrolling: '' })
        else if (!this.state.scrolling) this.setState({ scrolling: 'scrolling' })
       
    }
    openMenu = () => {
        let openMenu = this.state.openMenu ? '' : 'openMenu'
        this.setState({ openMenu })
    }
    render() {
        return (
            <nav className={`main-navbar flex ${this.state.scrolling}`}>
                <div onClick={this.openMenu} className={this.state.openMenu ? 'screen' : ''}></div>
                <NavList
                onOpenMenu={this.openMenu}
                    openMenu={this.state.openMenu}
                    closeMenue={this.openMenu} />
                <div className="humburger-bar icon-menu" onClick={this.openMenu}></div>
            </nav>
        )
    }
}
