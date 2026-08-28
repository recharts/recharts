import{R as e}from"./iframe-BTdOdF9K.js";import{R as n}from"./zIndexSlice-CcQiDZWo.js";import{C as p}from"./ComposedChart-BNTkSnPn.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-72MKf0pk.js";import{X as f}from"./XAxis-BHkAQnNg.js";import{Y as l}from"./YAxis-D6a9CyOE.js";import{L as d}from"./Line-D-0vjVan.js";import{R as h}from"./ReferenceLine-BtfXrZ34.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BGr8RGVS.js";import"./index-Cq8tu8wQ.js";import"./index-Ced2HG28.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CYx6Kk4A.js";import"./isWellBehavedNumber-ZiYy0LNM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DRLvm4aR.js";import"./axisSelectors-CEXy452f.js";import"./d3-scale-B2K1_ofr.js";import"./index-uQqEtlSq.js";import"./index-CwuReyQ-.js";import"./renderedTicksSlice-CwdI_hq1.js";import"./index-DifGdyog.js";import"./CartesianChart-DxgKFkUN.js";import"./chartDataContext-BIlbUR4j.js";import"./CategoricalChart-CWtNWW3W.js";import"./CartesianAxis-Bjag6PpJ.js";import"./Layer-BIBCumPU.js";import"./Text-ad69v4o0.js";import"./DOMUtils-D3jMOIM3.js";import"./useId-R0lZrYSa.js";import"./useBackwardsCompatibleTheme-CO-7LDmO.js";import"./Label-Cm499Ers.js";import"./ZIndexLayer-C5GGlVd8.js";import"./types-DjPeWPew.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-D7vA0Myr.js";import"./step-DMCy-hl7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DKFfKX33.js";import"./useAnimationId-C9O8Tbu7.js";import"./ActivePoints-DEDNVxhq.js";import"./Dot-C09h-5Zk.js";import"./RegisterGraphicalItemId-CtQfyEXD.js";import"./ErrorBarContext-CqdXJ3Jz.js";import"./GraphicalItemClipPath-BNHF0YUS.js";import"./SetGraphicalItem-CBZad1k7.js";import"./getRadiusAndStrokeWidthFromDot-CXK6U_2t.js";import"./ActiveShapeUtils-HwCQ4yPj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ye=["IfOverflow"];export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
