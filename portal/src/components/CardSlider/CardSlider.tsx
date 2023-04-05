import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useApi from '../../hooks/useApi';
import useAxiosGet from '../../hooks/useAxiosGet';
import { Card } from '../../types';

interface Props {}

const URL = '/cards/random';
// const URL2 = 'http://localhost:8080/scryfall/cards/random';

const Container = styled.div``;

const CardSlider: React.FC<Props> = (props: Props) => {
   const [img, setImage] = useState('');

   //    const { data, loading, error } = useApi<Card>(URL2);
   const { response } = useAxiosGet({ url: URL });

   //    useEffect(() => {
   //       console.log('Component Data Now:', data?.image_uris.normal);
   //    }, [data]);
   return <Container>{<img src={response?.image_uris?.small} />}</Container>;
};

export default CardSlider;
