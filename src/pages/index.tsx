import { NextPage } from 'next';
import Link from 'next/link';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';

import { AppHeader } from '@/components';
import { boxStyled, spacingStyled } from '@/styles/shared/util.styles';

const IndexPage: NextPage = () => {
	return (
		<>
			<AppHeader
				rightElement={[
					<button key="copy" css={boxStyled} onClick={() => alert('copy :D')}>
						<AiOutlineShareAlt size={20} />
					</button>,
					<div key="spacing" css={spacingStyled()} />,
					<Link key="link" href={'/feedback'} css={boxStyled}>
						<VscFeedback size={20} />
					</Link>
				]}
			/>
		</>
	);
};

export default IndexPage;
