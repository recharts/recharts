import{R as e}from"./iframe-WAmwAwqv.js";import{R as n}from"./zIndexSlice-B7760TIp.js";import{C as p}from"./ComposedChart-CXlUTja7.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C_zE1Adm.js";import{X as f}from"./XAxis-C0HQ7bAn.js";import{Y as l}from"./YAxis-CvqgpJJX.js";import{L as d}from"./Line-DurF_OOw.js";import{R as h}from"./ReferenceLine-C4-tQXXF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DaWJmTtS.js";import"./index-dES25ELm.js";import"./index-BtWjEEaM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-SfzQDdEE.js";import"./isWellBehavedNumber-BFdGE5VX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DKs-TVlY.js";import"./index-BrLHScrZ.js";import"./index-BaF8VV2T.js";import"./axisSelectors-P4MAoEAr.js";import"./d3-scale-B9CJnMVD.js";import"./renderedTicksSlice-QjUf-6mF.js";import"./CartesianChart-1FQk5Fvk.js";import"./chartDataContext-DyeMEqHY.js";import"./CategoricalChart-BhQV0u5E.js";import"./CartesianAxis-BJa8Ix1s.js";import"./Layer-CduouMU4.js";import"./Text-BQOM4h-3.js";import"./DOMUtils-BipZejVj.js";import"./useId-C6WCz-Hg.js";import"./useBackwardsCompatibleTheme-BbiUPV5J.js";import"./Label-BI58xTcy.js";import"./ZIndexLayer-BMgwtUUQ.js";import"./types-MF287rET.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-sYCo-eDU.js";import"./step-BqQm5Gfz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dygs4a37.js";import"./useAnimationId-DhhiM2kh.js";import"./ActivePoints-CCxDSDuJ.js";import"./Dot-BMicymMQ.js";import"./RegisterGraphicalItemId-eBpDv0na.js";import"./ErrorBarContext-BIoHTUJq.js";import"./GraphicalItemClipPath-Dnbhxb72.js";import"./SetGraphicalItem-CTKvKbys.js";import"./getRadiusAndStrokeWidthFromDot-7A-aLYCL.js";import"./ActiveShapeUtils-C0CPvy3n.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
