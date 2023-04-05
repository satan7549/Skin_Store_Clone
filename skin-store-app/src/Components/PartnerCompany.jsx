import { Wrap, WrapItem, Image, Center } from "@chakra-ui/react";
import React from "react";
import "../style/PartnerCompany.css";

const CompanyLogo = [
  "https://static.thcdn.com/images/small/webp/widgets/121-us/26/180x72_4_233548301_CA_SS_Logo_Amend_BAU_THG0030424-041301-124116-063126.png",
  "https://static.thcdn.com/images/small/webp/widgets/121-us/18/original-logo-1024x383-035229-063318.png",
  "https://static.thcdn.com/images/small/webp/widgets/121-us/11/Revision_Skincare_Logo_without_Tag_Line-052511.png",
  "https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-NF_Skinstore_Banner_Logo_Color_320x140-01-011402-010546.png",
  "https://static.thcdn.com/images/small/webp/widgets/121-us/27/220322-ELTAMD-LOGO-RGB-01-065127.png",
  "https://static.thcdn.com/images/small/webp/widgets/121-us/07/original-LOGO-2022_SkinStore_Landing_Page-BLACK-060107.png",
];

const PartnerCompany = () => {
  return (
    <Wrap spacing="30px" justify="center">
      {CompanyLogo.map((ele, i) => (
        <WrapItem key={i}>
          <Center w="150px" h="80px">
            <Image w={"200px"} h="100%" src={ele} alt={i} />
          </Center>
        </WrapItem>
      ))}
    </Wrap>
  );
};
export default PartnerCompany;
