import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class RSVPs {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  constructor(init: ModelInit<RSVPs>);
  static copyOf(source: RSVPs, mutator: (draft: MutableModel<RSVPs>) => MutableModel<RSVPs> | void): RSVPs;
}