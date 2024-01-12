import { TLUiEventHandler, Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import { useCallback, useState } from 'react'

// There's a guide at the bottom of this file!

export default function UiEventsExample() {
	const [uiEvents, setUiEvents] = useState<string[]>([])

	const handleUiEvent = useCallback<TLUiEventHandler>((name, data) => {
		setUiEvents((events) => [`${name} ${JSON.stringify(data)}`, ...events])
	}, [])

	return (
		<div style={{ display: 'flex' }}>
			<div style={{ width: '60%', height: '100vh' }}>
				<Tldraw onUiEvent={handleUiEvent} />
			</div>
			<div
				style={{
					width: '40%',
					height: '100vh',
					padding: 8,
					background: '#eee',
					border: 'none',
					fontFamily: 'monospace',
					fontSize: 12,
					borderLeft: 'solid 2px #333',
					display: 'flex',
					flexDirection: 'column-reverse',
					overflow: 'auto',
				}}
			>
				{uiEvents.map((t, i) => (
					<div key={i}>{t}</div>
				))}
			</div>
		</div>
	)
}

/* 
This example shows how to listen to UI events. This includes includes things like selecting a tool,
grouping shapes, zooming etc. Events are included even if they are triggered by a keyboard shortcut.
However, interactions with the style panel are not included. For a full list of events and sources,
check out the TLUiEventSource and TLUiEventMap types.

We can pass a handler function to the onUiEvent prop of the Tldraw component. This handler function
will be called with the name of the event and the data associated with the event. We're going to 
display these events in a list on the right side of the screen.

To listen to canvas events or changes to the store, check out the canvas events and store events 
examples.

*/
