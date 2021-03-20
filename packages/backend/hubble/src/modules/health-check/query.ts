import { Query, Resolver } from 'type-graphql'

@Resolver()
export class HealthCheckResolver {
  @Query(() => String, {
    description: 'Verifica a disponibilidade do servidor'
  })
  healthCheck() {
    return 'Server is running!'
  }
}
