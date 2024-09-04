import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Date', (type) => Date)
export class DateScalar implements CustomScalar<number, Date> {
  description = 'Date custom scalar type';

  serialize(value: Date): number {
    /** date value becomes a string as we stringify to store
     * https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/#example-the-date-scalar
     */
    const time = new Date(value); // converting string value to Date

    if (time instanceof Date) {
      return time.getTime(); // Convert outgoing Date to integer for JSON, value sent to the client
    }

    throw Error('GraphQL Date Scalar serializer expected a `Date` object');
  }

  parseValue(value: number): Date {
    if (typeof value === 'number') {
      return new Date(value); // value from the client
    }

    throw new Error('GraphQL Date Scalar parser expected a `number`');
  }

  parseLiteral(ast: ValueNode): Date {
    // Convert hard-coded AST string to integer and then to Date
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    // Invalid hard-coded value (not an integer)
    return null;
  }
}
