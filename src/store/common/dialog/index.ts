import { atom, useRecoilState } from 'recoil';
import { DialogModel, AlertModel } from '@/model/common/dialog';

const confirmDialogState = atom<DialogModel[]>({
  key: 'confirm-dialog-state',
  default: [],
});

const alertDialogState = atom<AlertModel[]>({
  key: 'alert-dialog-state',
  default: [],
});

const useConfirmDialogState = () => {
  const [confirmDialogModels, setConfirmDialogModels] = useRecoilState(confirmDialogState);

  const addDConfirmDialogModel = (dialogModel: DialogModel) => {
    setConfirmDialogModels((curr) => [...curr, dialogModel]);
  };

  const removeDialogModel = (id: string) => {
    setConfirmDialogModels((curr) => curr.filter((model) => id !== model.id));
  };

  return {
    confirmDialogModels,
    addDConfirmDialogModel,
    removeDialogModel,
  };
};

const useAlertDialogState = () => {
  const [alertDialogModels, setAlertDialogModels] = useRecoilState(alertDialogState);

  const addAlertDialogModel = (dialogModel: AlertModel) => {
    setAlertDialogModels((curr) => [...curr, dialogModel]);
  };

  const removeAlertDialogModel = (id: string) => {
    setAlertDialogModels((curr) => curr.filter((model) => id !== model.id));
  };

  return {
    alertDialogModels,
    addAlertDialogModel,
    removeAlertDialogModel,
  };
};

export { useConfirmDialogState, useAlertDialogState };
