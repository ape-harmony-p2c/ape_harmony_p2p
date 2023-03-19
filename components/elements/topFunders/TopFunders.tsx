import {
    Box,
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionIcon,
    AccordionPanel
} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import '@rainbow-me/rainbowkit/styles.css';
import { TopFundersBar } from '../topFundersBar';

export const TopFunders = () => {
    const router = useRouter()

    return (
        <>        
        <Accordion allowToggle w={['98%', null, null, '90%']}>
            <AccordionItem color='white' borderBottom={'1px solid #4E5D73'} borderColor='#4E5D73' rounded={'.25rem'}>
                <h2>
                <AccordionButton bgColor='#212C3B' rounded='.25rem'>
                    <Box as="span" flex='1' textAlign='left' fontSize={21} fontWeight='semibold'>
                    Top Funders
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <TopFundersBar />
                </AccordionPanel>
                <AccordionPanel pb={4}>
                <TopFundersBar />
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
        </>
    )

}
