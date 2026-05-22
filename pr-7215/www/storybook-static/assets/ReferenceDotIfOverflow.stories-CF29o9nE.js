import{e}from"./iframe-DF4bgTei.js";import{g as n}from"./arrayEqualityCheck-BMFJWZLR.js";import{C as s}from"./ComposedChart-DBY9LGHW.js";import{p}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-BvvRwqJF.js";import{X as f}from"./XAxis-DbY3ezb1.js";import{Y as l}from"./YAxis-D734sO1U.js";import{R as h}from"./ReferenceDot-DsXSPAKc.js";import{R as d}from"./RechartsHookInspector-D-0gsnbs.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BXVR8Nu8.js";import"./immer-MYTD12gY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQPl6oVo.js";import"./index-BTdRTt63.js";import"./hooks-XeIQ09GK.js";import"./axisSelectors-r3e8Ogcr.js";import"./d3-scale-Dig20Cak.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-zLQdFJPR.js";import"./renderedTicksSlice-CPjOMDMT.js";import"./CartesianChart-DiQ110-r.js";import"./chartDataContext-nbJQ4Evh.js";import"./CategoricalChart-BwOuhOYL.js";import"./CartesianAxis-OtzrWNBq.js";import"./Layer-B2y3FrWZ.js";import"./Text-Cn-CsKa2.js";import"./DOMUtils-C5ULhfnp.js";import"./Label-BpQxBJRP.js";import"./ZIndexLayer-k5HrhQv7.js";import"./types-D1G2vCVO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BYGa6gij.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BJloLEZI.js";import"./ChartSizeDimensions-BYrQZ-ie.js";import"./OffsetShower-adDhQ1RV.js";import"./PlotAreaShower-CsKiIBy8.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
