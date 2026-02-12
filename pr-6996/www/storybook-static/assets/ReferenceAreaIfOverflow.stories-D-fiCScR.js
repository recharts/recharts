import{e}from"./iframe-Qw1xV4gr.js";import{R as s}from"./arrayEqualityCheck-D10Koezk.js";import{C as p}from"./ComposedChart-CNN_EKWK.js";import{C as c}from"./CartesianGrid-BN7mOFms.js";import{X as f}from"./XAxis-CBWX_4iF.js";import{Y as l}from"./YAxis-C_ExxpTj.js";import{R as h}from"./ReferenceArea-D3i7aWXO.js";import{R as d}from"./RechartsHookInspector-D6S_l26T.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DW8BpyRT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-T9NKaIls.js";import"./hooks-vjGh_8ov.js";import"./axisSelectors-h4Qg-dXF.js";import"./zIndexSlice-oRB5pJqD.js";import"./CartesianChart-BtuqRmvy.js";import"./chartDataContext-CGZEqLdY.js";import"./CategoricalChart-DwNQ2qMJ.js";import"./CartesianAxis-Dn5CLCwG.js";import"./Layer-CkwgDlKc.js";import"./Text-A6EoaQwg.js";import"./DOMUtils-BhiXkbhO.js";import"./Label-BQ6NoHU2.js";import"./ZIndexLayer-E7tGttad.js";import"./types-BYf8q4m4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-sthHTnfU.js";import"./useAnimationId-CmKwPH-s.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BwnoBx2f.js";import"./ChartSizeDimensions-6-fxO9GV.js";import"./OffsetShower-DJSy3W4i.js";import"./PlotAreaShower-h9EpJlJs.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
