import{e}from"./iframe-Byw-Ecda.js";import{R as n}from"./arrayEqualityCheck-DJZ_H245.js";import{C as p}from"./ComposedChart-CAduK1a5.js";import{C as s}from"./CartesianGrid-Ulf2y6c_.js";import{X as c}from"./XAxis-DKuVnBhX.js";import{Y as f}from"./YAxis-CD7xJu8W.js";import{L as l}from"./Line-DgOW2saj.js";import{R as d}from"./ReferenceLine-C9BRmayG.js";import{R as h}from"./RechartsHookInspector-DU_Xges7.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DghbljUc.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CyPBoUJ2.js";import"./hooks-CRVJYPCv.js";import"./axisSelectors-CfRyBf_k.js";import"./zIndexSlice-BBcvffed.js";import"./CartesianChart-yzTWxCXF.js";import"./chartDataContext-BewYwNuI.js";import"./CategoricalChart-Dg1jHZIf.js";import"./CartesianAxis-C435YXcQ.js";import"./Layer-BCc3Ql-7.js";import"./Text-Co26eSaA.js";import"./DOMUtils-Cxak4Mzx.js";import"./Label-BqnP7yRk.js";import"./ZIndexLayer-CyfG8XIl.js";import"./types-C-BvOMCj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Cjy_uT2w.js";import"./ActivePoints-CxQ9IJdy.js";import"./Dot-DJVqn8HA.js";import"./RegisterGraphicalItemId-Cpx6qHuO.js";import"./ErrorBarContext-Cl5G60_X.js";import"./GraphicalItemClipPath-C339LZnB.js";import"./SetGraphicalItem-DQzHPnU7.js";import"./useAnimationId-QmVedw8X.js";import"./getRadiusAndStrokeWidthFromDot-1lozLBiZ.js";import"./ActiveShapeUtils-Dp9WPNg-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cx7cLZFF.js";import"./Trapezoid-CmsPiWji.js";import"./Sector-DvNfR6cX.js";import"./Symbols-BEvrU7lm.js";import"./Curve-Dgc9kazX.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Bq4G09kn.js";import"./ChartSizeDimensions-B0IYXKC6.js";import"./OffsetShower-BbVu_iXB.js";import"./PlotAreaShower-b86ZtdTd.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
