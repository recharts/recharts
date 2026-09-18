import{R as e}from"./iframe-Ddpx1fWB.js";import{R as a}from"./zIndexSlice-Dat8LqkZ.js";import{C as p}from"./ComposedChart-TNMAuPjN.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BvwS9IKd.js";import{X as f}from"./XAxis-8Q1XE2yS.js";import{Y as l}from"./YAxis-pV8_VGP8.js";import{L as d}from"./Line-Cu73NfCf.js";import{R as h}from"./ReferenceLine-Bw3Vszsg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Ergr3tXF.js";import"./index-BHGR1bQY.js";import"./index-C2RGX2bO.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BLbyA7M-.js";import"./isWellBehavedNumber-PbzFmx8z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-FUuE5Yxf.js";import"./axisSelectors-CiMHZLFM.js";import"./d3-scale-NbpcncSt.js";import"./index-zj--lfIw.js";import"./index-wao6mAsQ.js";import"./renderedTicksSlice-DtbmQ7NB.js";import"./index-C_z5dzD1.js";import"./CartesianChart-DITQYbNx.js";import"./chartDataContext-XIbG-eFQ.js";import"./CategoricalChart-DNv1TYBb.js";import"./CartesianAxis-3VtOE9qK.js";import"./Layer-BY9KVYkA.js";import"./Text-CA0gQCIk.js";import"./DOMUtils-njKIQFOw.js";import"./useId-HK3tGk78.js";import"./useBackwardsCompatibleTheme-DbKpiFxe.js";import"./Label-CuNWF2Cl.js";import"./ZIndexLayer-DWZuS9R-.js";import"./types-C_VxKCLR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-ZF8x5Xsx.js";import"./step-Dtj6_Cxq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D2-ekEtz.js";import"./useAnimationId-B2yc1CEt.js";import"./ActivePoints-BO0qnNRs.js";import"./Dot-Wca6oVOE.js";import"./RegisterGraphicalItemId-BPWJzGfs.js";import"./ErrorBarContext-VVT7--30.js";import"./GraphicalItemClipPath-BJA8iJ0Z.js";import"./SetGraphicalItem-wnpZS34C.js";import"./getRadiusAndStrokeWidthFromDot-DUoLQNHB.js";import"./ActiveShapeUtils-CuFPShbj.js";import"./useGraphicalItemIdentity-CUnlnBu6.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
