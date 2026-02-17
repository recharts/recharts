import{e}from"./iframe-BekWtzeP.js";import{R as n}from"./arrayEqualityCheck-Dex07G1y.js";import{C as s}from"./ComposedChart-wZSx9jy7.js";import{C as p}from"./CartesianGrid-BBzAe3s9.js";import{X as c}from"./XAxis-BaakOQmt.js";import{Y as f}from"./YAxis-D6pypf8E.js";import{R as l}from"./ReferenceDot-C4OCx71p.js";import{R as h}from"./RechartsHookInspector-DYfLD4ov.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DM_sVtnW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BLym1DZ5.js";import"./hooks-M7JbNACE.js";import"./axisSelectors-dkELBwuo.js";import"./zIndexSlice-C6dUOqXj.js";import"./renderedTicksSlice-Cs1v0Weq.js";import"./CartesianChart-DBKl6El9.js";import"./chartDataContext-DIse9eKf.js";import"./CategoricalChart-DjOHDvdh.js";import"./CartesianAxis-CVhNrsBY.js";import"./Layer-Bfyqa5-M.js";import"./Text-GqnKFCwL.js";import"./DOMUtils-BX7aw3nI.js";import"./Label-Co8l3-0E.js";import"./ZIndexLayer-BEmVcKyp.js";import"./types-BAUrPFwC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DROJJWRy.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D7stEGDS.js";import"./ChartSizeDimensions-BIF9SI6Q.js";import"./OffsetShower-BzXSvdvm.js";import"./PlotAreaShower-fI9VNU4p.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
