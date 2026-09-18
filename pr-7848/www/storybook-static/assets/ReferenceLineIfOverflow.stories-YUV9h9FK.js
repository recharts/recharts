import{R as e}from"./iframe-DyNflmpD.js";import{R as a}from"./zIndexSlice-DcbzUDl1.js";import{C as p}from"./ComposedChart-DK3vhTkG.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CEkKYNp6.js";import{X as f}from"./XAxis-BRq0uwwt.js";import{Y as l}from"./YAxis-DRbcnQBN.js";import{L as d}from"./Line-BGuS8g8Y.js";import{R as h}from"./ReferenceLine-B-DZveF2.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-JOKyqjkh.js";import"./index-CXOSBmJF.js";import"./index-b5COxMAZ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CEGyXQoP.js";import"./isWellBehavedNumber-Du2TBwtB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DcT-g24f.js";import"./axisSelectors-D8oAfUCo.js";import"./d3-scale-rIUPnSoV.js";import"./index-CUSxx8_g.js";import"./index-D1o802DX.js";import"./renderedTicksSlice-D5roUEnp.js";import"./index-wtd-kRKG.js";import"./CartesianChart-SvhUL1zG.js";import"./chartDataContext-CccchDo-.js";import"./CategoricalChart-BmCM1Kvw.js";import"./CartesianAxis-FmtEoT3c.js";import"./Layer-BAK3mXOF.js";import"./Text-DubbQCtu.js";import"./DOMUtils-CnMp_f2C.js";import"./useId-CCFKlxj2.js";import"./useBackwardsCompatibleTheme-1TKRF9_G.js";import"./Label-8baFJ3SD.js";import"./ZIndexLayer-BkImCK5k.js";import"./types-BmhrOP68.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-tt8V9XJv.js";import"./step-Cw2SmsXu.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bg7iXKcU.js";import"./useAnimationId-B6Hjzqdy.js";import"./ActivePoints-CZJUt6u2.js";import"./Dot-DiXQ237y.js";import"./RegisterGraphicalItemId-I1F5nEAR.js";import"./ErrorBarContext-0wgmY52F.js";import"./GraphicalItemClipPath-C6FvMp3W.js";import"./SetGraphicalItem-DjVLiBcR.js";import"./getRadiusAndStrokeWidthFromDot-D8_lJPIV.js";import"./ActiveShapeUtils-7Ik4Y1iY.js";import"./useGraphicalItemIdentity-BUorwys7.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
