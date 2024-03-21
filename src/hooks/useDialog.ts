import { useAlertDialogState, useConfirmDialogState } from '@/store/common/dialog';
import { DialogProps } from '@mui/material';
import { AlertModel, DialogModel } from '@/model/common/dialog';

const useDialog = () => {
  const { addAlertDialogModel } = useAlertDialogState();
  const { addDConfirmDialogModel } = useConfirmDialogState();

  const alert = async (content: string, dialogProps?: DialogProps) => {
    const onClickOK = (func: (value: boolean) => void) => {
      func(true);
    };

    return new Promise((resolve) => {
      addAlertDialogModel(AlertModel.new(content, () => onClickOK(resolve), dialogProps));
    });
  };

  const confirm = async (content: string, dialogProps?: DialogProps) => {
    const onClickConfirm = (func: (value: boolean) => void, value: boolean) => {
      func(value);
    };

    return new Promise((resolve) => {
      addDConfirmDialogModel(
        DialogModel.new(content, (value: boolean) => onClickConfirm(resolve, value), dialogProps),
      );
    });
  };

  return {
    alert,
    confirm,
  };
};

export default useDialog;
