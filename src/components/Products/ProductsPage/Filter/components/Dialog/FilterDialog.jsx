import { Dialog, DialogPanel, DialogTitle, Description } from '@headlessui/react';
import './Dialog.css'; // CSS file with equivalent styles
import FilterModal from '../FilterModal';

const FilterDialog = ({ isOpen, setIsOpen,defaultselected }) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="dialog-root">
      <div className="dialog-container">
        <DialogPanel className="dialog-panel">
      
          <FilterModal isOpen={isOpen} setIsOpen={setIsOpen} defaultselected={defaultselected}/>
         
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default FilterDialog;
