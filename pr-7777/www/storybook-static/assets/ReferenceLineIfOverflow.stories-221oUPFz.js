import{R as e}from"./iframe-DsVopAcH.js";import{R as a}from"./zIndexSlice-CGOHGuEy.js";import{C as p}from"./ComposedChart-BQuW28P0.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DMEqPaVA.js";import{X as f}from"./XAxis-BseTd926.js";import{Y as l}from"./YAxis-HRdYePVo.js";import{L as d}from"./Line-BldwsFH2.js";import{R as h}from"./ReferenceLine-EPGsO-vV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BobbsZsr.js";import"./index-BVvb2y__.js";import"./index-CFv1WTge.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BHrKsPc_.js";import"./isWellBehavedNumber-Br_jDsOR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BRE0A59j.js";import"./axisSelectors-Dgut4uty.js";import"./d3-scale-Eru_6FDY.js";import"./index-Ds1bCQEW.js";import"./index-B91uvtzr.js";import"./renderedTicksSlice-C8E6fsP2.js";import"./index-C4MX6gyH.js";import"./CartesianChart-B1PZqYEM.js";import"./chartDataContext-C5PzVTiP.js";import"./CategoricalChart-Cry5pYjh.js";import"./CartesianAxis-DUwX43Tg.js";import"./Layer-BiKMlTZw.js";import"./Text-nN9fGOPh.js";import"./DOMUtils-DoArDhDK.js";import"./useId-B3ZiYYeF.js";import"./useBackwardsCompatibleTheme-CGfGQXHh.js";import"./Label-yfckENu2.js";import"./ZIndexLayer-D4yIu8AC.js";import"./types-BimouhM4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-wbgCoDzv.js";import"./step-B5nwCRak.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Brc7OfV1.js";import"./useAnimationId-C2i6ANfU.js";import"./ActivePoints-D3ORl2JH.js";import"./Dot-kLE6mRv4.js";import"./RegisterGraphicalItemId-BpLRWLUo.js";import"./ErrorBarContext-BW9eyXTq.js";import"./GraphicalItemClipPath-5LNoh5eI.js";import"./SetGraphicalItem-DoTInfhC.js";import"./getRadiusAndStrokeWidthFromDot-BIVN16ui.js";import"./ActiveShapeUtils-BltEi4et.js";import"./useGraphicalItemIdentity---g9lV2H.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
