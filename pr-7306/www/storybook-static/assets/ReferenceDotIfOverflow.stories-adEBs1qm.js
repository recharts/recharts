import{e}from"./iframe-CA8OhNxH.js";import{R as n}from"./arrayEqualityCheck-CL-Z01lB.js";import{C as s}from"./ComposedChart-CxMwSzAt.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DPgyLHnL.js";import{X as f}from"./XAxis-fFf7Kpu6.js";import{Y as l}from"./YAxis-DXR1Un-U.js";import{R as h}from"./ReferenceDot-fjxNQyvg.js";import{R as d}from"./RechartsHookInspector-BugLDhSF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C1cg3qcu.js";import"./immer-CLqkMfUW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CXeUN3o5.js";import"./index-CuTjkf5v.js";import"./hooks-CyxhoeqI.js";import"./axisSelectors-BooSDkXq.js";import"./d3-scale-DD8ooXHD.js";import"./zIndexSlice-DR6ZwnqZ.js";import"./renderedTicksSlice-DkCMmWDM.js";import"./CartesianChart-DIopKqdp.js";import"./chartDataContext-BaaZuqtU.js";import"./CategoricalChart-G3zYlJLo.js";import"./CartesianAxis-f2zOKi0X.js";import"./Layer-51jxPk-z.js";import"./Text-QadmgfLW.js";import"./DOMUtils-BdRmP8Tt.js";import"./Label-B9rEotsE.js";import"./ZIndexLayer-BbCOJVvb.js";import"./types-DIwXheU2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-y1vkSdnO.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BZ4hO2WS.js";import"./ChartSizeDimensions-CM9slMDG.js";import"./OffsetShower-B_M2I77E.js";import"./PlotAreaShower-gcaUHmcI.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
