import{e}from"./iframe-DrZHGfnp.js";import{g as n}from"./arrayEqualityCheck-BU1FgpAp.js";import{C as s}from"./ComposedChart-DxmmuLi3.js";import{p}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-CyZhB5js.js";import{X as f}from"./XAxis-CfPxufGn.js";import{Y as l}from"./YAxis-BDktYU23.js";import{R as h}from"./ReferenceDot-DbUTgL1E.js";import{R as d}from"./RechartsHookInspector-C7Iml_JQ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DYZAgT61.js";import"./immer-D0UXwCcn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7Mz9FPG.js";import"./index-BP-Nf1tN.js";import"./hooks-D3ynsMIn.js";import"./axisSelectors-m6_CTWOp.js";import"./d3-scale-txqkfOII.js";import"./zIndexSlice-D-dyI62l.js";import"./renderedTicksSlice-7FEKlWww.js";import"./CartesianChart-DJW3KXl1.js";import"./chartDataContext-C7FGjj0C.js";import"./CategoricalChart-iLXWxvTy.js";import"./CartesianAxis-DI4oFfLH.js";import"./Layer-ClTbBP2Y.js";import"./Text-BwWh8Zp8.js";import"./DOMUtils-DJHj6OuI.js";import"./Label-BqIF3DzG.js";import"./ZIndexLayer-BfJNfeY9.js";import"./types-6QYLxKbI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DoeZby35.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BaPlyvUD.js";import"./ChartSizeDimensions-y6v6hFmg.js";import"./OffsetShower-BQ-We3NI.js";import"./PlotAreaShower-DUTHK_JT.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
