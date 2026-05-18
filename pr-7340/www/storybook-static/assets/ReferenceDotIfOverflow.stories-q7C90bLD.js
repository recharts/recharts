import{e}from"./iframe-CVCS2awI.js";import{g as n}from"./arrayEqualityCheck-BScHcl7E.js";import{C as s}from"./ComposedChart-CZbWLpnK.js";import{p}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-Di5zgPXB.js";import{X as f}from"./XAxis-DEoN5sn7.js";import{Y as l}from"./YAxis-ofBsFmOO.js";import{R as h}from"./ReferenceDot-D6F8LPGQ.js";import{R as d}from"./RechartsHookInspector-3dEt4e8Z.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ByXJQ66f.js";import"./immer-BGDSirDa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsYjkcUu.js";import"./index-DBY1MSkk.js";import"./hooks-DdU_FuUR.js";import"./axisSelectors-Ci1MJvZY.js";import"./d3-scale-BXP4l8lb.js";import"./zIndexSlice-CYiE3KZh.js";import"./renderedTicksSlice-DEe4uQXq.js";import"./CartesianChart-g3EB1H8Z.js";import"./chartDataContext-CE4uM-kC.js";import"./CategoricalChart-DjXgWEwo.js";import"./CartesianAxis-PbPLy1Ao.js";import"./Layer-ByxoiXYR.js";import"./Text-CDmz-7H5.js";import"./DOMUtils-DM2Mtfvr.js";import"./Label-DaKOoJ3c.js";import"./ZIndexLayer-qvuGpwS0.js";import"./types-Dgqt75FW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BYrokBNa.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D6BiGzwv.js";import"./ChartSizeDimensions-Cz6I6g2_.js";import"./OffsetShower-mSbEp68m.js";import"./PlotAreaShower-Bh-nVQY_.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
