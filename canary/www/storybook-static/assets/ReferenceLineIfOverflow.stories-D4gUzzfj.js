import{R as e}from"./iframe-Bva2xGHH.js";import{R as n}from"./zIndexSlice-DeikvbmU.js";import{C as p}from"./ComposedChart-CvLJWAQC.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-TRCTuU41.js";import{X as f}from"./XAxis-CsoDjkEh.js";import{Y as l}from"./YAxis-B36u7uIT.js";import{L as d}from"./Line-CogWmZIW.js";import{R as h}from"./ReferenceLine-CACTNm9k.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CFyzV36U.js";import"./index-Bo6z76Fs.js";import"./index-DT3MRaoS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BuBoAocm.js";import"./isWellBehavedNumber-D9_2opJl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkrfE3IH.js";import"./index-VUoyG6xU.js";import"./index-EwtDjp0y.js";import"./axisSelectors-1RAYR2bl.js";import"./d3-scale-CJSi8F9P.js";import"./renderedTicksSlice-CmjvxnPV.js";import"./CartesianChart-KP50bz7-.js";import"./chartDataContext-DHJzh3Cw.js";import"./CategoricalChart-DYOSFUHe.js";import"./CartesianAxis-aOVQqLXO.js";import"./Layer-PgPW5wj-.js";import"./Text-D8IJbXoV.js";import"./DOMUtils-CMvwzHzQ.js";import"./useId-Bwx6_eZW.js";import"./useBackwardsCompatibleTheme-3vkLTFmK.js";import"./Label-Dki1vWaX.js";import"./ZIndexLayer-B1sYnbf5.js";import"./types-CDHj9Y5Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C5PYz-5A.js";import"./step-C1KJzklo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dw2l639N.js";import"./useAnimationId-DDHow2US.js";import"./ActivePoints-DDTXKmxX.js";import"./Dot-TiF0MySe.js";import"./RegisterGraphicalItemId-CycuLbwA.js";import"./ErrorBarContext-tOF5cXSF.js";import"./GraphicalItemClipPath-D8nHpKQ-.js";import"./SetGraphicalItem-482J7PRy.js";import"./getRadiusAndStrokeWidthFromDot-D-WW1Ids.js";import"./ActiveShapeUtils-zdhhOiSb.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
