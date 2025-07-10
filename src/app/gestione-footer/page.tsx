'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

interface FooterItem {
  id: string;
  label: string;
  content: string;
  tipo: string;
  order_index: number;
  visibile: boolean;
}

export default function GestioneFooterPage() {
  const [items, setItems] = useState<FooterItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('footer_info').select('*').order('order_index');
      if (!error && data) setItems(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleChange = (index: number, field: keyof FooterItem, value: any) => {
    const updated = [...items];
    updated[index][field] = field === 'order_index' ? parseInt(value) : value;
    setItems(updated);
  };

  const handleSave = async (item: FooterItem) => {
    const { error } = await supabase.from('footer_info').update(item).eq('id', item.id);
    if (!error) {
      setSaved(item.id);
      setTimeout(() => setSaved(null), 2000);
    } else {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    await supabase.from('footer_info').delete().eq('id', id);
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddNew = () => {
    const newItem: FooterItem = {
      id: crypto.randomUUID(),
      label: '',
      content: '',
      tipo: 'text',
      order_index: items.length + 1,
      visibile: true,
    };
    setItems([...items, newItem]);
  };

  const handleCreate = async (item: FooterItem) => {
    const { data, error } = await supabase.from('footer_info').insert([item]).select().single();
    if (error) {
      console.error(error);
      return;
    }
    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...data } : i)));
  };

  const handleDragEnd = async (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex((i) => i.id === active.id);
    const newIndex = items.findIndex((i) => i.id === over.id);

    const newItems = arrayMove(items, oldIndex, newIndex).map((item, index) => ({
      ...item,
      order_index: index + 1,
    }));

    setItems(newItems);

    for (const item of newItems) {
      await supabase.from('footer_info').update({ order_index: item.order_index }).eq('id', item.id);
    }
  };

  if (loading) return <p className="p-4 text-white">Caricamento...</p>;

  return (
    <div className="min-h-screen bg-backgroundColor text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Gestione Footer</h1>
      <button
        onClick={handleAddNew}
        className="mb-8 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        ➕ Aggiungi Nuova Voce
      </button>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
          <div className="space-y-8">
            {items.map((item, index) => (
              <SortableItem
                key={item.id}
                item={item}
                index={index}
                onChange={handleChange}
                onSave={handleSave}
                onDelete={handleDelete}
                onCreate={handleCreate}
                isSaved={saved === item.id}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}

function itemExistsInDb(item: FooterItem): boolean {
  return !item.id.startsWith('000') && item.id.split('-').length === 5;
}

function SortableItem({
  item,
  index,
  onChange,
  onSave,
  onDelete,
  onCreate,
  isSaved,
}: {
  item: FooterItem;
  index: number;
  onChange: (index: number, field: keyof FooterItem, value: any) => void;
  onSave: (item: FooterItem) => void;
  onDelete: (id: string) => void;
  onCreate: (item: FooterItem) => void;
  isSaved: boolean;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      onPointerDown={(e) => {
        const tag = (e.target as HTMLElement).tagName;
        if (['INPUT', 'SELECT', 'TEXTAREA', 'BUTTON', 'LABEL'].includes(tag)) return;
        listeners.onPointerDown(e);
      }}
      className="bg-white/10 border border-white/20 p-6 rounded-xl shadow-md space-y-4 cursor-grab"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="text-black p-2 rounded w-full"
          placeholder="Etichetta"
          value={item.label}
          onChange={(e) => onChange(index, 'label', e.target.value)}
        />
        <select
          className="text-black p-2 rounded w-full"
          value={item.tipo}
          onChange={(e) => onChange(index, 'tipo', e.target.value)}
        >
          <option value="text">Testo</option>
          <option value="tel">Telefono</option>
          <option value="link">Link</option>
          <option value="social">Social</option>
        </select>
        <input
          className="text-black p-2 rounded w-full col-span-2"
          placeholder="Contenuto"
          value={item.content}
          onChange={(e) => onChange(index, 'content', e.target.value)}
        />
        <input
          className="text-black p-2 rounded w-full"
          type="number"
          placeholder="Ordine"
          value={item.order_index}
          onChange={(e) => onChange(index, 'order_index', e.target.value)}
        />
        <label className="flex items-center gap-2 text-white">
          <input
            type="checkbox"
            checked={item.visibile}
            onChange={(e) => onChange(index, 'visibile', e.target.checked)}
          />
          Visibile
        </label>
      </div>

      <div className="flex gap-4 flex-wrap pt-2 items-center">
        {!itemExistsInDb(item) ? (
          <button
            onClick={() => onCreate(item)}
            className="px-4 py-2 bg-yellow-600 rounded hover:bg-yellow-700 transition"
          >
            ➕ Crea
          </button>
        ) : (
          <>
            <button
              onClick={() => onSave(item)}
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition"
            >
              💾 Salva
            </button>
            <button
              onClick={() => onDelete(item.id)}
              className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"
            >
              ❌ Elimina
            </button>
            {isSaved && (
              <span className="text-green-400 text-sm ml-2">✅ Salvato!</span>
            )}
          </>
        )}
      </div>
    </div>
  );
}
