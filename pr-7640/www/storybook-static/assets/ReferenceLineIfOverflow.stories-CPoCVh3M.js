import{R as e}from"./iframe-BISZbF8S.js";import{R as n}from"./zIndexSlice-tLqWCh4O.js";import{C as p}from"./ComposedChart-Bb88RiXV.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D6cWZXXE.js";import{X as f}from"./XAxis-DhvWA3ze.js";import{Y as l}from"./YAxis-m7WuayWG.js";import{L as d}from"./Line-Ct3QeI60.js";import{R as h}from"./ReferenceLine-ClSdh-hL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-qMyvzBrr.js";import"./index-hSuJddDh.js";import"./index-DIL3iNST.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Wc0qnLHS.js";import"./isWellBehavedNumber-C9XsHOt-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-een6OCKs.js";import"./index-BW9K1TDZ.js";import"./index-Ce0beIqY.js";import"./axisSelectors-SJG9ph2l.js";import"./d3-scale-DNcorMEn.js";import"./renderedTicksSlice-bJIEIhcB.js";import"./CartesianChart-GFukGdve.js";import"./chartDataContext-iswJ2W_c.js";import"./CategoricalChart-CluxlQf_.js";import"./CartesianAxis-D7TS5Yfq.js";import"./Layer-qSEbrkuT.js";import"./Text-DWq927Nt.js";import"./DOMUtils-CTLtTqZ2.js";import"./useId-DvaMlJaB.js";import"./useBackwardsCompatibleTheme-DE0n-uz4.js";import"./Label--u0r0Ebh.js";import"./ZIndexLayer-DScewirg.js";import"./types-DYnGyjc0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DnqgdcKJ.js";import"./step-DstMREJ8.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DssiNuXL.js";import"./useAnimationId-BeL21vg8.js";import"./ActivePoints-Ccjhq822.js";import"./Dot-ClbVOSp4.js";import"./RegisterGraphicalItemId-DfyOG4VN.js";import"./ErrorBarContext-DGuh-__T.js";import"./GraphicalItemClipPath-b6ezYgAg.js";import"./SetGraphicalItem-DKxsB3By.js";import"./getRadiusAndStrokeWidthFromDot-CSyFsC-5.js";import"./ActiveShapeUtils-PTy3S8F2.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
