import { tw } from 'twind';
import Button from '@/components/button';
import LogoSVG from '@/components/logoSVG'

const aboutLinks = [
{text:`Twitter`, url:`https://twitter.com/DogegramHQ`},
{text:`Github`, url:`https://github.com/dogegram`},
{text:`Blog`, url:`https://blog.dogegram.xyz`},
];
const resourceLinks = [
  {text:`Support`, url:`mailto:support@dogegram.xyz`},
  {text:`Status`, url:`https://status.dogegram.xyz`},
];

const Footer = () => (
  <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
    <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
      <div className={tw(`mb-14 flex items-center w-full`)}>
        <LogoSVG className={tw(`h-12 w-12 mr-4`)} width={48} height={48} />
        <p className={tw(`text-4xl text-indigo-500 font-bold`)}>Dogegram, Made with ♥ from India</p>
      </div>
      <div className={tw(`w-full lg:w-1/2`)}>
        <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Product</h4>
              <ul>
                  <a className={tw(`text-gray-800 text-sm font-medium leading-6`)} href="https://app.dogegram.xyz">
                    WebApp
                  </a>
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Resources</h4>
              <ul>
                {resourceLinks.map((obj, index) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={obj.text}>
                    <a href={obj.url}>{obj.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>About Us</h4>
              <ul>
                {aboutLinks.map((obj, index) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={index}>
                    <a href={obj.url}>{obj.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
