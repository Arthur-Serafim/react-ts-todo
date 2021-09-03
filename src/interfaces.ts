export interface TaskInterface {
  todo: Array<string>;
  progress: Array<string>;
  done: Array<string>;
}

export interface CardProps {
  title: String;
  data: Array<string>;
  type: number;
}

export interface CardItemProps {
  title: string;
  type: number;
}
