import{e}from"./iframe-Qw1xV4gr.js";import{R as n}from"./arrayEqualityCheck-D10Koezk.js";import{C as s}from"./ComposedChart-CNN_EKWK.js";import{C as p}from"./CartesianGrid-BN7mOFms.js";import{X as c}from"./XAxis-CBWX_4iF.js";import{Y as f}from"./YAxis-C_ExxpTj.js";import{R as l}from"./ReferenceDot-DUH7Mtp2.js";import{R as h}from"./RechartsHookInspector-D6S_l26T.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DW8BpyRT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-T9NKaIls.js";import"./hooks-vjGh_8ov.js";import"./axisSelectors-h4Qg-dXF.js";import"./zIndexSlice-oRB5pJqD.js";import"./CartesianChart-BtuqRmvy.js";import"./chartDataContext-CGZEqLdY.js";import"./CategoricalChart-DwNQ2qMJ.js";import"./CartesianAxis-Dn5CLCwG.js";import"./Layer-CkwgDlKc.js";import"./Text-A6EoaQwg.js";import"./DOMUtils-BhiXkbhO.js";import"./Label-BQ6NoHU2.js";import"./ZIndexLayer-E7tGttad.js";import"./types-BYf8q4m4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-nhXnmJfZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BwnoBx2f.js";import"./ChartSizeDimensions-6-fxO9GV.js";import"./OffsetShower-DJSy3W4i.js";import"./PlotAreaShower-h9EpJlJs.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
