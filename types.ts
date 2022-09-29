export interface IinputProps {
  input: string;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
}

export interface IChoreProps {
    chore: string;
    handleDelete: (e: any) => void;
    handleCompleted: (e: any) => void;
  }
  