import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

interface QuoteFormModalProps {
  open: boolean;
  onClose: () => void;
  productName?: string;
}

function detectCategory(name?: string): string {
  if (!name) return "";
  const lower = name.toLowerCase();
  if (lower.includes("granite")) return "Granite";
  if (lower.includes("marble")) return "Marble";
  return "Exotic Stone";
}

export function QuoteFormModal({
  open,
  onClose,
  productName,
}: QuoteFormModalProps) {
  const defaultProduct = productName ? detectCategory(productName) : "";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState(defaultProduct);
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [datetime, setDatetime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productLine =
      productName && product !== productName
        ? `Product: ${product} (${productName})`
        : `Product: ${product}`;
    const msg = [
      "*Quote Request - Khushi Marble and Granite*",
      `Name: ${name}`,
      `Number: ${phone}`,
      productLine,
      `Quantity: ${quantity}`,
      `Delivery Location: ${location}`,
      `Date/Time: ${datetime}`,
    ].join("\n");
    window.open(
      `https://wa.me/917300373111?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
    onClose();
    setName("");
    setPhone("");
    setProduct(defaultProduct);
    setQuantity("");
    setLocation("");
    setDatetime("");
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="bg-[#152a1e] border border-[#c9a84c]/30 text-white w-full max-w-[calc(100vw-2rem)] sm:max-w-md rounded-lg p-0 overflow-hidden"
        data-ocid="quote.dialog"
      >
        {/* Gold top bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#c9a84c] via-[#f0d080] to-[#c9a84c]" />

        <div className="px-4 sm:px-6 pt-4 sm:pt-5 pb-5 sm:pb-6 overflow-y-auto max-h-[90vh]">
          <DialogHeader className="mb-4">
            <DialogTitle className="font-serif text-xl text-white">
              Request a Quote
            </DialogTitle>
            <p className="text-xs text-white/50 font-sans tracking-wide mt-1">
              Fill in the details below and we'll get back to you on WhatsApp.
            </p>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label
                  htmlFor="qf-name"
                  className="text-xs text-white/70 uppercase tracking-widest"
                >
                  Name *
                </Label>
                <Input
                  id="qf-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-[#c9a84c] text-sm h-10"
                  data-ocid="quote.input"
                />
              </div>
              <div className="space-y-1">
                <Label
                  htmlFor="qf-phone"
                  className="text-xs text-white/70 uppercase tracking-widest"
                >
                  Phone *
                </Label>
                <Input
                  id="qf-phone"
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9876543210"
                  className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-[#c9a84c] text-sm h-10"
                  data-ocid="quote.input"
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label
                htmlFor="qf-product"
                className="text-xs text-white/70 uppercase tracking-widest"
              >
                Required Product *
              </Label>
              <Select required value={product} onValueChange={setProduct}>
                <SelectTrigger
                  id="qf-product"
                  className="bg-white/5 border-white/15 text-white focus:ring-[#c9a84c] text-sm h-10"
                  data-ocid="quote.select"
                >
                  <SelectValue placeholder="Select product type" />
                </SelectTrigger>
                <SelectContent className="bg-[#152a1e] border-white/15 text-white">
                  <SelectItem value="Marble" className="focus:bg-white/10">
                    Marble
                  </SelectItem>
                  <SelectItem value="Granite" className="focus:bg-white/10">
                    Granite
                  </SelectItem>
                  <SelectItem
                    value="Exotic Stone"
                    className="focus:bg-white/10"
                  >
                    Exotic Stone
                  </SelectItem>
                  <SelectItem value="Pebbles" className="focus:bg-white/10">
                    Pebbles
                  </SelectItem>
                  <SelectItem value="Gravel" className="focus:bg-white/10">
                    Gravel
                  </SelectItem>
                  <SelectItem
                    value="Marble Chips"
                    className="focus:bg-white/10"
                  >
                    Marble Chips
                  </SelectItem>
                </SelectContent>
              </Select>
              {productName && (
                <p className="text-[11px] text-[#c9a84c]/70 mt-0.5">
                  Product: {productName}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label
                  htmlFor="qf-qty"
                  className="text-xs text-white/70 uppercase tracking-widest"
                >
                  Order Quantity *
                </Label>
                <Input
                  id="qf-qty"
                  required
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 2000 sqft"
                  className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-[#c9a84c] text-sm h-10"
                  data-ocid="quote.input"
                />
              </div>
              <div className="space-y-1">
                <Label
                  htmlFor="qf-location"
                  className="text-xs text-white/70 uppercase tracking-widest"
                >
                  Delivery Location *
                </Label>
                <Input
                  id="qf-location"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City / State"
                  className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:ring-[#c9a84c] text-sm h-10"
                  data-ocid="quote.input"
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label
                htmlFor="qf-datetime"
                className="text-xs text-white/70 uppercase tracking-widest"
              >
                Preferred Date &amp; Time
              </Label>
              <Input
                id="qf-datetime"
                type="datetime-local"
                value={datetime}
                onChange={(e) => setDatetime(e.target.value)}
                className="bg-white/5 border-white/15 text-white [color-scheme:dark] focus-visible:ring-[#c9a84c] text-sm h-10"
                data-ocid="quote.input"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 border-white/20 text-white/70 hover:bg-white/10 hover:text-white text-xs tracking-widest"
                data-ocid="quote.cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gold text-black font-black text-xs tracking-widest uppercase shadow-md hover:brightness-110 hover:shadow-lg transition-all duration-200 gap-2"
                data-ocid="quote.submit_button"
              >
                <MessageCircle className="w-4 h-4" />
                Send via WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
