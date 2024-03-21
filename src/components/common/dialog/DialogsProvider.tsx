import React from 'react';
import { useAlertDialogState, useConfirmDialogState } from '@/store/common/dialog';
import Alert from './Alert';
import Confirm from './Confirm';

const DialogProvider: React.FC = () => {
  const { alertDialogModels, removeAlertDialogModel } = useAlertDialogState();
  const { confirmDialogModels, removeDialogModel } = useConfirmDialogState();

  return (
    <>
      {alertDialogModels.map((model, idx) => (
        <Alert
          key={`alert-model-${idx}`}
          content={model.content}
          dialogProps={model.dialogProps}
          onConfirm={() => {
            model.confirm();
          }}
          onClose={() => removeAlertDialogModel(model.id)}
        />
      ))}
      {confirmDialogModels.map((model, idx) => (
        <Confirm
          key={`confirm-model-${idx}`}
          content={model.content}
          onConfirm={model.confirm}
          onClose={() => removeDialogModel(model.id)}
          dialogProps={model.dialogProps}
        />
      ))}
    </>
  );
};

export default DialogProvider;
