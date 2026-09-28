import{R as e}from"./iframe-B0ZE5sWn.js";import{R as a}from"./zIndexSlice-CRYD7Kkj.js";import{C as p}from"./ComposedChart-B-9abW7J.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DO5IH5o1.js";import{X as f}from"./XAxis-DxhJhgqY.js";import{Y as l}from"./YAxis-CIOXXUEI.js";import{L as d}from"./Line-ChohRp9N.js";import{R as h}from"./ReferenceLine-neiOW7a5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D8bbTBc2.js";import"./index-DSEHXiiH.js";import"./index-CVaJFnop.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DkU3qXBk.js";import"./isWellBehavedNumber-c-pVuqcz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D_J70Kvy.js";import"./axisSelectors-CmZ6PEb7.js";import"./d3-scale-BSLND3-m.js";import"./index-CUIhphZ8.js";import"./index-CrLSWODu.js";import"./renderedTicksSlice-2DEyX82P.js";import"./index-x3K7igv_.js";import"./CartesianChart-DEyr3eWS.js";import"./chartDataContext-C_Y-GQC5.js";import"./CategoricalChart-BW6OVLWc.js";import"./CartesianAxis-Cze39DWA.js";import"./Layer-B5uUwgDJ.js";import"./Text-hT0G9UKp.js";import"./DOMUtils-BtIen-TW.js";import"./useId-CIOpxIEE.js";import"./useBackwardsCompatibleTheme-C9hE96Ha.js";import"./Label-CDRY23He.js";import"./ZIndexLayer-COO7NwIi.js";import"./types-CvLOqkZ2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DHsBKDuU.js";import"./step-CGkCO3y3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DDDw_SSj.js";import"./useAnimationId-xIPnyE2V.js";import"./ActivePoints-jrQT7wQp.js";import"./Dot-BuzDkghy.js";import"./RegisterGraphicalItemId-DvHsssZk.js";import"./ErrorBarContext-DIoqVk5E.js";import"./GraphicalItemClipPath-CP8DwxaV.js";import"./SetGraphicalItem-AgCaMkoB.js";import"./getRadiusAndStrokeWidthFromDot-fsgEyTwP.js";import"./ActiveShapeUtils-DW159Z87.js";import"./useGraphicalItemIdentity-DKLRMGU-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
