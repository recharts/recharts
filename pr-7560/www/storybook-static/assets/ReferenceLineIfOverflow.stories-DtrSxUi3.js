import{R as e}from"./iframe-CkvJyCps.js";import{R as n}from"./zIndexSlice-Ui89VFRT.js";import{C as p}from"./ComposedChart-B_G7W1UH.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CZK0Ig3T.js";import{X as f}from"./XAxis-Cs2owod8.js";import{Y as l}from"./YAxis-DiR5kzGo.js";import{L as d}from"./Line-BWXEwsOW.js";import{R as h}from"./ReferenceLine-Dv_U68Og.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DgDNnF1i.js";import"./index-BX-3EqNW.js";import"./index-BsiD65Ad.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DCKyJEY4.js";import"./isWellBehavedNumber-DqH8GE3H.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CjY8J2vT.js";import"./index-Cjf8FZO7.js";import"./index-D8Jo1LfZ.js";import"./renderedTicksSlice-BMi6DZwf.js";import"./axisSelectors-CC2H0zuo.js";import"./d3-scale-Crqr5kEu.js";import"./CartesianChart-DFWFnz0T.js";import"./chartDataContext-BT6jQe_1.js";import"./CategoricalChart-E0pKYNLO.js";import"./CartesianAxis-mgc-X0Bi.js";import"./Layer-C4byj5K8.js";import"./Text-R9sJDfcz.js";import"./DOMUtils-CxWIP_C8.js";import"./Label-BMESeQSE.js";import"./ZIndexLayer-t0g3b6Ty.js";import"./types-CzkLD6k1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-OKr52WO3.js";import"./step-KO3U5RtM.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CNADXJdo.js";import"./useAnimationId-jBCdM9CL.js";import"./ActivePoints-D5IySJuv.js";import"./Dot-CltbR6Uk.js";import"./RegisterGraphicalItemId-p5LXpBOx.js";import"./ErrorBarContext-CbXX-ZBj.js";import"./GraphicalItemClipPath-Ci1KSEKS.js";import"./SetGraphicalItem-BSfhP0b_.js";import"./getRadiusAndStrokeWidthFromDot-BhqCzyG1.js";import"./ActiveShapeUtils-DlrbS-G4.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const le=["IfOverflow"];export{t as IfOverflow,le as __namedExportsOrder,fe as default};
