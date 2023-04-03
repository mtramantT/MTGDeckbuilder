import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
}

const Container = styled.div``;

const Chatbox: React.FC<Props> = (props: Props) => {
    const [value, setValue] = useState<string>('');

    return (
        <Container>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log('Submitted Text')
            }}>
                <input placeholder='Start a chat here.' value={value} onChange={(event) => setValue(event.target.value)} />
                <input type='submit' />
            </form>
        </Container>
    );
}

export default Chatbox;
