import{e}from"./iframe-BnXWjslm.js";import{R as n}from"./arrayEqualityCheck-DUiNH6C9.js";import{C as s}from"./ComposedChart-DYkYyYwm.js";import{C as p}from"./CartesianGrid-CKomsyf3.js";import{X as c}from"./XAxis-CmdVCSMA.js";import{Y as f}from"./YAxis-B7_xgRPt.js";import{R as l}from"./ReferenceDot-BS7OhYBo.js";import{R as h}from"./RechartsHookInspector-CJTq0Gdr.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-UG4fDJsJ.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BfUKOtD7.js";import"./hooks-06paRXDN.js";import"./axisSelectors-R9DAlT6p.js";import"./zIndexSlice-p0C6ErDf.js";import"./CartesianChart-CyZ2OCbR.js";import"./chartDataContext-BqTaz2vx.js";import"./CategoricalChart-C3XXqFmy.js";import"./CartesianAxis-RUdXwPBb.js";import"./Layer-A6Fuc82i.js";import"./Text-CJLcOIOl.js";import"./DOMUtils-DE1nvb87.js";import"./Label-Znit4TkG.js";import"./ZIndexLayer-BvBrZyR1.js";import"./types-TTX5RUO9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-D3x_k9xg.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BDMR2Hui.js";import"./ChartSizeDimensions-DTPwYyQJ.js";import"./OffsetShower-CSNclTFq.js";import"./PlotAreaShower-Conl4mfo.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
