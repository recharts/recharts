import{e}from"./iframe-Bm_dlztP.js";import{R as n}from"./arrayEqualityCheck-BKx_y40S.js";import{C as s}from"./ComposedChart-DyBYNAPL.js";import{C as p}from"./CartesianGrid-D8kzHBwE.js";import{X as c}from"./XAxis-DiBdkzoV.js";import{Y as f}from"./YAxis-Dt19AUea.js";import{R as l}from"./ReferenceDot-AhXi5Dp0.js";import{R as h}from"./RechartsHookInspector-CZNQLUTJ.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DAVx7IVS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BufFVb6a.js";import"./hooks-QfdSjeut.js";import"./axisSelectors-BUAas6a1.js";import"./zIndexSlice-Bq54Z1bK.js";import"./CartesianChart-BEFObzU7.js";import"./chartDataContext-D60asm_F.js";import"./CategoricalChart-DinCBVKr.js";import"./CartesianAxis-Df-SQWPS.js";import"./Layer-DqzpUDSE.js";import"./Text-BE0vw9O_.js";import"./DOMUtils-BT5kncNa.js";import"./Label-CDVZMFBi.js";import"./ZIndexLayer-BWJMOT1A.js";import"./types-DmFvG4SC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DVC6PvDp.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DBvu736D.js";import"./ChartSizeDimensions-vZmS1AK4.js";import"./OffsetShower-D1dBuDTC.js";import"./PlotAreaShower-CncsJcTH.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
