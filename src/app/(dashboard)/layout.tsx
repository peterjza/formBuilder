import Logo from '@/components/logo'
import ThemeSwitcher from '@/components/themeSwitcher'
import { UserButton } from '@clerk/nextjs'
import React, { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className='flex flex-col min-h-screen min-w-full max-h-screen bg-background'>
			<nav className='flex justify-between items-center border-b border-border h-[60px] px-4 py-2'>
				<Logo />
				<div className='flex gap-4 items-center'>
					<ThemeSwitcher />
					<UserButton afterSignOutUrl='/sign-in' />
				</div>
			</nav>
			<div className='flex w-full flex-grow'>{children}</div>
		</div>
	)
}
