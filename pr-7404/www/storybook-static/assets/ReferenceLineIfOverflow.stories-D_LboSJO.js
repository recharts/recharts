import{R as e}from"./iframe-DeM0Qb4B.js";import{R as n}from"./zIndexSlice-CiNLGVRc.js";import{C as p}from"./ComposedChart-Q8wzdF4e.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-De-sYFa2.js";import{X as f}from"./XAxis-D6dtEk3_.js";import{Y as l}from"./YAxis-GdnxXDj_.js";import{L as d}from"./Line-DTawiR2y.js";import{R as h}from"./ReferenceLine-CjeWBYmG.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CXrDBfBc.js";import"./index-BsvTaB6O.js";import"./index-BeHf8kjF.js";import"./get-CMIg51n-.js";import"./resolveDefaultProps-CHkmO4Nn.js";import"./isWellBehavedNumber-Dt1ZDNIe.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bw4I8ksO.js";import"./index-D_HWn2_u.js";import"./index-B-tkzYsG.js";import"./renderedTicksSlice-l4NOSov1.js";import"./axisSelectors-DWmGSiam.js";import"./d3-scale-BzB7iPcR.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Bfusz6lr.js";import"./chartDataContext-HoVJk3bG.js";import"./CategoricalChart-nLEaw9lU.js";import"./CartesianAxis-C8MJ9nCV.js";import"./Layer-B3W7tn4T.js";import"./Text-BRAU_A6N.js";import"./DOMUtils-D2W98joL.js";import"./Label-C5gMwwTi.js";import"./ZIndexLayer-DorZCPdG.js";import"./types-C10ohCRK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DAs23S9W.js";import"./step-B11PQnh8.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-q3oAcZv4.js";import"./useAnimationId-PwiLcg7B.js";import"./ActivePoints-B-QpMSVH.js";import"./Dot-DnzKtKhK.js";import"./RegisterGraphicalItemId-CqW9ab1A.js";import"./ErrorBarContext-Cu0ArMmH.js";import"./GraphicalItemClipPath-BHo-wJHw.js";import"./SetGraphicalItem-zGGg2ijs.js";import"./getRadiusAndStrokeWidthFromDot-DKEbDMSV.js";import"./ActiveShapeUtils-BOazUucV.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
