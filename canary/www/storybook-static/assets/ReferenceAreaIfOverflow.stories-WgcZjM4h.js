import{e}from"./iframe-CCtdbun4.js";import{R as s}from"./arrayEqualityCheck-BN-qRjNh.js";import{C as p}from"./ComposedChart-BHeCK0iI.js";import{C as c}from"./CartesianGrid-DpC4y52a.js";import{X as f}from"./XAxis-Ct1i4Wo3.js";import{Y as l}from"./YAxis-BAJWEbem.js";import{R as h}from"./ReferenceArea-C6g-39aS.js";import{R as d}from"./RechartsHookInspector-nkQJYVm3.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cu5xR3IA.js";import"./immer-BcxcW3su.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CEuf5fH-.js";import"./index-DBCQ_ffx.js";import"./hooks-DXcbfnOk.js";import"./axisSelectors-BomcgeiZ.js";import"./d3-scale-CwYvmJNK.js";import"./zIndexSlice-DX2GAYEt.js";import"./renderedTicksSlice-iuxiofvQ.js";import"./CartesianChart-rX1ISTKc.js";import"./chartDataContext-D9BGjOgR.js";import"./CategoricalChart-ozbpSDhd.js";import"./CartesianAxis-DjTpORWb.js";import"./Layer-De9fsiqG.js";import"./Text-BxEo2MUu.js";import"./DOMUtils-DqJTy59P.js";import"./Label-B5ApX3Ma.js";import"./ZIndexLayer-i87njMD3.js";import"./types-W2NqahI8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-DkQFoQU0.js";import"./useAnimationId-Dw71NoSQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BAcfBBrr.js";import"./ChartSizeDimensions-BH1EyVxm.js";import"./OffsetShower-WQ852gw6.js";import"./PlotAreaShower-B-YpjWsE.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
