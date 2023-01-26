import { Module } from 'deojs';
import { RootController } from './root.controller';

@Module({ controllers: [RootController] })
export class RootModule {}
