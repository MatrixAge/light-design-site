import { memo } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import { IAppModelState } from '@/models/app'
import Com from './com'

const Index: any = (props: any) => {
	const { dispatch, children, fold_menu, fold_simulator, package_json } = props
	const router = useRouter()
	const { pathname } = router
	const pathnames = pathname.split('/')

	const props_com = {
		fold_menu,
		fold_simulator,
		package_json,
		changeMenuFoldStatus () {
			dispatch({
				type: 'app/updateState',
				payload: { fold_menu: !fold_menu }
			})
		},
		changeSimulatorFoldStatus () {
			dispatch({
				type: 'app/updateState',
				payload: { fold_simulator: !fold_simulator }
			})
		}
	}

	if (pathnames[1] === 'com') {
		if (pathnames.length === 2 || pathnames.length === 3 || pathnames.length === 4) {
			return <Com {...props_com}>{children}</Com>
		} else {
			router.push('/404')
		}
	}

	return children
}

const getData = ({
	app: { fold_menu, fold_simulator, package_json }
}: {
	app: IAppModelState
}) => ({
	fold_menu,
	fold_simulator,
	package_json
})

export default memo(connect(getData)(Index))
