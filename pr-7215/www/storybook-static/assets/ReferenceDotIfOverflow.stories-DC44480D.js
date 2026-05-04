import{e}from"./iframe-W4Sx2LmA.js";import{R as n}from"./arrayEqualityCheck-nt69rbNg.js";import{C as s}from"./ComposedChart-DVlgHodQ.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-SQjSoYdb.js";import{X as f}from"./XAxis-Do-NADlR.js";import{Y as l}from"./YAxis-DWdWWCmD.js";import{R as h}from"./ReferenceDot-B-BJhGST.js";import{R as d}from"./RechartsHookInspector-Ft4_PiAb.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2Cae6Gg7.js";import"./immer-B5uHt3-v.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-V_uqMe0M.js";import"./index-C0P2H7BI.js";import"./hooks-Dtno9pbE.js";import"./axisSelectors-CLSq_PV7.js";import"./d3-scale-Cc2KV_M4.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-B4A5_8Yi.js";import"./renderedTicksSlice-dCK1eX84.js";import"./CartesianChart-v8Cliy-Y.js";import"./chartDataContext-D35ia9Nl.js";import"./CategoricalChart-BDjWSCBE.js";import"./CartesianAxis-QtM7KOVk.js";import"./Layer-BaLfWC67.js";import"./Text-CLwKs2sm.js";import"./DOMUtils-D7MEc4ch.js";import"./Label-aDrplQOD.js";import"./ZIndexLayer-Icro7Prq.js";import"./types-C7u7ujMp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BiRIcMlM.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CXRjpi5i.js";import"./ChartSizeDimensions-BbncuPUL.js";import"./OffsetShower-DPIr9odL.js";import"./PlotAreaShower-DUcsSPBD.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
