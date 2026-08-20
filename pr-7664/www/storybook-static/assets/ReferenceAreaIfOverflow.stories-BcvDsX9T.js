import{R as e}from"./iframe-BB2cSF8T.js";import{R as p}from"./zIndexSlice-Ck0CRfK_.js";import{C as s}from"./ComposedChart-D7ONXqhe.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BkpWEDC_.js";import{X as d}from"./XAxis-DwBzx4b3.js";import{Y as l}from"./YAxis-CMkp761K.js";import{R as h}from"./ReferenceArea-D83VjUVz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-nMA59eYs.js";import"./index-EzV7mwgL.js";import"./index-DofPxVLY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DjeWZstQ.js";import"./isWellBehavedNumber-BQXiM-z-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkB_KEzo.js";import"./index-MTvadirX.js";import"./index-DyAmptVd.js";import"./axisSelectors-BurdOGu6.js";import"./d3-scale-C3zxZmRj.js";import"./renderedTicksSlice-lUF_NPm1.js";import"./CartesianChart-ChdkOd-C.js";import"./chartDataContext-CB4jnkAv.js";import"./CategoricalChart-DAFEAISl.js";import"./CartesianAxis-BWqAGBTh.js";import"./Layer-LVpAC3_2.js";import"./Text-Bwx_fWQU.js";import"./DOMUtils-yFTvziLR.js";import"./useId-D4zb9cEW.js";import"./useBackwardsCompatibleTheme-g8RWGYmo.js";import"./Label-BZkQksct.js";import"./ZIndexLayer-DbM1bO0L.js";import"./types-ChWRaT57.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-D-ZdRLCN.js";import"./useAnimationId-C8wX-p7z.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const {
      findByText
    } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
