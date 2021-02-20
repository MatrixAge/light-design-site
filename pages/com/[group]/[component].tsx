import { memo, useEffect } from 'react'
import { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import { connect } from 'react-redux'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import CodeBlock from '@/components/CodeBlock'
import request from '@/utils/use_request'
import { PackageJson } from 'types-package-json'
import { TDispatch } from '@/@types/global.interface'
import styles from './index.less'

interface IProps {
	dispatch: TDispatch
	component: string
	source: string
	package_json: PackageJson
}

const components = {
	code: CodeBlock
}

const Index: NextPage<IProps> = props => {
	const { dispatch, component, source, package_json } = props

	useEffect(
		() => {
			dispatch({
				type: 'app/updateState',
				payload: { package_json }
                  })
		},
		[ component ]
	)

	return (
		<div className={styles.markdown}>
			<Head>
				<title>Light Design - {component}</title>
				<meta name='description' content={`Light Design - ${component}组件`} />
			</Head>
			{hydrate(source, { components })}
		</div>
	)
}

export const getServerSideProps = async ({ query: { component } }: NextPageContext) => {
	const readme = await request.get(`/coms/getReadme/${component}`)
	const package_json = await request.get(`/coms/getPackageJson/${component}`)
	const source = await renderToString(readme, { components })

	const name = package_json.name.replace('@matrixage/lightd-', '')

	package_json.component = name.slice(0, 1).toUpperCase() + name.slice(1)

	return { props: { component, source, package_json } }
}

export default memo(connect()(Index))
