import{e}from"./iframe-CxCywqzA.js";import{g as n}from"./arrayEqualityCheck-yVNwB6mW.js";import{C as s}from"./ComposedChart-CX5jdlg2.js";import{p}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-CEtYYjUH.js";import{X as f}from"./XAxis-_gXpBYMm.js";import{Y as l}from"./YAxis-DxVfrwf5.js";import{R as h}from"./ReferenceDot-DS-AAIo0.js";import{R as d}from"./RechartsHookInspector-DGOvaE6a.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyFfO_sZ.js";import"./immer-B8hoAty4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ReU4AUnJ.js";import"./index-Pf0lqjAZ.js";import"./hooks-bOP2AOQf.js";import"./axisSelectors-DhlA5n5_.js";import"./d3-scale-CxndOeQp.js";import"./zIndexSlice-DVQoyP0x.js";import"./renderedTicksSlice-D6OwKyas.js";import"./CartesianChart-DzAU9ZU1.js";import"./chartDataContext-DIpKw8P8.js";import"./CategoricalChart-Bsvtk9Il.js";import"./CartesianAxis-CJvJrEPT.js";import"./Layer-BIf3cKek.js";import"./Text-D9QqhyNw.js";import"./DOMUtils-C_VBv5EQ.js";import"./Label-C7vnjRze.js";import"./ZIndexLayer-DP6IzTUW.js";import"./types-ou1XrYCh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-D7kdX87a.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DGGA_IR8.js";import"./ChartSizeDimensions-CFycJ4k1.js";import"./OffsetShower-BkZVXWFE.js";import"./PlotAreaShower-BM-3w1mr.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
