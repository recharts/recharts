import{e}from"./iframe-C1fnHnKT.js";import{R as n}from"./arrayEqualityCheck-l6uT4Usv.js";import{C as s}from"./ComposedChart-DzEnoNHN.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B9SN2r-G.js";import{X as f}from"./XAxis-CQ2fda0r.js";import{Y as l}from"./YAxis-BUT98NPf.js";import{R as h}from"./ReferenceDot-CUt_Otjo.js";import{R as d}from"./RechartsHookInspector-ewceuCfq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-0awOkESO.js";import"./immer-hlXcvFio.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsoN9NQZ.js";import"./index-C2jDSQT9.js";import"./hooks-D4TdCpxu.js";import"./axisSelectors-AIxg2YTu.js";import"./d3-scale-Br8Qy1nV.js";import"./zIndexSlice-BoAv0LH1.js";import"./renderedTicksSlice-DAUXyaQX.js";import"./CartesianChart-DJhd_WoR.js";import"./chartDataContext-DOE3KdCn.js";import"./CategoricalChart-oohW2fAH.js";import"./CartesianAxis-CluKEQWr.js";import"./Layer-BIYNx1xN.js";import"./Text-BUAHuXAg.js";import"./DOMUtils-CXwfjRJu.js";import"./Label-8_9z-Hx3.js";import"./ZIndexLayer-UU7tiK14.js";import"./types-C6vI6gcr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-CuqwvLTE.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BXsfGSea.js";import"./ChartSizeDimensions-Dhy2eg61.js";import"./OffsetShower-C23rQ0FG.js";import"./PlotAreaShower-P9zfdMTd.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
