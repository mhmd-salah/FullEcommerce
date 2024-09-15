import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { iapiResponse } from "./ProductsPage";
import { Button, Image } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { api } from "@/api";
import { addToCart } from "@/App/feathers/cartSlice";
import { useDispatch } from "react-redux";
import { Carousel, CarouselContent, CarouselItem } from "@/Components/ui/carousel";

function ProductDetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams(); 
  const nav = useNavigate();
  const goBack = () => nav(-1);

  const addToCartHandler= ()=>{
    dispatch(addToCart({ ...data?.data }));
  }

  const fetchProductDetail = async (): Promise<iapiResponse> => {
    const res = await api.get(
      `/products/${id}?populate=thumbnail`
    );
    return res.data;
  };
  const { data, isLoading } = useQuery<iapiResponse>({
    queryKey: [`productDetail`, id],
    queryFn: fetchProductDetail,
  });
  if (isLoading) return <h1>Loading...</h1>;
  const baseUrl = import.meta.env.VITE_SERVER_URL;
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center w-full px-9 relative overflow-hidden">
      <div>
        <motion.span
          initial={{ translateX: "-130%" }}
          animate={{ translateX: "0" }}
          onClick={goBack}
          className="absolute top-3 left-3 cursor-pointer"
        >
          <ArrowBackIcon /> Products
        </motion.span>
      </div>
      {data && (
        <motion.div
          initial={{ opacity: 0.4, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex-col-reverse lg:flex-row container flex items-center justify-between "
        >
          <div className="space-y-3">
            <h1 className="text-4xl">{data.data.attributes.title}</h1>
            <p className="text-2xl">{data.data.attributes.description}</p>
            <span className="text-2xl block">
              ${data.data.attributes.price}
            </span>
            <Button
              colorScheme="teal"
              variant={"outline"}
              onClick={addToCartHandler}
            >
              Add To Card
            </Button>
          </div>
          <div className="w- " >
            <Carousel className="w-96 cursor-grab">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    width={400}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                    src={`${baseUrl}${data.data.attributes.thumbnail.data.attributes.url}`}
                    fallbackSrc="https://via.placeholder.com/150"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    width={400}
                    src={`${baseUrl}${data.data.attributes.thumbnail.data.attributes.url}`}
                    fallbackSrc="https://via.placeholder.com/150"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default ProductDetailPage;
