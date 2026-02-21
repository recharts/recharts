import{e}from"./iframe-BJOlw-Op.js";import{R as n}from"./arrayEqualityCheck-DnusCzBD.js";import{C as s}from"./ComposedChart-CscrYVRt.js";import{C as p}from"./CartesianGrid-Diy8NTCf.js";import{X as c}from"./XAxis-43KHVoFo.js";import{Y as f}from"./YAxis-BPIAOwcF.js";import{R as l}from"./ReferenceDot-C4RIb5RL.js";import{R as h}from"./RechartsHookInspector-CPO0M8Xx.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Wvn0zu9i.js";import"./immer-DfiRd44R.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BHn8DA_q.js";import"./index-Qcq4P_Nt.js";import"./hooks-CnmjgxEU.js";import"./axisSelectors-WpUYVbi6.js";import"./d3-scale-DYbsxYoA.js";import"./zIndexSlice-CeiBfx4M.js";import"./renderedTicksSlice-BL6GofNb.js";import"./CartesianChart-BMN72tVe.js";import"./chartDataContext-DTMD5Oqb.js";import"./CategoricalChart-linssQQb.js";import"./CartesianAxis-Y6m8iiHs.js";import"./Layer-BBwqN8Jm.js";import"./Text-CtfAbWJb.js";import"./DOMUtils-OblLamz_.js";import"./Label-D8He3MwY.js";import"./ZIndexLayer-DYremzN-.js";import"./types-CnF3ZZeT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DwKpvT0b.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D9yuPKYy.js";import"./ChartSizeDimensions-C1LvrkRR.js";import"./OffsetShower-B4YdrASr.js";import"./PlotAreaShower-DXcv1_AG.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
