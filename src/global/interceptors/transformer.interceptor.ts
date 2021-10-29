import {
	Injectable,
	NestInterceptor,
	ExecutionContext,
	CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import StatusCodes from '../utils/status-codes.util';

export interface Response<T> {
	statusCode: number;
	data: T;
}

@Injectable()
export class TransformInterceptor implements NestInterceptor {
	intercept(
		context: ExecutionContext,
		next: CallHandler,
	): Observable<Response<any>> {
		return next.handle().pipe(
			map((data) => {
				const statusCode = context.switchToHttp().getResponse().statusCode;
				return {
					statusCode,
					success: Object.values(StatusCodes.SUCCESS).some(
						(sc) => sc === statusCode,
					),
					data: data,
				};
			}),
		);
	}
}
