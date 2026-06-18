import{R as e}from"./iframe-JB04ITxe.js";import{R as n}from"./zIndexSlice-BedYLUjR.js";import{C as p}from"./ComposedChart-CSTLjLz1.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CZgFqwEN.js";import{X as f}from"./XAxis-2CswrS5Z.js";import{Y as l}from"./YAxis-v1vqqyLW.js";import{L as d}from"./Line-CHJHx0C6.js";import{R as h}from"./ReferenceLine-CeVPvFnf.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D_wC7bH8.js";import"./index-CloOaeIj.js";import"./index-BR_ntmTV.js";import"./get-BDmTa2no.js";import"./resolveDefaultProps-DnK0dHNE.js";import"./isWellBehavedNumber-CWoD1Zwt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D_Mnb6wJ.js";import"./index-BMvw03mU.js";import"./index-BEbfCQUB.js";import"./renderedTicksSlice-C53CIbMu.js";import"./axisSelectors-OGGKPVta.js";import"./d3-scale-BSQ4FewF.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Ck5tcGy8.js";import"./chartDataContext-gfaUTl-k.js";import"./CategoricalChart-PrNOUwgL.js";import"./CartesianAxis-Ck1yZ59m.js";import"./Layer-CC5P43nm.js";import"./Text-C7k8RhMi.js";import"./DOMUtils-B7gcLuLP.js";import"./Label-D1e3845Y.js";import"./ZIndexLayer-tYN38LXC.js";import"./types-BtpCwQ36.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-JVKmUUOc.js";import"./step-Dr-jp1Wr.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BaII0Say.js";import"./useAnimationId-IX-vmahP.js";import"./ActivePoints-Cs1OZT7v.js";import"./Dot-CiBnQwda.js";import"./RegisterGraphicalItemId-DJtDudBg.js";import"./ErrorBarContext-oGwgz47-.js";import"./GraphicalItemClipPath-B64UzPte.js";import"./SetGraphicalItem-bHcm5Lyp.js";import"./getRadiusAndStrokeWidthFromDot-1qwqcEV-.js";import"./ActiveShapeUtils-BF3URPPF.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
