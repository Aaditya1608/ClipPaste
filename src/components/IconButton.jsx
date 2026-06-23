const IconButton = ({
  Icon,
  size=16,
  onClick="",
  className=""
}) => {
  return (
    <button
    onClick={onClick}
  className="
    h-7 w-7
    flex items-center justify-center
    rounded-full
    dark:bg-[#F6F6F7]
    bg-[#A63A50]
    border border-white
    dark:text-black text-white
    shadow-lg dark:shadow-black/40
  "
>
  <Icon size={size} />
</button>
  );
};

export default IconButton;
