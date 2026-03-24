import{e}from"./iframe-7k9yEKZX.js";import{R as n}from"./arrayEqualityCheck-DyKOzX9B.js";import{C as s}from"./ComposedChart-BPJ8rB-g.js";import{C as p}from"./CartesianGrid-CMUwgVke.js";import{X as c}from"./XAxis-BTCs_Vgw.js";import{Y as f}from"./YAxis-fzIEKsic.js";import{R as l}from"./ReferenceDot-lDIaV0_T.js";import{R as h}from"./RechartsHookInspector-DG9apDpf.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CcSp36mS.js";import"./immer-CHH-Iajc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BvLvkhZj.js";import"./index-DvINa2Wr.js";import"./hooks-D25WTasM.js";import"./axisSelectors-aGv317tx.js";import"./d3-scale-BRwFQSv2.js";import"./zIndexSlice-CzkFlcL3.js";import"./renderedTicksSlice-B6_Lm1vJ.js";import"./CartesianChart-CbJvKkCN.js";import"./chartDataContext-B5LGZgkJ.js";import"./CategoricalChart-2PgGLAlf.js";import"./CartesianAxis-CWYl_TTU.js";import"./Layer--w1IvBzA.js";import"./Text-BUDAKONF.js";import"./DOMUtils-DJqsII1h.js";import"./Label-CVjnPCaB.js";import"./ZIndexLayer-BBlmEaho.js";import"./types-DqFJB-g8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-D1SVhtLk.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BKACCO4D.js";import"./ChartSizeDimensions-D1SSOw56.js";import"./OffsetShower-D7759kd2.js";import"./PlotAreaShower-qx9-nPqs.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
