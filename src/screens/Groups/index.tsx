import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { EmptyList } from "@components/EmptyList";
import { Button } from "@components/Button";

export function Groups() {

  const [groups, setGroups] = useState([]);


  return (
    <Container>
      <Header showBackButton />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        keyExtractor={(item) => item}
        data={groups}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
        contentContainerStyle={!groups.length && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList message="Que tal cadastrar a primeira turma?" />
        )}
        showsVerticalScrollIndicator={false}
      />
      <Button title="Criar nova turma" type="SECUNDARY" />
    </Container>
  );
}
