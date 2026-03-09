"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";

type FormSubmissionProps = {
  open: boolean;
  onClose: () => void;
};

export default function EbookFormSubmission({ open, onClose }: FormSubmissionProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Gelukt!</DialogTitle>
          <DialogDescription>
            Je aanvraag is binnen. Hieronder even praktisch hoe je het e-book
            direct downloadt.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3 text-sm">
          <p className="font-semibold">Praktisch</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Check je mail (en zeker je spam!) na het invullen van je e-mail.</li>
            <li>
              Klik in de mail ‘de eerste stap is gezet’ op ‘download het
              stappenplan’.
            </li>
            <li>Het e-book zit nu met een PDF bestand in je mail, jippie!</li>
            <li>Download het e-book en druk het eventueel af. Aan de slag!</li>
            <li>Tag mij @mathianl, ik connecteer heel graag met je.</li>
          </ul>
        </div>
        <DialogFooter>
          <Button onClick={onClose} className="bg-secondary-accent cursor-pointer hover:bg-secondary-accent/80">Sluiten</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
