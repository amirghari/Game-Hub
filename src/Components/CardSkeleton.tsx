import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const CardSkeleton = () => {
  return (
    <>
      <Card>
        <Skeleton height="200px" width={300} borderRadius={10} />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  )
}

export default CardSkeleton
