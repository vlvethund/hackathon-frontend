import { DialogProps } from '@mui/material';

class DialogModel {
  id: string;
  content: string;
  confirm: (value: boolean) => void;
  dialogProps: DialogProps;

  constructor(
    content: string,
    confirm: (value: boolean) => void,
    dialogProps: DialogProps = {} as DialogProps,
  ) {
    this.id = self.crypto.randomUUID();
    this.content = content;
    this.confirm = confirm;
    this.dialogProps = dialogProps;
  }

  static new(
    content: string,
    confirm: (value: boolean) => void,
    dialogProps: DialogProps = {} as DialogProps,
  ) {
    return new DialogModel(content, confirm, dialogProps);
  }
}

export default DialogModel;
