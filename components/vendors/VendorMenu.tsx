import { Reveal } from "@/components/ui/Reveal";
import type { MenuSection } from "@/types";

export function VendorMenu({
  menu,
  note,
}: {
  menu: MenuSection[];
  note?: string;
}) {
  return (
    <div className="rounded-3xl bg-paper p-7 shadow-[0_30px_80px_-40px_rgba(10,23,16,0.6)] sm:p-10 md:p-12">
      <div className="space-y-11">
        {menu.map((section) => (
          <Reveal key={section.title}>
            <div>
              <h3 className="mb-6 flex items-center gap-4 font-display text-2xl text-sea">
                <span>{section.title}</span>
                <span className="h-px flex-1 bg-ink-soft/10" />
              </h3>
              <ul className="space-y-5">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start justify-between gap-6"
                  >
                    <div>
                      <p className="text-lg font-semibold text-ink-soft">
                        {item.name}
                      </p>
                      <p className="mt-0.5 leading-relaxed text-ink-soft/60">
                        {item.description}
                      </p>
                    </div>
                    <span className="whitespace-nowrap text-lg font-semibold text-green">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      {note && (
        <p className="mt-10 border-t border-ink-soft/10 pt-6 text-center text-sm italic text-ink-soft/45">
          {note}
        </p>
      )}
    </div>
  );
}
