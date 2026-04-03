import{e}from"./iframe-C3UZ-t_V.js";import{R as n}from"./arrayEqualityCheck-DIL50JWa.js";import{C as s}from"./ComposedChart-C4m1Eygp.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D2p0Ir6T.js";import{X as f}from"./XAxis-DMAObJwa.js";import{Y as l}from"./YAxis-B5LKtkqe.js";import{R as h}from"./ReferenceDot-Bc8ITFmR.js";import{R as d}from"./RechartsHookInspector-BFtfPmXC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-aaXGpNRZ.js";import"./immer-Bf7Gcqi0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bsvy-j69.js";import"./index-ClWM-yv2.js";import"./hooks-DPl2sBv5.js";import"./axisSelectors-DmOEhaOy.js";import"./d3-scale-UHw6FirY.js";import"./zIndexSlice-Dx4k4ZlJ.js";import"./renderedTicksSlice-CLnyFrSg.js";import"./CartesianChart-BmK7YYly.js";import"./chartDataContext-BmElG8Xh.js";import"./CategoricalChart-DaGR7SKz.js";import"./CartesianAxis-CYGD0r1r.js";import"./Layer-CI6sC4Pl.js";import"./Text-DPTsyd0A.js";import"./DOMUtils-BUXVBs_y.js";import"./Label-BrcoQVek.js";import"./ZIndexLayer-D78RDR2e.js";import"./types-5hKD9RW5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-CQmFG6vz.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-iiKok6sI.js";import"./ChartSizeDimensions-C9L6kdtQ.js";import"./OffsetShower-DbJZQebV.js";import"./PlotAreaShower-B5C3jvki.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
