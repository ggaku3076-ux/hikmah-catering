"use client";

import { useState, useMemo, useEffect } from "react";
import {
  PACKAGES,
  ADDONS,
  DELIVERY_ZONES,
  CALCULATOR_CONFIG,
  EVENT_TYPES,
  COMPANY,
  type Package,
  type Addon,
} from "@/lib/data";
import { formatRupiah } from "@/lib/utils";

// Define addon categories with their display icons
const ADDON_CATEGORIES = [
  { id: "gubukan", title: "Gubukan & Live Station", icon: "🍢" },
  { id: "logistik", title: "Peralatan & Logistik", icon: "🪑" },
  { id: "dekorasi", title: "Dekorasi", icon: "🌸" },
  { id: "entertainment", title: "Hiburan & Sound", icon: "🎵" },
  { id: "pelayanan", title: "Pelayanan Tambahan", icon: "👨‍🍳" },
];

export default function CalculatorPage() {
  // --- Form State ---
  const [eventType, setEventType] = useState(EVENT_TYPES[0].value);
  const [guestCount, setGuestCount] = useState(100);
  const [selectedPackageId, setSelectedPackageId] = useState("");
  // Record<addonId, quantity>
  const [addonsState, setAddonsState] = useState<Record<string, number>>({});
  const [deliveryZoneId, setDeliveryZoneId] = useState(DELIVERY_ZONES[0].id);
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [enableTax, setEnableTax] = useState(CALCULATOR_CONFIG.enableTax);
  const [enableService, setEnableService] = useState(
    CALCULATOR_CONFIG.enableServiceCharge
  );

  // Customer State
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [eventDate, setEventDate] = useState("");

  // --- Derived Data ---
  const filteredPackages = useMemo(() => {
    return PACKAGES.filter((p) => p.type.includes(eventType as any));
  }, [eventType]);

  const selectedPackage = useMemo(() => {
    return PACKAGES.find((p) => p.id === selectedPackageId);
  }, [selectedPackageId]);

  // Ensure selected package is valid for event type, if not, reset or select first
  useEffect(() => {
    if (!filteredPackages.find((p) => p.id === selectedPackageId)) {
      setSelectedPackageId(filteredPackages[0]?.id || "");
    }
  }, [filteredPackages, selectedPackageId]);

  // Ensure guest count meets minimum of selected package
  useEffect(() => {
    if (selectedPackage && guestCount < selectedPackage.minPax) {
      setGuestCount(selectedPackage.minPax);
    }
  }, [selectedPackage, guestCount]);

  // --- Calculations ---
  const subtotalPaket = (selectedPackage?.basePrice || 0) * guestCount;

  const subtotalTambahan = useMemo(() => {
    return Object.entries(addonsState).reduce((total, [id, qty]) => {
      const addon = ADDONS.find((a) => a.id === id);
      return total + (addon?.price || 0) * qty;
    }, 0);
  }, [addonsState]);

  const rawSubtotal = subtotalPaket + subtotalTambahan;
  const discountAmount = isPromoApplied ? rawSubtotal * 0.1 : 0; // 10% discount for 'HIKMAH10'
  const subtotalAfterDiscount = rawSubtotal - discountAmount;

  const deliveryZone = DELIVERY_ZONES.find((z) => z.id === deliveryZoneId);
  const ongkirCost = deliveryZone?.cost || 0;

  const serviceCharge = enableService
    ? subtotalAfterDiscount * CALCULATOR_CONFIG.serviceChargeRate
    : 0;

  const taxBase = subtotalAfterDiscount + serviceCharge;
  const taxAmount = enableTax ? taxBase * CALCULATOR_CONFIG.taxRate : 0;

  const grandTotal = taxBase + taxAmount + ongkirCost;
  const dpAmount = grandTotal * CALCULATOR_CONFIG.dpPercentage;
  const pelunasan = grandTotal - dpAmount;

  // --- Handlers ---
  const handlePromoApply = () => {
    if (promoCode.toUpperCase() === "HIKMAH10") {
      setIsPromoApplied(true);
      alert("Promo HIKMAH10 berhasil digunakan! Diskon 10% diterapkan.");
    } else {
      setIsPromoApplied(false);
      alert("Kode promo tidak valid atau sudah kadaluarsa.");
    }
  };

  const handleAddonToggle = (addonId: string, checked: boolean) => {
    setAddonsState((prev) => {
      const newState = { ...prev };
      if (checked) {
        newState[addonId] = 1; // Default to 1 if checked
      } else {
        delete newState[addonId];
      }
      return newState;
    });
  };

  const handleAddonQtyChange = (addonId: string, delta: number) => {
    setAddonsState((prev) => {
      const current = prev[addonId] || 0;
      const next = Math.max(1, current + delta); // Cannot go below 1 if active
      return { ...prev, [addonId]: next };
    });
  };

  const generateWhatsAppMessage = () => {
    if (!customerName || !customerPhone || !eventDate) {
      alert("Mohon lengkapi Data Pelanggan terlebih dahulu.");
      return;
    }

    const eventLabel = EVENT_TYPES.find((e) => e.value === eventType)?.label;
    const activeAddonsText = Object.entries(addonsState)
      .filter(([_, qty]) => qty > 0)
      .map(([id, qty]) => {
        const addon = ADDONS.find((a) => a.id === id);
        return `- ${addon?.name} x ${qty}`;
      })
      .join("\n");

    const message = `Halo Hikmah Catering,
Saya telah melakukan simulasi biaya melalui website dan tertarik untuk memesan dengan detail berikut:

*INFORMASI PELANGGAN*
Nama: ${customerName}
No. HP: ${customerPhone}
Tanggal Acara: ${eventDate}
Lokasi / Zona: ${deliveryZone?.name}

*DETAIL PESANAN*
Jenis Acara: ${eventLabel}
Paket: ${selectedPackage?.name || "-"}
Jumlah Tamu: ${guestCount} pax
${activeAddonsText ? `Tambahan:\n${activeAddonsText}` : ""}

*ESTIMASI BIAYA*
Subtotal: ${formatRupiah(rawSubtotal)}
${isPromoApplied ? `Diskon (10%): -${formatRupiah(discountAmount)}\n` : ""}Ongkir: ${formatRupiah(ongkirCost)}
Pajak/Service: ${formatRupiah(taxAmount + serviceCharge)}
*TOTAL ESTIMASI: ${formatRupiah(grandTotal)}*

Mohon informasi lebih lanjut mengenai ketersediaan tanggal dan proses pembayaran DP sebesar ${formatRupiah(dpAmount)}. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodedMessage}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 text-center max-w-3xl mx-auto animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Kalkulator Simulasi Biaya
          </h1>
          <p className="text-slate-600">
            Sesuaikan kebutuhan acara Anda dan dapatkan estimasi harga secara real-time. Harga transparan tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start relative">
          
          {/* LEFT SIDE: Form */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* 1. Basic Info */}
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-slate-100 animate-fade-in-up">
              <h2 className="text-lg font-bold flex items-center gap-2 mb-6 text-slate-900">
                <span>📋</span> Informasi Dasar Acara
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Jenis Acara</label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full rounded-xl border-slate-200 p-3 bg-slate-50 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    {EVENT_TYPES.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Jumlah Tamu (Pax)
                  </label>
                  <div className="flex items-center">
                    <button
                      onClick={() => setGuestCount(Math.max(selectedPackage?.minPax || 50, guestCount - 50))}
                      className="w-12 h-12 flex items-center justify-center bg-slate-100 rounded-l-xl border border-slate-200 border-r-0 hover:bg-slate-200 text-slate-600 font-bold transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value) || 0)}
                      className="w-full h-12 text-center border-slate-200 font-semibold focus:ring-0 focus:border-slate-200 bg-white"
                      min={selectedPackage?.minPax || 50}
                    />
                    <button
                      onClick={() => setGuestCount(guestCount + 50)}
                      className="w-12 h-12 flex items-center justify-center bg-slate-100 rounded-r-xl border border-slate-200 border-l-0 hover:bg-slate-200 text-slate-600 font-bold transition-colors"
                    >
                      +
                    </button>
                  </div>
                  {selectedPackage && guestCount < selectedPackage.minPax && (
                    <p className="text-red-500 text-xs mt-2">
                      Minimal pemesanan untuk paket ini adalah {selectedPackage.minPax} pax.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* 2. Package Selection */}
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-slate-100 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h2 className="text-lg font-bold flex items-center gap-2 mb-6 text-slate-900">
                <span>🍽️</span> Pilih Paket Utama
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {filteredPackages.map((pkg) => {
                  const isSelected = selectedPackageId === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`cursor-pointer rounded-2xl p-4 border-2 transition-all duration-200 relative ${
                        isSelected
                          ? "border-primary-500 bg-primary-50/50 shadow-md"
                          : "border-slate-100 hover:border-slate-300 bg-white"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-3 right-3 text-primary-500">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                      {pkg.popular && (
                         <div className="absolute -top-3 left-4 bg-accent-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                           Paling Diminati
                         </div>
                      )}
                      <h3 className="font-bold text-slate-900 mt-1">{pkg.name}</h3>
                      <div className="text-primary-600 font-extrabold my-2">
                        {formatRupiah(pkg.basePrice)} <span className="text-xs text-slate-500 font-normal">/ pax</span>
                      </div>
                      <p className="text-sm text-slate-500 line-clamp-2">
                        {pkg.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Addons */}
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-slate-100 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="text-lg font-bold flex items-center gap-2 mb-2 text-slate-900">
                <span>➕</span> Layanan Tambahan (Opsional)
              </h2>
              <p className="text-sm text-slate-500 mb-6">Sesuaikan acara Anda dengan ekstra gubukan, dekorasi, atau hiburan.</p>
              
              <div className="space-y-8">
                {ADDON_CATEGORIES.map((cat) => {
                  const categoryAddons = ADDONS.filter(a => a.category === cat.id);
                  if (categoryAddons.length === 0) return null;
                  
                  return (
                    <div key={cat.id}>
                      <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                        <span>{cat.icon}</span> {cat.title}
                      </h3>
                      <div className="space-y-3">
                        {categoryAddons.map(addon => {
                          const isChecked = !!addonsState[addon.id];
                          const qty = addonsState[addon.id] || 0;
                          return (
                            <div key={addon.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                              <div className="flex items-start gap-3">
                                <div className="flex items-center h-6">
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={(e) => handleAddonToggle(addon.id, e.target.checked)}
                                    className="w-5 h-5 rounded border-slate-300 text-primary-600 focus:ring-primary-500 mt-0.5"
                                  />
                                </div>
                                <div>
                                  <div className="font-medium text-slate-900">{addon.name}</div>
                                  <div className="text-sm text-primary-600 font-semibold">
                                    {formatRupiah(addon.price)} <span className="text-slate-400 font-normal text-xs">{addon.unit}</span>
                                  </div>
                                </div>
                              </div>
                              
                              {isChecked && (
                                <div className="flex items-center w-[120px] self-end sm:self-auto shrink-0">
                                  <button
                                    onClick={() => handleAddonQtyChange(addon.id, -1)}
                                    className="w-8 h-8 flex items-center justify-center bg-white border border-slate-200 rounded-l-lg hover:bg-slate-100 text-slate-600"
                                  >
                                    -
                                  </button>
                                  <div className="flex-1 h-8 flex items-center justify-center bg-slate-50 border-y border-slate-200 text-sm font-semibold">
                                    {qty}
                                  </div>
                                  <button
                                    onClick={() => handleAddonQtyChange(addon.id, 1)}
                                    className="w-8 h-8 flex items-center justify-center bg-white border border-slate-200 rounded-r-lg hover:bg-slate-100 text-slate-600"
                                  >
                                    +
                                  </button>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Delivery & Config */}
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-slate-100 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h2 className="text-lg font-bold flex items-center gap-2 mb-6 text-slate-900">
                <span>🚚</span> Pengiriman & Konfigurasi
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Zona Pengiriman</label>
                  <select
                    value={deliveryZoneId}
                    onChange={(e) => setDeliveryZoneId(e.target.value)}
                    className="w-full rounded-xl border-slate-200 p-3 bg-slate-50 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    {DELIVERY_ZONES.map((zone) => (
                      <option key={zone.id} value={zone.id}>
                        {zone.name} {zone.cost > 0 ? `(+ ${formatRupiah(zone.cost)})` : ""}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="pt-4 border-t border-slate-100 grid sm:grid-cols-2 gap-4">
                   <label className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={enableService}
                        onChange={(e) => setEnableService(e.target.checked)}
                        className="w-5 h-5 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm font-medium text-slate-700">Hitung Service Charge (5%)</span>
                   </label>
                   <label className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={enableTax}
                        onChange={(e) => setEnableTax(e.target.checked)}
                        className="w-5 h-5 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm font-medium text-slate-700">Hitung PPN (11%)</span>
                   </label>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Kode Voucher</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Contoh: HIKMAH10"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={isPromoApplied}
                      className="flex-1 rounded-xl border-slate-200 p-3 bg-slate-50 focus:ring-primary-500 focus:border-primary-500 uppercase"
                    />
                    <button
                      onClick={handlePromoApply}
                      disabled={isPromoApplied || !promoCode}
                      className="px-6 py-3 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isPromoApplied ? "Terpakai" : "Gunakan"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 5. Customer Info */}
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-slate-100 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <h2 className="text-lg font-bold flex items-center gap-2 mb-6 text-slate-900">
                <span>👤</span> Data Pelanggan
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full rounded-xl border-slate-200 p-3 bg-slate-50 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Masukkan nama"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Nomor WhatsApp</label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full rounded-xl border-slate-200 p-3 bg-slate-50 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="08123xxx"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Tanggal Acara</label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full rounded-xl border-slate-200 p-3 bg-slate-50 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Summary Sticky */}
          <div className="lg:col-span-2">
            <div className="bg-white lg:bg-white/80 lg:backdrop-blur-xl rounded-2xl shadow-elevated border border-slate-200 sticky top-28 overflow-hidden animate-slide-left z-20">
              
              <div className="p-6 sm:p-8 bg-slate-900 text-white">
                <h3 className="font-bold text-lg mb-1">Estimasi Biaya</h3>
                <p className="text-slate-400 text-sm">Transparan tanpa biaya tersembunyi</p>
              </div>
              
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">Paket {selectedPackage?.name} ({guestCount} pax)</span>
                  <span className="font-semibold text-slate-900 price-transition">{formatRupiah(subtotalPaket)}</span>
                </div>
                
                {subtotalTambahan > 0 && (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Layanan Tambahan</span>
                    <span className="font-semibold text-slate-900 price-transition">{formatRupiah(subtotalTambahan)}</span>
                  </div>
                )}
                
                {isPromoApplied && (
                  <div className="flex justify-between items-center text-sm text-green-600 bg-green-50 p-2 rounded-lg -mx-2 px-2">
                    <span className="font-medium">Diskon Promo (10%)</span>
                    <span className="font-bold price-transition">-{formatRupiah(discountAmount)}</span>
                  </div>
                )}
                
                {ongkirCost > 0 && (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Ongkos Kirim</span>
                    <span className="font-semibold text-slate-900 price-transition">{formatRupiah(ongkirCost)}</span>
                  </div>
                )}
                
                {enableService && (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Service Charge (5%)</span>
                    <span className="font-semibold text-slate-900 price-transition">{formatRupiah(serviceCharge)}</span>
                  </div>
                )}
                
                {enableTax && (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">PPN (11%)</span>
                    <span className="font-semibold text-slate-900 price-transition">{formatRupiah(taxAmount)}</span>
                  </div>
                )}
                
                <div className="border-t border-slate-200 pt-4 mt-4">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-slate-900 font-bold">Total Estimasi</span>
                    <span className="text-3xl font-extrabold text-primary-600 price-transition tracking-tight">
                      {formatRupiah(grandTotal)}
                    </span>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-6 space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 font-medium">Estimasi DP (30%)</span>
                    <span className="font-bold text-slate-900 price-transition">{formatRupiah(dpAmount)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Sisa Pelunasan</span>
                    <span className="font-semibold text-slate-700 price-transition">{formatRupiah(pelunasan)}</span>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={generateWhatsAppMessage}
                    className="w-full flex items-center justify-center gap-2 gradient-primary text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 btn-shine"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Pesan melalui WhatsApp
                  </button>
                  <p className="text-xs text-center text-slate-400 mt-4">
                    Dengan klik tombol di atas, Anda akan dialihkan ke WhatsApp Admin tanpa harus membayar sekarang.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
