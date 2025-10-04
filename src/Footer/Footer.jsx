import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function MyFooter() {
  return (
    <Footer container={false} className="bg-main text-center text-white">
      <div className="w-full py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
        
          <div>
            <FooterTitle title="LOCATION" className="uppercase text-xl font-bold text-white" />
            <FooterLinkGroup col>
              <FooterLink href="#" className="text-white hover:underline">
                2215 John Daniel Drive
              </FooterLink>
              <FooterLink href="#" className="text-white hover:underline">
                Clark, MO 65243
              </FooterLink>
            </FooterLinkGroup>
          </div>

      
          <div>
            <FooterTitle title="AROUND THE WEB" className="uppercase text-xl font-bold text-white mb-4" />
            <div className="flex justify-center space-x-4">
              <FooterIcon href="#" icon={BsFacebook}  />
              <FooterIcon href="#" icon={BsInstagram}  />
              <FooterIcon href="#" icon={BsTwitter}  />
              <FooterIcon href="#" icon={BsGithub}  />
              <FooterIcon href="#" icon={BsDribbble}  />
            </div>
          </div>

      
          <div>
            <FooterTitle title="ABOUT FREELANCER" className="uppercase text-xl font-bold text-white" />
            <p className="mt-2 text-sm">
              Freelance is a free to use, licensed Bootstrap theme created by Route
            </p>
          </div>
        </div>

     
        <FooterDivider className="my-6 border-gray-500" />

    
        <div className="text-center text-sm ">
          <FooterCopyright
          className="text-white"
            href="#"
            by="Your Website"
            year={2025}
          />
        </div>
      </div>
    </Footer>
  );
}
