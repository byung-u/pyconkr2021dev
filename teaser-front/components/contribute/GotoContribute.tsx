import styled from '@emotion/styled';
import { ContentBackgroundBlock } from '../ContentBackground';
import Link from 'next/link';

export const GuideContributeBlock = styled.div`
    font-weight: 700;
    padding-top: 2rem;
    padding-bottom: 3rem;

    line-height: 3rem;

    h1 {
        font-size: 4rem;
        color: #F5DF4D;
    }
    h3 {
        font-size: 2rem;
        span {
            cursor: pointer;
        }
    }

    
    
    h4 {
        color: #939597;
    }

    @media (max-width: 1199px) {
        h1 {
        font-size: 3.5rem;
        }
        h3 {
            font-size: 1.75rem;
        }
    }
`;

function GotoContribute() {
    return (
        <ContentBackgroundBlock>
            <GuideContributeBlock>
                <h1>파이콘 한국 2021 기여하기</h1>
                <h3>
                    <span>
                        파이콘 한국 2021 CFP 신청이 마감되었습니다.
                    </span>
                </h3>
            </GuideContributeBlock>
        </ContentBackgroundBlock>

    )
}

export default GotoContribute;