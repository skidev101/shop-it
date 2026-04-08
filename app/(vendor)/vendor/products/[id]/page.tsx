"use client";

import { useRouter, useParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { 
  ChevronLeft, 
  Loader2, 
  Save, 
  Plus, 
  Trash2, 
  X, 
  Image as ImageIcon, 
  Check, 
  Lightbulb,
  Bold,
  Italic,
  List,
  Link as LinkIcon
} from "lucide-react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { getProductById, updateProduct, getCategories } from "@/lib/api/products";
import { toast } from "sonner";
import Link from "next/link";
import { UpdateProductPayload } from "@/types/product";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldError,
} from "@/components/ui/field";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),
  stock: z.coerce.number().min(0, "Stock cannot be negative"),
  basePrice: z.coerce.number().min(0, "Price cannot be negative"),
  comparePrice: z.coerce.number().min(0).optional().nullable(),
  category: z.string().min(1, "Category is required"),
  sku: z.string().optional(),
  images: z.array(z.string()).min(1, "At least one image is required"),
  variants: z.array(z.object({
    name: z.string().min(1, "Variant name is required"),
    options: z.array(z.string()).min(1, "At least one option is required"),
    stock: z.coerce.number().min(0)
  })).optional(),
  specifications: z.array(z.object({
    key: z.string().min(1, "Key is required"),
    value: z.string().min(1, "Value is required")
  })),
  isActive: z.boolean().default(true),
  tags: z.array(z.string()),
  shipping: z.object({
    weight: z.coerce.number().min(0).optional(),
    length: z.coerce.number().min(0).optional(),
    width: z.coerce.number().min(0).optional(),
    height: z.coerce.number().min(0).optional(),
  }).optional()
});

type ProductFormValues = z.infer<typeof productSchema>;

const STEPS = [
  { id: "general", title: "General Info", number: 1 },
  { id: "media", title: "Media", number: 2 },
  { id: "pricing", title: "Pricing & Stock", number: 3 },
  { id: "shipping", title: "Shipping", number: 4 },
];

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [activeTab, setActiveTab] = useState("general");
  const [tagInput, setTagInput] = useState("");
  const [imageInput, setImageInput] = useState("");

  const { data: product, isLoading: isLoadingProduct } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { mutate: handleUpdateProduct, isPending } = useMutation({
    mutationFn: (payload: UpdateProductPayload) => updateProduct(id, payload),
    onSuccess: () => {
      toast.success("Product updated successfully!");
      router.refresh();
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Failed to update product");
    },
  });

  const initialData = useMemo(() => {
    if (!product) return undefined;
    const specificationsArray = Object.entries(product.specifications || {}).map(
      ([key, value]) => ({ key, value })
    );
    return {
      ...product,
      specifications: specificationsArray,
      shipping: (product as any).shipping || { weight: 0, length: 0, width: 0, height: 0 },
      sku: (product as any).sku || ""
    };
  }, [product]);

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    values: initialData as any,
  });

  const { fields: variantFields, append: appendVariant, remove: removeVariant } = useFieldArray({
    control: form.control,
    name: "variants"
  });

  const { fields: specFields, append: appendSpec, remove: removeSpec } = useFieldArray({
    control: form.control,
    name: "specifications"
  });

  const tags = form.watch("tags") || [];
  const images = form.watch("images") || [];

  const onSubmit = (values: ProductFormValues) => {
    const specifications: Record<string, string> = {};
    values.specifications.forEach((spec) => {
      if (spec.key && spec.value) {
        specifications[spec.key] = spec.value;
      }
    });

    const payload: UpdateProductPayload = {
      ...values,
      specifications,
    } as any;

    handleUpdateProduct(payload);
  };

  const checklistItems = useMemo(() => [
    { label: "Unique Product Title", checked: !!form.watch("name") },
    { label: "Precise Category Mapping", checked: !!form.watch("category") },
    { label: "Compelling Storytelling", checked: (form.watch("description")?.length || 0) > 50 },
  ], [form.watch("name"), form.watch("category"), form.watch("description")]);

  if (isLoadingProduct) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-[#4B5E7E]/40" />
      </div>
    );
  }

  return (
    <div className="space-y-10 max-w-7xl mx-auto">
      {/* Header with Save Button */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-6">
          <Link href="/vendor/products" className="group flex items-center gap-2 text-[#999999] hover:text-[#1A1A1A] transition-colors w-fit">
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">Back to Products</span>
          </Link>
          <div>
            <h1 className="text-[40px] font-black tracking-tight text-[#1A1A1A] leading-tight">
              {product?.name}
            </h1>
            <p className="text-[16px] text-[#999999] font-medium mt-2">
              Populate the global catalog with your curated offerings.
            </p>
          </div>
        </div>
        <Button 
          type="button" 
          onClick={form.handleSubmit(onSubmit)}
          disabled={isPending}
          className="h-14 px-10 rounded-2xl bg-[#4B5E7E] text-white hover:bg-[#3B4A63] font-black uppercase tracking-widest gap-3 shadow-xl shadow-[#4B5E7E]/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Save className="h-5 w-5" />}
          Save Changes
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-10">
        <TabsList className="bg-transparent h-auto p-0 flex items-center justify-between max-w-4xl w-full">
          {STEPS.map((step) => (
            <TabsTrigger 
              key={step.id} 
              value={step.id}
              className={cn(
                "p-0 bg-transparent flex items-center gap-3 relative flex-1 last:flex-none border-none data-[state=active]:bg-transparent shadow-none",
                activeTab === step.id ? "text-[#1A1A1A]" : "text-[#999999]"
              )}
            >
              <div className={cn(
                "h-9 w-9 rounded-full flex items-center justify-center text-[13px] font-black transition-all shadow-sm shrink-0",
                activeTab === step.id ? "bg-[#4B5E7E] text-white" : "bg-white border-2 border-[#F0F2F5] text-[#999999]"
              )}>
                {step.number}
              </div>
              <span className="text-[13px] font-black uppercase tracking-widest whitespace-nowrap hidden sm:block">{step.title}</span>
              {step.number < 4 && (
                <div className="mx-4 h-[2px] flex-1 bg-[#F0F2F5] min-w-[20px] hidden sm:block" />
              )}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white overflow-visible rounded-[32px]">
              <CardContent className="p-8 md:p-10">
                <form className="space-y-8">
                  <TabsContent value="general" className="mt-0 space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <Field>
                      <FieldLabel className="text-[11px] font-black uppercase tracking-[0.2em] text-[#999999] mb-4">Product Title</FieldLabel>
                      <FieldContent>
                        <Input 
                          placeholder="e.g. Handcrafted Oak Navigator's Compass" 
                          {...form.register("name")}
                          className="h-16 rounded-2xl bg-[#F9FAFB] border-none text-lg font-medium focus-visible:ring-1 focus-visible:ring-[#4B5E7E]/20 px-6"
                        />
                        <p className="text-[12px] text-[#999999] font-medium mt-3 ml-1 italic opacity-80">A descriptive name helps buyers find your item quickly.</p>
                        <FieldError errors={[form.formState.errors.name]} />
                      </FieldContent>
                    </Field>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <Field>
                        <FieldLabel className="text-[11px] font-black uppercase tracking-[0.2em] text-[#999999] mb-4">Category</FieldLabel>
                        <FieldContent>
                          <select 
                            {...form.register("category")}
                            className="h-16 w-full rounded-2xl bg-[#F9FAFB] border-none px-6 text-base font-medium focus-visible:ring-1 focus-visible:ring-[#4B5E7E]/20 appearance-none outline-none cursor-pointer"
                          >
                            <option value="">Select a category</option>
                            {categories.map((cat) => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                          <FieldError errors={[form.formState.errors.category]} />
                        </FieldContent>
                      </Field>

                      <Field>
                        <FieldLabel className="text-[11px] font-black uppercase tracking-[0.2em] text-[#999999] mb-4">SKU (Stock Keeping Unit)</FieldLabel>
                        <FieldContent>
                          <Input 
                            placeholder="COMP-001-GOLD"
                            {...form.register("sku")}
                            className="h-16 rounded-2xl bg-[#F9FAFB] border-none text-base font-medium px-6"
                          />
                        </FieldContent>
                      </Field>
                    </div>

                    <Field>
                      <FieldLabel className="text-[11px] font-black uppercase tracking-[0.2em] text-[#999999] mb-4">Product Description</FieldLabel>
                      <FieldContent>
                        <div className="rounded-[24px] border border-[#F3F4F6] overflow-hidden shadow-sm">
                          <div className="flex items-center gap-1 p-3 border-b border-[#F3F4F6] bg-white">
                            <Button type="button" variant="ghost" size="icon" className="h-9 w-9 text-[#1A1A1A] hover:bg-[#F3F4F6] rounded-lg transition-colors"><Bold className="h-4 w-4" /></Button>
                            <Button type="button" variant="ghost" size="icon" className="h-9 w-9 text-[#1A1A1A] hover:bg-[#F3F4F6] rounded-lg transition-colors"><Italic className="h-4 w-4" /></Button>
                            <Button type="button" variant="ghost" size="icon" className="h-9 w-9 text-[#1A1A1A] hover:bg-[#F3F4F6] rounded-lg transition-colors"><List className="h-4 w-4" /></Button>
                            <div className="w-[1px] h-4 bg-[#F3F4F6] mx-2" />
                            <Button type="button" variant="ghost" size="icon" className="h-9 w-9 text-[#1A1A1A] hover:bg-[#F3F4F6] rounded-lg transition-colors"><LinkIcon className="h-4 w-4" /></Button>
                          </div>
                          <Textarea 
                            placeholder="Describe the story, materials, and craftsmanship behind this piece..." 
                            {...form.register("description")}
                            className="min-h-[280px] border-none focus-visible:ring-0 text-base font-medium py-6 px-6 resize-none bg-white leading-relaxed"
                          />
                        </div>
                        <FieldError errors={[form.formState.errors.description]} />
                      </FieldContent>
                    </Field>
                  </TabsContent>

                  <TabsContent value="media" className="mt-0 space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="space-y-6">
                      <FieldLabel className="text-[11px] font-black uppercase tracking-[0.2em] text-[#999999]">Product Images</FieldLabel>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {images.map((url, idx) => (
                          <div key={idx} className="relative group aspect-square rounded-[24px] overflow-hidden bg-[#F9FAFB] border border-[#F3F4F6] shadow-sm">
                            <img src={url} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <button
                                type="button"
                                onClick={() => {
                                  const current = form.getValues("images");
                                  form.setValue("images", current.filter((_, i) => i !== idx));
                                }}
                                className="h-10 w-10 bg-white/90 backdrop-blur shadow-lg rounded-full flex items-center justify-center hover:bg-destructive hover:text-white transition-all transform scale-90 group-hover:scale-100"
                              >
                                <X className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        ))}
                        {images.length < 8 && (
                          <button 
                            type="button"
                            className="aspect-square rounded-[24px] border-2 border-dashed border-[#E5E7EB] flex flex-col items-center justify-center text-[#999999] bg-[#F9FAFB] hover:bg-white hover:border-[#4B5E7E] hover:text-[#4B5E7E] transition-all group"
                          >
                            <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                              <ImageIcon className="h-6 w-6 opacity-40 group-hover:opacity-100" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.1em] opacity-60 group-hover:opacity-100">Add Image</span>
                          </button>
                        )}
                      </div>
                      <div className="flex gap-3">
                        <Input 
                          placeholder="Or paste an image URL..." 
                          value={imageInput}
                          onChange={(e) => setImageInput(e.target.value)}
                          className="h-14 rounded-2xl bg-[#F9FAFB] border-none px-6 text-sm font-medium"
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => {
                            if (imageInput.trim()) {
                              const current = form.getValues("images") || [];
                              form.setValue("images", [...current, imageInput.trim()]);
                              setImageInput("");
                            }
                          }}
                          className="h-14 px-8 rounded-2xl border-[#E5E7EB] font-black uppercase tracking-widest text-[11px] hover:bg-[#1A1A1A] hover:text-white transition-colors"
                        >
                          Import
                        </Button>
                      </div>
                      <FieldError errors={[form.formState.errors.images]} />
                    </div>

                    <div className="space-y-6 pt-4">
                      <div className="flex items-center justify-between">
                        <FieldLabel className="text-[11px] font-black uppercase tracking-[0.2em] text-[#999999]">Specifications</FieldLabel>
                        <Button 
                          type="button" 
                          variant="ghost" 
                          size="sm"
                          onClick={() => appendSpec({ key: "", value: "" })}
                          className="text-[11px] font-black uppercase tracking-widest text-[#4B5E7E] hover:bg-[#F3F4FA]"
                        >
                          <Plus className="h-4 w-4 mr-2" /> Add Spec
                        </Button>
                      </div>
                      <div className="space-y-4">
                        {specFields.map((field, index) => (
                          <div key={field.id} className="flex gap-4 items-start animate-in slide-in-from-left-4 duration-300">
                            <Input 
                              placeholder="e.g. Material" 
                              {...form.register(`specifications.${index}.key` as const)}
                              className="h-14 rounded-2xl bg-[#F9FAFB] border-none px-6 font-medium"
                            />
                            <Input 
                              placeholder="e.g. Leather" 
                              {...form.register(`specifications.${index}.value` as const)}
                              className="h-14 rounded-2xl bg-[#F9FAFB] border-none px-6 font-medium"
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-14 w-14 shrink-0 text-[#999999] hover:text-destructive hover:bg-destructive/5 rounded-2xl transition-colors"
                              onClick={() => removeSpec(index)}
                            >
                              <Trash2 className="h-5 w-5" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="pricing" className="mt-0 space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <Field>
                        <FieldLabel className="text-[11px] font-black uppercase tracking-[0.2em] text-[#999999] mb-4">Base Price ($)</FieldLabel>
                        <FieldContent>
                          <Input 
                            type="number"
                            step="0.01"
                            {...form.register("basePrice")}
                            className="h-16 rounded-2xl bg-[#F9FAFB] border-none px-6 text-lg font-bold"
                          />
                          <FieldError errors={[form.formState.errors.basePrice]} />
                        </FieldContent>
                      </Field>
                      <Field>
                        <FieldLabel className="text-[11px] font-black uppercase tracking-[0.2em] text-[#999999] mb-4">Compare Price ($)</FieldLabel>
                        <FieldContent>
                          <Input 
                            type="number"
                            step="0.01"
                            {...form.register("comparePrice")}
                            className="h-16 rounded-2xl bg-[#F9FAFB] border-none px-6 text-lg font-medium text-[#999999]"
                          />
                        </FieldContent>
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <Field>
                        <FieldLabel className="text-[11px] font-black uppercase tracking-[0.2em] text-[#999999] mb-4">Total Inventory</FieldLabel>
                        <FieldContent>
                          <Input 
                            type="number"
                            {...form.register("stock")}
                            className="h-16 rounded-2xl bg-[#F9FAFB] border-none px-6 text-lg font-bold"
                          />
                          <FieldError errors={[form.formState.errors.stock]} />
                        </FieldContent>
                      </Field>
                      <div className="flex items-center justify-between h-16 px-6 bg-[#F9FAFB] rounded-2xl border-none mt-auto">
                        <span className="text-sm font-black uppercase tracking-[0.1em] text-[#1A1A1A]">Track Inventory</span>
                        <Switch defaultChecked className="data-[state=checked]:bg-[#4B5E7E]" />
                      </div>
                    </div>

                    <div className="space-y-6 pt-4">
                      <div className="flex items-center justify-between">
                        <FieldLabel className="text-[11px] font-black uppercase tracking-[0.2em] text-[#999999]">Variants</FieldLabel>
                        <Button 
                          type="button" 
                          variant="ghost" 
                          size="sm"
                          onClick={() => appendVariant({ name: "", options: [], stock: 0 })}
                          className="text-[11px] font-black uppercase tracking-widest text-[#4B5E7E] hover:bg-[#F3F4FA]"
                        >
                          <Plus className="h-4 w-4 mr-2" /> Add Variant
                        </Button>
                      </div>
                      
                      <div className="space-y-6">
                        {variantFields.map((field, index) => (
                          <div key={field.id} className="p-8 rounded-[28px] bg-[#F9FAFB] border border-[#F3F4F6] space-y-6 relative group animate-in slide-in-from-right-4 duration-300">
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="absolute top-6 right-6 text-[#999999] hover:text-destructive hover:bg-destructive/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all"
                              onClick={() => removeVariant(index)}
                            >
                              <Trash2 className="h-5 w-5" />
                            </Button>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pr-10">
                              <Field>
                                <FieldLabel className="text-[11px] font-black uppercase tracking-widest text-[#1A1A1A] mb-3">Option Name</FieldLabel>
                                <Input 
                                  placeholder="e.g. Color"
                                  {...form.register(`variants.${index}.name` as const)}
                                  className="bg-white border-none rounded-xl h-14 px-5 font-medium shadow-sm"
                                />
                              </Field>
                              <Field>
                                <FieldLabel className="text-[11px] font-black uppercase tracking-widest text-[#1A1A1A] mb-3">Allocated Stock</FieldLabel>
                                <Input 
                                  type="number"
                                  {...form.register(`variants.${index}.stock` as const)}
                                  className="bg-white border-none rounded-xl h-14 px-5 font-bold shadow-sm"
                                />
                              </Field>
                            </div>
                            <Field>
                              <FieldLabel className="text-[11px] font-black uppercase tracking-widest text-[#1A1A1A] mb-3">Values</FieldLabel>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {form.watch(`variants.${index}.options`)?.map((option, oIndex) => (
                                  <Badge key={oIndex} className="bg-white border border-[#F0F2F5] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all gap-2 px-4 py-2 rounded-xl font-bold shadow-sm cursor-default">
                                    {option}
                                    <button 
                                      type="button" 
                                      onClick={() => {
                                        const current = form.getValues(`variants.${index}.options`);
                                        form.setValue(`variants.${index}.options`, current.filter((_, i) => i !== oIndex));
                                      }}
                                      className="opacity-50 hover:opacity-100"
                                    >
                                      <X className="h-3 w-3" />
                                    </button>
                                  </Badge>
                                ))}
                              </div>
                              <Input 
                                placeholder="Press Enter to add values"
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    e.preventDefault();
                                    const val = (e.target as HTMLInputElement).value;
                                    if (val.trim()) {
                                      const current = form.getValues(`variants.${index}.options`) || [];
                                      form.setValue(`variants.${index}.options`, [...current, val.trim()]);
                                      (e.target as HTMLInputElement).value = "";
                                    }
                                  }
                                }}
                                className="bg-white border-none rounded-xl h-14 px-5 font-medium shadow-sm"
                              />
                            </Field>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="shipping" className="mt-0 space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <Field>
                        <FieldLabel className="text-[11px] font-black uppercase tracking-[0.2em] text-[#999999] mb-4">Weight (kg)</FieldLabel>
                        <FieldContent>
                          <Input 
                            type="number"
                            {...form.register("shipping.weight")}
                            className="h-16 rounded-2xl bg-[#F9FAFB] border-none px-6 text-lg font-medium"
                          />
                        </FieldContent>
                      </Field>
                      <div className="flex items-center justify-between h-16 px-6 bg-[#F9FAFB] rounded-2xl border-none mt-auto">
                        <span className="text-sm font-black uppercase tracking-[0.1em] text-[#1A1A1A]">Free Shipping</span>
                        <Switch className="data-[state=checked]:bg-[#4B5E7E]" />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <FieldLabel className="text-[11px] font-black uppercase tracking-[0.2em] text-[#999999]">Dimensions (cm)</FieldLabel>
                      <div className="grid grid-cols-3 gap-6">
                        <Input placeholder="L" {...form.register("shipping.length")} className="h-16 rounded-2xl bg-[#F9FAFB] border-none px-6 text-center font-medium" />
                        <Input placeholder="W" {...form.register("shipping.width")} className="h-16 rounded-2xl bg-[#F9FAFB] border-none px-6 text-center font-medium" />
                        <Input placeholder="H" {...form.register("shipping.height")} className="h-16 rounded-2xl bg-[#F9FAFB] border-none px-6 text-center font-medium" />
                      </div>
                    </div>

                    <div className="p-8 rounded-[32px] bg-[#EEF2FF] border border-[#E0E7FF] space-y-4">
                      <div className="flex items-center gap-3 text-[#4338CA]">
                        <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                          <Lightbulb className="h-5 w-5" />
                        </div>
                        <h4 className="text-[12px] font-black uppercase tracking-widest">Shipping Intelligence</h4>
                      </div>
                      <p className="text-[14px] text-[#4338CA] font-medium leading-relaxed opacity-80">
                        Accurate weight and dimensions help us calculate the most precise shipping rates and prevent additional carrier fees during fulfillment.
                      </p>
                    </div>

                    <div className="space-y-6 pt-4">
                      <FieldLabel className="text-[11px] font-black uppercase tracking-[0.2em] text-[#999999]">Discovery Tags</FieldLabel>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <Badge key={tag} className="bg-[#1A1A1A] text-white hover:bg-[#333333] px-4 py-2 rounded-xl font-bold gap-3 shadow-md">
                            {tag}
                            <button 
                              type="button" 
                              onClick={() => {
                                const current = form.getValues("tags");
                                form.setValue("tags", current.filter((t) => t !== tag));
                              }}
                            >
                              <X className="h-3.5 w-3.5" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Input 
                          placeholder="Add search tags..." 
                          value={tagInput}
                          onChange={(e) => setTagInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              if (tagInput.trim()) {
                                const current = form.getValues("tags") || [];
                                form.setValue("tags", [...current, tagInput.trim()]);
                                setTagInput("");
                              }
                            }
                          }}
                          className="h-16 rounded-2xl bg-[#F9FAFB] border-none px-6 font-medium"
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => {
                            if (tagInput.trim()) {
                              const current = form.getValues("tags") || [];
                              form.setValue("tags", [...current, tagInput.trim()]);
                              setTagInput("");
                            }
                          }}
                          className="h-16 px-8 rounded-2xl border-[#E5E7EB] font-black uppercase tracking-widest text-[11px] hover:bg-[#1A1A1A] hover:text-white transition-colors"
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
            <Card className="border-none shadow-none bg-[#F3F6FA] rounded-[32px] p-10">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="h-12 w-12 shrink-0 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                    <Lightbulb className="h-6 w-6 text-[#4B5E7E]" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1A1A1A] mb-3">Pro Tip</h4>
                    <p className="text-[15px] text-[#4B5E7E] font-medium leading-relaxed opacity-90">
                      Items with detailed descriptions (at least 200 words) see a 40% higher conversion rate. Mention the history or inspiration to engage collectors.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-none shadow-none bg-[#F9FAFB] rounded-[32px] p-10">
              <div className="space-y-8">
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]">Quality Checklist</h4>
                <div className="space-y-6">
                  {checklistItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className={cn(
                        "h-7 w-7 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110",
                        item.checked ? "bg-[#4B5E7E] text-white shadow-md shadow-[#4B5E7E]/20" : "border-2 border-[#E5E7EB] bg-white"
                      )}>
                        {item.checked && <Check className="h-4 w-4" />}
                      </div>
                      <span className={cn(
                        "text-[15px] font-bold transition-colors duration-300",
                        item.checked ? "text-[#1A1A1A]" : "text-[#999999]"
                      )}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden group shadow-2xl shadow-black/10">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" 
                alt="Excellence" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-90" />
              <div className="absolute inset-0 flex flex-col justify-end p-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-3">Curation Standards</span>
                <h4 className="text-white font-black uppercase tracking-widest text-2xl leading-tight">Excellence in Presentation</h4>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
