'use client'

import { Form } from '@prisma/client'
import React from 'react'
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

export default function FormBuilder({ form }: { form: Form }) {
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
								<SaveFormBtn />
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