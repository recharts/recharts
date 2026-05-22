import{e}from"./iframe-Cag7wSRv.js";import{g as s}from"./arrayEqualityCheck-DIS5wzHQ.js";import{C as p}from"./ComposedChart-D8vYd6dl.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-wXhfwOo8.js";import{X as l}from"./XAxis-DXJVCfkD.js";import{Y as h}from"./YAxis-DZYkeOGX.js";import{R as d}from"./ReferenceArea-obOtizEC.js";import{R as x}from"./RechartsHookInspector-BY5Jlwrh.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Xc1HLF5N.js";import"./immer-284wn8VQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwHua0WY.js";import"./index-g0QlUGKs.js";import"./hooks-BrXnztNy.js";import"./axisSelectors-m8f3aizN.js";import"./d3-scale-e6S4jaCB.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-D-tflLzN.js";import"./renderedTicksSlice-CDJVjsUp.js";import"./CartesianChart-z1NmO9ak.js";import"./chartDataContext-WcgYQIEB.js";import"./CategoricalChart-CRN8hCqy.js";import"./CartesianAxis-BO6A-dYS.js";import"./Layer-BKYLP7Ft.js";import"./Text-5aD9nx6b.js";import"./DOMUtils-BK1rzgLA.js";import"./Label-C9zkgYEJ.js";import"./ZIndexLayer-DmSAjehE.js";import"./types-VwRdPpC4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-C4gj6xhs.js";import"./useAnimationId-DTrmZnPm.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BKRpgk4a.js";import"./ChartSizeDimensions-DvhfRAM1.js";import"./OffsetShower-_fcX7Can.js";import"./PlotAreaShower-DCoj4aUc.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ae=["IfOverflow"];export{t as IfOverflow,ae as __namedExportsOrder,oe as default};
