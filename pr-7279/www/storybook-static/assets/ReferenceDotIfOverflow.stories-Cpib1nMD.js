import{e}from"./iframe-Gbg_l78M.js";import{R as n}from"./arrayEqualityCheck-B69LB4m3.js";import{C as s}from"./ComposedChart-B2lIhwzo.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BMhBEEa4.js";import{X as f}from"./XAxis-DY33qp1b.js";import{Y as l}from"./YAxis-DZDs3GKO.js";import{R as h}from"./ReferenceDot-BPNBAXFT.js";import{R as d}from"./RechartsHookInspector-Do2lkGOS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-sMeqIZjn.js";import"./immer-mU5ngVSZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B733cAvp.js";import"./index-Ck6DfcF7.js";import"./hooks-BX9UIUih.js";import"./axisSelectors-BhOsWb8H.js";import"./d3-scale-B1Xdl3mZ.js";import"./zIndexSlice-BsUMgwVy.js";import"./renderedTicksSlice-CfnOktJ2.js";import"./CartesianChart-D0_pR8lQ.js";import"./chartDataContext-DKgbTOGI.js";import"./CategoricalChart-CF19xo_7.js";import"./CartesianAxis-Dca3a3op.js";import"./Layer-BI5znRpT.js";import"./Text-BbIMZo50.js";import"./DOMUtils-BEdmeFzJ.js";import"./Label-C97vZCUD.js";import"./ZIndexLayer-Cu_ZYhKd.js";import"./types-6-jxyL20.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DiubYT5n.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Dqxuu1t4.js";import"./ChartSizeDimensions-BLrRxRyE.js";import"./OffsetShower-C_0qPv4p.js";import"./PlotAreaShower-C7q1PybE.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
