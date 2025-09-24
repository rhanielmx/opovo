interface TagProps{
  content: string
  color?: string
} 

export function Tag({ content, color="#D0FBEB"}: TagProps){
  return (
    <span className={`uppercase font-[12px] text-[${color}] border border-[${color}] p-0.5`}>{content}</span>
  )
}