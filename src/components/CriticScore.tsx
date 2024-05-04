import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

const getColor = (score: number) => {
    if (score > 75) return 'green'
    else if (score > 60) return 'yellow'
    else return 'red'
}

const CriticScore = ({ score } : Props) => {
  return (
    <Badge colorScheme={getColor(score)} fontSize='14px' paddingX={2} borderRadius='4px'>{score}</Badge>
  )
}

export default CriticScore