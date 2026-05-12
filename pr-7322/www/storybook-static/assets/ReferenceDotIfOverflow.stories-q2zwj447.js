import{e}from"./iframe-Br7b33cR.js";import{R as n}from"./arrayEqualityCheck-BDKsVEjv.js";import{C as s}from"./ComposedChart-BA7IAlKp.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CELJYdNz.js";import{X as f}from"./XAxis-TVgTAVSm.js";import{Y as l}from"./YAxis-BOEj2uLm.js";import{R as h}from"./ReferenceDot-Cv1yrYU0.js";import{R as d}from"./RechartsHookInspector-DLRUlTlC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CdmMjLyp.js";import"./immer-BhWlJGD4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D63T188Y.js";import"./index-DVsOwuOo.js";import"./hooks-BC1xVB-F.js";import"./axisSelectors-hQ7yLifF.js";import"./d3-scale-DdreInNE.js";import"./zIndexSlice-DsbsVgFf.js";import"./renderedTicksSlice-BcwlNeh2.js";import"./CartesianChart-Cn-qy5pU.js";import"./chartDataContext-CpalcXUw.js";import"./CategoricalChart-xWzy3I98.js";import"./CartesianAxis-Dlnx8Z1G.js";import"./Layer-IwfPtrhx.js";import"./Text-D-_zWi9U.js";import"./DOMUtils-B_HE9eSD.js";import"./Label-SApjRgym.js";import"./ZIndexLayer-D-LZtBsa.js";import"./types-CjQO2tSW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-D2QBiTth.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Cr6FWzjz.js";import"./ChartSizeDimensions-D_sBOB8N.js";import"./OffsetShower-dRSZPBrC.js";import"./PlotAreaShower-BUasdGew.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
