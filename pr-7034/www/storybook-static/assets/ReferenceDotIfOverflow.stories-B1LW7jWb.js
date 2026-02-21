import{e}from"./iframe-CiJ-9oSW.js";import{R as n}from"./arrayEqualityCheck-C8jW8oZt.js";import{C as s}from"./ComposedChart-Dc7jAWzW.js";import{C as p}from"./CartesianGrid-DFVcV20B.js";import{X as c}from"./XAxis-BJxfrRMM.js";import{Y as f}from"./YAxis-BZxiz2W9.js";import{R as l}from"./ReferenceDot-DbUwkhvd.js";import{R as h}from"./RechartsHookInspector-CQuYP5B8.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C_fWxmLs.js";import"./immer-37ItimpE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-eTQdG_km.js";import"./index-CDsMfUar.js";import"./hooks-Dfqn0uk4.js";import"./axisSelectors-DOyKuHrc.js";import"./d3-scale-DsUEV-Ka.js";import"./zIndexSlice-eHnPInNj.js";import"./renderedTicksSlice-9qCibHxh.js";import"./CartesianChart-CziHqUQ0.js";import"./chartDataContext-C_-Fr4aA.js";import"./CategoricalChart-B2RsDCkt.js";import"./CartesianAxis-BCIccZ9q.js";import"./Layer-BNBNN9ao.js";import"./Text-3tLRx2GL.js";import"./DOMUtils-DnoEKxPk.js";import"./Label-C9pOXevO.js";import"./ZIndexLayer-BJKv50T_.js";import"./types-vu75yOSZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-3CUYNcL8.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DbWSPN2V.js";import"./ChartSizeDimensions-mFb6CdqR.js";import"./OffsetShower-vd944Mef.js";import"./PlotAreaShower-mwSW161D.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
