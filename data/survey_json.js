export const json = {
	pages: [
		{
			name: 'data1',
			elements: [
				{
					name: 'level',
					type: 'radiogroup',
					title: {
						default: 'level?',
					},
					choices: [
						{
							text: {
								default: '0',
							},
							value: '0',
						},
						{
							text: {
								default:
									'1',
							},
							value: '1',
						},
						{
							text: {
								default:
									'2',
							},
							value: '2',
						},
						{
							text: {
								default:
									'3',
							},
							value: '3',
						},
					],
					isRequired: true,
				},
			],
			description: {
				default: 'Answer a few questions.\n',
			},
		},
		{
			name: 'data2',
			elements: [
				{
					name: 'age',
					type: 'rating',
					title: {
						default: 'How old are you?',
					},
					rateMax: 14,
					rateCount: 14,
					isRequired: true,
					rateValues: [
						{
							text: {
								default: '3 or less',
							},
							value: '3 or less',
						},
						'4',
						'5',
						'6',
						'7',
						'8',
						'9',
						'10',
						'11',
						'12',
						'13',
						'14',
						'15',
						{
							text: {
								default: '16 or more',
							},
							value: '16 or more',
						},
					],
					displayMode: 'buttons',
					autoGenerate: false,
				},
				{
					name: 'name',
					type: 'text',
					title: {
						default: "Your name",
					},
					isRequired: true,
				},
			],
		},
		{
			name: 'experience',
			elements: [
				{
					name: 'onlineExperience',
					type: 'radiogroup',
					title: {
						default:
							'Question?',
					},
					choices: [
						{
							text: {
								default: 'answer 1',
							},
							value: 'answer 1',
						},
						{
							text: {

								default: 'answer 2',
							},
							value: 'answer 2',
						},
					],
					isRequired: true,
				},
			],
		},
		{
			name: 'choose',
			elements: [
				{
					name: 'lang',
					type: 'radiogroup',
					title: {
						default: 'Language?',
					},
					choices: [
						'English',
						'Deutsch',
						'Español',
						'Français',
						'Italiano',
						'Nederlands',
						'Polski',
						'Português',
						'Русский',
						'Українська',
					],
					otherText: {
						default: 'Other language',
					},
					isRequired: true,
					showOtherItem: true,
					otherPlaceholder: {
						default: 'Specify which',
					},
				},
			],
		},
		{
			name: 'select',
			elements: [
				{
					name: 'selection',
					type: 'radiogroup',
					title: {
						default: 'This is the last page',
					},
					choices: [
						{
							text: {
								default:
									'Oh',
							},
							value: 'Oh',
						},
						{
							text: {
								default:
									'Noooooooo',
							},
							value: 'Noooooooo',
						},
					],
				},
			],
		},
	],
	widthMode: 'static',
	completeText: { default: 'Continue' },
	logoPosition: 'right',
	pageNextText: { default: 'Next' },
	completedHtml: '',
	showCompletePage: false,
};
