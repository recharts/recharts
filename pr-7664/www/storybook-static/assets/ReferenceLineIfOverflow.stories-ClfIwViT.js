import{R as e}from"./iframe-BB2cSF8T.js";import{R as n}from"./zIndexSlice-Ck0CRfK_.js";import{C as p}from"./ComposedChart-D7ONXqhe.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BkpWEDC_.js";import{X as f}from"./XAxis-DwBzx4b3.js";import{Y as l}from"./YAxis-CMkp761K.js";import{L as d}from"./Line-DAcc-yk_.js";import{R as h}from"./ReferenceLine-CoOsdVB7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-nMA59eYs.js";import"./index-EzV7mwgL.js";import"./index-DofPxVLY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DjeWZstQ.js";import"./isWellBehavedNumber-BQXiM-z-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkB_KEzo.js";import"./index-MTvadirX.js";import"./index-DyAmptVd.js";import"./axisSelectors-BurdOGu6.js";import"./d3-scale-C3zxZmRj.js";import"./renderedTicksSlice-lUF_NPm1.js";import"./CartesianChart-ChdkOd-C.js";import"./chartDataContext-CB4jnkAv.js";import"./CategoricalChart-DAFEAISl.js";import"./CartesianAxis-BWqAGBTh.js";import"./Layer-LVpAC3_2.js";import"./Text-Bwx_fWQU.js";import"./DOMUtils-yFTvziLR.js";import"./useId-D4zb9cEW.js";import"./useBackwardsCompatibleTheme-g8RWGYmo.js";import"./Label-BZkQksct.js";import"./ZIndexLayer-DbM1bO0L.js";import"./types-ChWRaT57.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C11_GYZZ.js";import"./step-BWHrm9dE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-0WotYsMt.js";import"./useAnimationId-C8wX-p7z.js";import"./ActivePoints-CuAhK7lR.js";import"./Dot-byNEGz8Q.js";import"./RegisterGraphicalItemId-Bts6fFM2.js";import"./ErrorBarContext-DNeGzoAb.js";import"./GraphicalItemClipPath-CT1W7nLy.js";import"./SetGraphicalItem-Ct2uSDpP.js";import"./getRadiusAndStrokeWidthFromDot-eavX8tOz.js";import"./ActiveShapeUtils-Uvcq9QCX.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ve=["IfOverflow"];export{t as IfOverflow,ve as __namedExportsOrder,we as default};
