import React from 'react'
import SidebarBtnElements from './sidebarBtnElements'
import { FormElements } from './formElements'

export default function FormElementsSidebar() {
	return (
		<div>
			Elements
			<SidebarBtnElements formElement={FormElements.TextField} />
		</div>
	)
}
