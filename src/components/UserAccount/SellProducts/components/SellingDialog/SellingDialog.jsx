import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";
import DialogContent from "./DialogContent";

const SellingDialog = ({
  isOpen,
  setIsOpen,
  defaultselected,
  setSelectedBrands,
  selectedBrands,
  practical=[],
  setpractical,
  selectedMembrane,
setselectedMembrane,
goreTexOptions,
        setgoreTexOptions,
        selectedcut,
        setselectedcut,
        selectedInsulation,
        setSelectedInsulation,

}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="dialog-root"
    >
      <div className="dialog-container">
        <DialogPanel className="dialog-panel">
          <DialogContent
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            defaultselected={defaultselected}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            practical={practical}
            setpractical={setpractical}
            selectedMembrane={selectedMembrane}
                setselectedMembrane={setselectedMembrane}
            goreTexOptions={goreTexOptions}
            setgoreTexOptions={setgoreTexOptions}
            selectedcut={selectedcut}
            setselectedcut={setselectedcut}
            selectedInsulation={selectedInsulation}
            setSelectedInsulation={setSelectedInsulation}
          />
        </DialogPanel> 
      </div>
    </Dialog>
  );
};

export default SellingDialog;
