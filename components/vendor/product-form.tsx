"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus, Trash2, X, Image as ImageIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldError,
  FieldGroup,
  FieldTitle,
} from "@/components/ui/field";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { cn } from "@/lib/utils";

const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),
  stock: z.coerce.number().min(0, "Stock cannot be negative"),
  basePrice: z.coerce.number().min(0, "Price cannot be negative"),
  comparePrice: z.coerce.number().min(0).optional().nullable(),
  category: z.string().min(1, "Category is required"),
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
  tags: z.array(z.string())
});

export type ProductFormValues = z.infer<typeof productSchema>;

interface ProductFormProps {
  initialData?: Partial<ProductFormValues>;
  onSubmit: (data: ProductFormValues) => void;
  isLoading?: boolean;
  categories: string[];
}

export function ProductForm({ initialData, onSubmit, isLoading, categories }: ProductFormProps) {
  const [tagInput, setTagInput] = useState("");
  const [imageInput, setImageInput] = useState("");

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: initialData?.name || "",
      description: initialData?.description || "",
      stock: initialData?.stock || 0,
      basePrice: initialData?.basePrice || 0,
      comparePrice: initialData?.comparePrice || undefined,
      category: initialData?.category || "",
      images: initialData?.images || [],
      variants: initialData?.variants || [],
      specifications: initialData?.specifications || [],
      isActive: initialData?.isActive ?? true,
      tags: initialData?.tags || []
    }
  });

  const { fields: variantFields, append: appendVariant, remove: removeVariant } = useFieldArray({
    control: form.control,
    name: "variants"
  });

  const { fields: specFields, append: appendSpec, remove: removeSpec } = useFieldArray({
    control: form.control,
    name: "specifications"
  });

  const tags = form.watch("tags");
  const images = form.watch("images");

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      form.setValue("tags", [...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    form.setValue("tags", tags.filter((t) => t !== tag));
  };

  const addImage = () => {
    if (imageInput.trim() && !images.includes(imageInput.trim())) {
      form.setValue("images", [...images, imageInput.trim()]);
      setImageInput("");
    }
  };

  const removeImage = (index: number) => {
    form.setValue("images", images.filter((_, i) => i !== index));
  };

  const handleVariantOptionAdd = (vIndex: number, option: string) => {
    const currentVariants = form.getValues("variants") || [];
    const currentOptions = currentVariants[vIndex].options || [];
    if (option.trim() && !currentOptions.includes(option.trim())) {
      currentOptions.push(option.trim());
      form.setValue(`variants.${vIndex}.options`, currentOptions);
    }
  };

  const removeVariantOption = (vIndex: number, oIndex: number) => {
    const currentVariants = form.getValues("variants") || [];
    const currentOptions = currentVariants[vIndex].options.filter((_, i) => i !== oIndex);
    form.setValue(`variants.${vIndex}.options`, currentOptions);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Basic Info */}
          <Card className="border-none shadow-sm bg-white overflow-visible">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-lg font-black uppercase tracking-widest text-[#1A1A1A]">Basic Information</h3>
              <div className="space-y-4">
                <Field>
                  <FieldLabel>Product Name</FieldLabel>
                  <FieldContent>
                    <Input 
                      placeholder="e.g. Tactical EDC Pack" 
                      {...form.register("name")}
                      className="h-12 rounded-xl bg-[#F5F5F7] border-none focus-visible:ring-1 focus-visible:ring-primary/20"
                    />
                    <FieldError errors={[form.formState.errors.name]} />
                  </FieldContent>
                </Field>

                <Field>
                  <FieldLabel>Description</FieldLabel>
                  <FieldContent>
                    <Textarea 
                      placeholder="Describe your product..." 
                      {...form.register("description")}
                      className="min-h-[150px] rounded-xl bg-[#F5F5F7] border-none focus-visible:ring-1 focus-visible:ring-primary/20 py-4"
                    />
                    <FieldError errors={[form.formState.errors.description]} />
                  </FieldContent>
                </Field>

                <div className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel>Category</FieldLabel>
                    <FieldContent>
                      <select 
                        {...form.register("category")}
                        className="h-12 rounded-xl bg-[#F5F5F7] border-none px-3 text-sm focus-visible:ring-1 focus-visible:ring-primary/20 appearance-none"
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
                    <FieldLabel>Stock Quantity</FieldLabel>
                    <FieldContent>
                      <Input 
                        type="number"
                        {...form.register("stock")}
                        className="h-12 rounded-xl bg-[#F5F5F7] border-none focus-visible:ring-1 focus-visible:ring-primary/20"
                      />
                      <FieldError errors={[form.formState.errors.stock]} />
                    </FieldContent>
                  </Field>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card className="border-none shadow-sm bg-white">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-lg font-black uppercase tracking-widest text-[#1A1A1A]">Pricing</h3>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel>Base Price ($)</FieldLabel>
                  <FieldContent>
                    <Input 
                      type="number"
                      step="0.01"
                      {...form.register("basePrice")}
                      className="h-12 rounded-xl bg-[#F5F5F7] border-none focus-visible:ring-1 focus-visible:ring-primary/20"
                    />
                    <FieldError errors={[form.formState.errors.basePrice]} />
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>Compare Price ($)</FieldLabel>
                  <FieldContent>
                    <Input 
                      type="number"
                      step="0.01"
                      {...form.register("comparePrice")}
                      className="h-12 rounded-xl bg-[#F5F5F7] border-none focus-visible:ring-1 focus-visible:ring-primary/20"
                    />
                    <FieldError errors={[form.formState.errors.comparePrice]} />
                  </FieldContent>
                </Field>
              </div>
            </CardContent>
          </Card>

          {/* Variants */}
          <Card className="border-none shadow-sm bg-white">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-black uppercase tracking-widest text-[#1A1A1A]">Variants</h3>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={() => appendVariant({ name: "", options: [], stock: 0 })}
                  className="rounded-lg h-8 text-[10px] font-black uppercase tracking-widest gap-2"
                >
                  <Plus className="h-3.5 w-3.5" /> Add Variant
                </Button>
              </div>
              
              <div className="space-y-6">
                {variantFields.map((field, index) => (
                  <div key={field.id} className="p-4 rounded-2xl bg-[#F9F9FB] space-y-4 relative">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 text-muted-foreground hover:text-destructive h-8 w-8"
                      onClick={() => removeVariant(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <div className="grid grid-cols-2 gap-4 pr-10">
                      <Field>
                        <FieldLabel>Variant Name (e.g. Color)</FieldLabel>
                        <FieldContent>
                          <Input 
                            {...form.register(`variants.${index}.name` as const)}
                            className="bg-white border-none rounded-xl h-10"
                          />
                        </FieldContent>
                      </Field>
                      <Field>
                        <FieldLabel>Stock</FieldLabel>
                        <FieldContent>
                          <Input 
                            type="number"
                            {...form.register(`variants.${index}.stock` as const)}
                            className="bg-white border-none rounded-xl h-10"
                          />
                        </FieldContent>
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel>Options</FieldLabel>
                      <FieldContent>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {form.watch(`variants.${index}.options`)?.map((option, oIndex) => (
                            <Badge key={oIndex} variant="secondary" className="gap-1 px-2 py-1 rounded-lg">
                              {option}
                              <button 
                                type="button" 
                                onClick={() => removeVariantOption(index, oIndex)}
                                className="hover:text-destructive transition-colors"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </Badge>
                          ))}
                        </div>
                        <Input 
                          placeholder="Type option and press Enter"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleVariantOptionAdd(index, (e.target as HTMLInputElement).value);
                              (e.target as HTMLInputElement).value = "";
                            }
                          }}
                          className="bg-white border-none rounded-xl h-10"
                        />
                      </FieldContent>
                    </Field>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Specifications */}
          <Card className="border-none shadow-sm bg-white">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-black uppercase tracking-widest text-[#1A1A1A]">Specifications</h3>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm"
                  onClick={() => appendSpec({ key: "", value: "" })}
                  className="rounded-lg h-8 text-[10px] font-black uppercase tracking-widest gap-2"
                >
                  <Plus className="h-3.5 w-3.5" /> Add Spec
                </Button>
              </div>

              <div className="space-y-3">
                {specFields.map((field, index) => (
                  <div key={field.id} className="flex gap-3 items-start">
                    <Input 
                      placeholder="Key (e.g. Material)" 
                      {...form.register(`specifications.${index}.key` as const)}
                      className="h-11 rounded-xl bg-[#F5F5F7] border-none"
                    />
                    <Input 
                      placeholder="Value (e.g. Leather)" 
                      {...form.register(`specifications.${index}.value` as const)}
                      className="h-11 rounded-xl bg-[#F5F5F7] border-none"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-11 w-11 shrink-0 text-muted-foreground hover:text-destructive"
                      onClick={() => removeSpec(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          {/* Status & Actions */}
          <Card className="border-none shadow-sm bg-white overflow-hidden">
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-[#1A1A1A]">Product Status</h4>
                  <p className="text-xs text-[#999999] font-medium">Visible to customers</p>
                </div>
                <Switch 
                  checked={form.watch("isActive")} 
                  onCheckedChange={(val) => form.setValue("isActive", val)}
                />
              </div>
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full h-12 rounded-xl bg-[#1A1A1A] text-white hover:bg-[#333333] font-black uppercase tracking-widest gap-2"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Save Product"}
              </Button>
            </div>
          </Card>

          {/* Media */}
          <Card className="border-none shadow-sm bg-white">
            <CardContent className="p-6 space-y-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#1A1A1A]">Product Images</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {images.map((url, idx) => (
                    <div key={idx} className="relative group aspect-square rounded-xl overflow-hidden bg-[#F5F5F7] border border-[#F0F0F0]">
                      <img src={url} alt="" className="h-full w-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeImage(idx)}
                        className="absolute top-1 right-1 h-6 w-6 bg-white/80 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                  {images.length < 5 && (
                    <div className="aspect-square rounded-xl border-2 border-dashed border-[#E5E5E5] flex flex-col items-center justify-center text-muted-foreground bg-[#F9F9FB]">
                      <ImageIcon className="h-6 w-6 mb-1 opacity-20" />
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Add Image</span>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Image URL..." 
                    value={imageInput}
                    onChange={(e) => setImageInput(e.target.value)}
                    className="h-10 rounded-xl bg-[#F5F5F7] border-none text-xs"
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="icon"
                    onClick={addImage}
                    className="h-10 w-10 shrink-0 rounded-xl"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <FieldError errors={[form.formState.errors.images]} />
              </div>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card className="border-none shadow-sm bg-white">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#1A1A1A]">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="gap-1 px-2 py-1 rounded-lg">
                    {tag}
                    <button type="button" onClick={() => removeTag(tag)}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input 
                  placeholder="Add tag..." 
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addTag();
                    }
                  }}
                  className="h-10 rounded-xl bg-[#F5F5F7] border-none text-xs"
                />
                <Button 
                  type="button" 
                  variant="outline" 
                  size="icon"
                  onClick={addTag}
                  className="h-10 w-10 shrink-0 rounded-xl"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
}
