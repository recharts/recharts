import{e}from"./iframe-Cn9771Nb.js";import{g as s}from"./arrayEqualityCheck-D-ixwH56.js";import{C as p}from"./ComposedChart-GHVX126K.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-GyJpwBAe.js";import{X as l}from"./XAxis-CdGr2Iem.js";import{Y as h}from"./YAxis-TQXh0mQm.js";import{R as d}from"./ReferenceArea-CulePLCK.js";import{R as x}from"./RechartsHookInspector-ByD7qz5q.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DDTNdovN.js";import"./immer-Dn_-MauB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-1z_kIANU.js";import"./index-BoXkF8M8.js";import"./hooks-O4XLkxr8.js";import"./axisSelectors-BMVy_6Bx.js";import"./d3-scale-BZXwjMGy.js";import"./zIndexSlice-B5zV17Bd.js";import"./renderedTicksSlice-CwaBKoDv.js";import"./CartesianChart-B8UuiIR4.js";import"./chartDataContext-DlTJMN40.js";import"./CategoricalChart-Doln_IjV.js";import"./CartesianAxis-DUvQ6ZkT.js";import"./Layer-CoWJhcnT.js";import"./Text-Ds1KECTG.js";import"./DOMUtils-CumEt8nf.js";import"./Label-DQheKZVl.js";import"./ZIndexLayer-DUDNhmE-.js";import"./types-BeorWpRA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-DHVB8KHg.js";import"./useAnimationId-5N3XsSyx.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CIRzOza-.js";import"./ChartSizeDimensions-BsavwcKk.js";import"./OffsetShower-mfqGnir7.js";import"./PlotAreaShower-DtKJCQsO.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
