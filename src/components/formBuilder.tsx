'use client'

import { Form } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import SaveFormBtn from './saveFormBtn'
import PreviewDialogBtn from './previewDialogBtn'
import PublishFormBtn from './publishFormBtn'
import Designer from './designer'
import {
	DndContext,
	DragOverlay,
	MouseSensor,
	TouchSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core'
import DragOverlayWrapper from './dragOverlayWrapper'
import useDesigner from './hooks/useDesigner'
import { ImSpinner2 } from 'react-icons/im'

export default function FormBuilder({ form }: { form: Form }) {
	const { setElements } = useDesigner()
	// const [isReady, setIsReady] = useState<boolean>(false)

	const mouseSensor = useSensor(MouseSensor, {
		activationConstraint: {
			distance: 10,
		},
	})

	const touchSensor = useSensor(TouchSensor, {
		activationConstraint: {
			delay: 300,
			tolerance: 5,
		},
	})

	const sensors = useSensors(mouseSensor, touchSensor)

	useEffect(() => {
		// if(isRe)
		const elements = JSON.parse(form.content)
		setElements(elements)
		// setIsReady(true)
	}, [form, setElements])

	// if (!isReady) {
	// 	return (
	// 		<div className='flex flex-col items-center justify-center w-full h-full'>
	// 			<ImSpinner2 className='animate-spin h-12 w-12' />
	// 		</div>
	// 	)
	// }

	return (
		<DndContext sensors={sensors}>
			<main className='flex flex-col w-full'>
				<nav className='flex justify-between border-b-2 p-4 gap-3 items-center'>
					<h2 className='truncate font-medium'>
						<span className='text-muted-foreground mr-2'>
							Form:
						</span>
						{form.name}
					</h2>
					<div className='flex items-center gap-2'>
						<PreviewDialogBtn />
						{!form.published && (
							<>
								<SaveFormBtn id={form.id} />
								<PublishFormBtn />
							</>
						)}
					</div>
				</nav>
				<div className='flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent bg-[url(/bg.svg)] dark:bg-[url(/bg-dark.svg)]'>
					<Designer />
				</div>
			</main>
			<DragOverlayWrapper />
		</DndContext>
	)
}
