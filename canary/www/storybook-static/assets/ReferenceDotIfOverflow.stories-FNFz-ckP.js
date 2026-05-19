import{e}from"./iframe-Dm92CwFH.js";import{g as n}from"./arrayEqualityCheck-CILmZ2ng.js";import{C as s}from"./ComposedChart-8hVtFBq4.js";import{p}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-DhhWGcMk.js";import{X as f}from"./XAxis-BxDV4NmS.js";import{Y as l}from"./YAxis-LNhJTikZ.js";import{R as h}from"./ReferenceDot-DVWCfI2J.js";import{R as d}from"./RechartsHookInspector-DjDPWpLA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-URK34NLy.js";import"./immer-C2lunnZL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CcwR86Ee.js";import"./index-BZhNoNV_.js";import"./hooks-BzHpEskF.js";import"./axisSelectors-BHYp1qXz.js";import"./d3-scale-irW0mVOo.js";import"./zIndexSlice-CZsiKlhz.js";import"./renderedTicksSlice-Cbab3bWB.js";import"./CartesianChart-mnMBiiJP.js";import"./chartDataContext-BodkpG5F.js";import"./CategoricalChart-VO60zbCA.js";import"./CartesianAxis-DhxbGkzM.js";import"./Layer-CpozC2HI.js";import"./Text-DeU0frga.js";import"./DOMUtils-CrpDH3yL.js";import"./Label-C3d_UHx_.js";import"./ZIndexLayer-BRpAcZD_.js";import"./types-CksUkFiR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-D9ItCAkE.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BuoG88Tj.js";import"./ChartSizeDimensions-f0wD3mfa.js";import"./OffsetShower-VDfu5cmL.js";import"./PlotAreaShower-DIqDk6Vd.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
