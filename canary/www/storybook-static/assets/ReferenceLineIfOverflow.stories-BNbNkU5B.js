import{e}from"./iframe-BJmj21Iv.js";import{R as n}from"./arrayEqualityCheck-DUr5Baor.js";import{C as p}from"./ComposedChart-Qt-NTGDC.js";import{C as s}from"./CartesianGrid-C729DxfB.js";import{X as c}from"./XAxis-B-U8Jsdu.js";import{Y as f}from"./YAxis-BnZN_5Sd.js";import{L as l}from"./Line-BQi0Q9VA.js";import{R as d}from"./ReferenceLine-BPRkaC6_.js";import{R as h}from"./RechartsHookInspector-niLfVp7l.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BRnWZzOd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbAa2EPs.js";import"./hooks-B5MTKyny.js";import"./axisSelectors-CjDiZ-xu.js";import"./zIndexSlice-COvs_Sat.js";import"./CartesianChart-DEbVCltq.js";import"./chartDataContext-Cx9KpUyq.js";import"./CategoricalChart-B8_cyiQX.js";import"./CartesianAxis-BAnw5oBq.js";import"./Layer-CfTs1qEr.js";import"./Text-DA6O7Yy4.js";import"./DOMUtils-CQprm85Q.js";import"./Label-B5aPNwUF.js";import"./ZIndexLayer-h8hw7e3y.js";import"./types-BB2yvksg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-B_n9e2df.js";import"./ActivePoints-BJiO-RId.js";import"./Dot-C-sAwJUZ.js";import"./RegisterGraphicalItemId-DTHmNv35.js";import"./ErrorBarContext-DSxRheLC.js";import"./GraphicalItemClipPath-CzdqANMv.js";import"./SetGraphicalItem-DUq8N8zo.js";import"./useAnimationId-BtjxpnPj.js";import"./getRadiusAndStrokeWidthFromDot-D1oY8r7_.js";import"./ActiveShapeUtils-COxfqJFr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BtPz-Bf1.js";import"./Trapezoid-DUAp6hoC.js";import"./Sector-Dq6mbUDa.js";import"./Symbols-Li-QgOej.js";import"./Curve-DSyQRjp9.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Bcx4MYAQ.js";import"./ChartSizeDimensions-DzMxt8cg.js";import"./OffsetShower-Do6Xki0H.js";import"./PlotAreaShower-CQq3hYEg.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
