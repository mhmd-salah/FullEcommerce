import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const id = useParams()
  console.log(id)
  return (
    <div >ProductDetailPage</div>
  )
}

export default ProductDetailPage