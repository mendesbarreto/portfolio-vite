import badgeHandCraft from '/crafted-with-care.png';

export function WebSiteHandCrafted() {
  return (
    <div className="flex flex-col items-center justify-center  gap-4 w-full">
      <div className="flex w-100 p-4">
        <img src={badgeHandCraft} alt="Douglas" className="w-full h-auto" />
      </div>
    </div>
  );
}
