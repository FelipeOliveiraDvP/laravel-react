export interface Event {
  id: number;
  title: string;
  color: string;
  location: string | null;
  start_date: string;
  final_date: string;
  responsible: {
    id: number;
    name: string;
    email: string;
  };
}

export interface ListEventsQuery {
  start_date: string;
  final_date: string;
}

export interface EventQuery {
  id?: number;
  title: string;
  color: string;
  location?: string;
  start_date: string;
  final_date: string;
  responsible_id: number;
}
