import { Box, Blockquote, Title, Grid } from '@mantine/core';
import { IconAward, IconTrophy, IconPaw } from '@tabler/icons-react';

export const Say = () => {

  return (
    <Box>
      <Grid>
        <Grid.Col span={9} offset={1.5} >
          <Title order={2} style={{ color: "#5da5bd"}}>What our clients are saying...</Title>
          <Blockquote color="theme.8" cite="– Indiana Bones" icon={<IconPaw />} mt="xl">
            "The consulting services shine in innovation and strategy, easily leading the field. Missteps are rare and minor, yet the outstanding results are undeniable, showcasing unparalleled mastery and leadership. A true trendsetter, this consultancy earns both respect and admiration for its skill and insight."          </Blockquote>
          <Blockquote color="theme.2" cite="– Louie aka Lucifer" icon={<IconTrophy />} mt="xl">
          "If I had to rate my human on belly rub skills and treat selection, they'd be the undisputed leader of the pack. Seriously, those belly rubs are like a masterclass in bliss, hitting all the right spots every single time. And the treats? Gourmet doesn't even begin to cover it."
          </Blockquote>

          <Blockquote color="theme.5" cite="– Arthur" icon={<IconAward />} mt="xl">
          "From the enthusiastic barks around the neighborhood, it's clear I've been missing out on some top-tier human companionship. Word on the street is, you're the legend behind the most euphoric belly rubs and the purveyor of the crème de la crème of treats. My tail's wagging just thinking about it."
          </Blockquote>
        </Grid.Col>
      </Grid>
    </Box>
  )
}

