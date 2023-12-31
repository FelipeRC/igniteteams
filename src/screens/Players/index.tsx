import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Header"
import { Highlight } from "@components/Highlight"
import { ButtonIcon } from "@components/ButtonIcon"
import { Input } from "@components/Input"
import { Filter } from "@components/Filter"
import { PlayerCard } from "@components/PlayerCard";
import { EmptyList } from "@components/EmptyList";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles"
import { Button } from "@components/Button";

type Props = {

}

export function Players({ }: Props) {

    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState([]);

    return (
        <Container>
            <Header showBackButton />

            <Highlight
                title="Nome da turma"
                subtitle="adicione a galera e separe os times"
            />

            <Form>
                <Input
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                />

                <ButtonIcon icon="add" />
            </Form>

            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={team === item}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />
                <NumberOfPlayers>{players.length}</NumberOfPlayers>
            </HeaderList>

            <FlatList
                keyExtractor={(item) => item}
                data={players}
                renderItem={({ item }) => (
                    <PlayerCard name={item} onRemove={() => { }} />
                )}
                ListEmptyComponent={() => (
                    <EmptyList message="Não há pessoas neste time" />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
            />
            <Button title="Remover turma" type="SECUNDARY" />
        </Container>
    )
}