import{R as e}from"./iframe-JCMHkfpO.js";import{R as n}from"./zIndexSlice-Cbic3BON.js";import{C as p}from"./ComposedChart-BVs57za7.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CDYslKd5.js";import{X as f}from"./XAxis-CBMMNbSw.js";import{Y as l}from"./YAxis-OgBkmni0.js";import{L as d}from"./Line-WjI1QEi3.js";import{R as h}from"./ReferenceLine-BtV155VU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DlFFEpQV.js";import"./index-D8yPwBIb.js";import"./index-Ds8zJsBP.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CNbvqjMv.js";import"./isWellBehavedNumber-K1PO631O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-nbVSXC9z.js";import"./index-Bt8eCKRM.js";import"./index-QEaCAJHN.js";import"./axisSelectors-BpNs_jFY.js";import"./d3-scale-BsjeCU8L.js";import"./renderedTicksSlice-BRnimtTJ.js";import"./CartesianChart-Be_k-GK6.js";import"./chartDataContext-DRtbDYDE.js";import"./CategoricalChart-Do9lblK2.js";import"./CartesianAxis-B0p8oTh4.js";import"./Layer-DW0R6u6Q.js";import"./Text-H5O9sMOg.js";import"./DOMUtils-lO18r89G.js";import"./useId-5LAcqd5g.js";import"./useBackwardsCompatibleTheme-BlAxrm86.js";import"./Label-DgnjH2BN.js";import"./ZIndexLayer-DZJzCe6C.js";import"./types-CrNZa3RP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-YTzEjIYa.js";import"./step-CcEA6ZtU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-dkTJaSWs.js";import"./useAnimationId-CtDYtQmo.js";import"./ActivePoints-B2ZGk6hG.js";import"./Dot-CefwgMiR.js";import"./RegisterGraphicalItemId-DyknErxM.js";import"./ErrorBarContext-IV7IvqZh.js";import"./GraphicalItemClipPath-BifFhr-e.js";import"./SetGraphicalItem-BPezHgiz.js";import"./getRadiusAndStrokeWidthFromDot-Bo70O2Eq.js";import"./ActiveShapeUtils-2F7jkNpt.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
