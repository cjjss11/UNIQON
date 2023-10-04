import axios from "axios";
import { useEffect, useState } from "react";
import {MdArrowBack,MdArrowForward} from "react-icons/md";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

export function MyNft() {
  const [nftList, setNftList] = useState([]);
  const [page, setPage] = useState(0);
  // const [totalPage, setTotalPage] = useState(0);
  // 나의 NFT 조회
  useEffect(() => {
    async function getMyNft() {
      try {
        const response = await axios.get(`/api/myPage/mynfts`, {
          params: {
            page: page,
            size: 1, // 추후에 이 부분은 원하는 갯수로 변경
          },
        });
        console.log(response)
        if (response.status === 200) {
          setNftList(response.data.response.content);
        }
      } catch (error) {
        console.log("실패", error);
      }
    }
    getMyNft();
  }, [page]);

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="App">
      {page > 0 && <Button onClick={handlePreviousPage}><MdArrowBack className="w-6 h-6"></MdArrowBack></Button>}
      {nftList.length > 0 && (
        <Button onClick={handleNextPage}><MdArrowForward className="w-6 h-6"></MdArrowForward></Button>
      )}
      <div className="flex w-[1200px] items-start gap-[32px] relative flex-wrap">
        {nftList.map((nft, index) => (
          <div className="inline-flex flex-col min-w-[320px] items-start relative flex-[0_0_auto] bg-white rounded-[8px] overflow-hidden shadow-[0px_8px_40px_#0000000a,0px_2px_5px_#0000000d,0px_0px_2px_#00000026]">
              <Card key={index} className="w-full max-w-[20rem] shadow-lg">
                <CardHeader floated={false} color="blue-gray">
                  <img src={nft.image} alt="ui/ux review check" />
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                </CardHeader>
                <CardFooter className="pt-3 pb-3">
                  <Button className="text-sm" size="sm" fullWidth={true}>
                    {nft.name}
                  </Button>
                </CardFooter>
              </Card>
            </div>
        ))}
      </div>
    </div>
  );
}
