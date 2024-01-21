import React from 'react'
import { Button } from './ui/button'
import { MdOutlinePublish } from 'react-icons/md'
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogTitle,
	AlertDialogTrigger,
} from './ui/alert-dialog'

export default function PublishFormBtn() {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button
					variant={'outline'}
					className='gap-2 text-white bg-gradient-to-r from-indigo-400 to-cyan-400'
				>
					<MdOutlinePublish className='h-6 w-6' />
					Publish
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogTitle>Are you sure</AlertDialogTitle>
				<AlertDialogDescription>
					This action cannot be undone After publishing you will not
					be able to edit this form <br />
					<br />
					<span className='font-medium'>
						By pulishing this form you will make it available to the
						public and you will be able to collect submissions
					</span>
				</AlertDialogDescription>
			</AlertDialogContent>
		</AlertDialog>
	)
}
