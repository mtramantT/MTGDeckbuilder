import React from 'react';
import styled from 'styled-components';
import useApi from '../../hooks/useApi';
import { Card } from '../../types';

interface Props { }

const URL = '/api/scryfall/cards/random';

const Container = styled.div``;

const CardSlider: React.FC<Props> = (props: Props) => {
    const { data, loading, error } = useApi<Card>(URL);
    return (
        <Container>
            <img src={data?.image_uris.normal} />
        </Container>
    );
}

export default CardSlider;
