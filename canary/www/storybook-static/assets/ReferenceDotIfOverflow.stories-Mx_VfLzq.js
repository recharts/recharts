import{e}from"./iframe-B2sVpU8Z.js";import{R as n}from"./arrayEqualityCheck-Dhi79NZV.js";import{C as s}from"./ComposedChart-CtbTJa68.js";import{C as p}from"./CartesianGrid-DZIf5xGW.js";import{X as c}from"./XAxis-tglJjYCd.js";import{Y as f}from"./YAxis-DOY4gwW6.js";import{R as l}from"./ReferenceDot-iHC4Iefs.js";import{R as h}from"./RechartsHookInspector-CVc_RdQc.js";import{p as d}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CY8PYEK4.js";import"./PolarUtils-D7wLniJK.js";import"./RechartsWrapper-BO_KERjm.js";import"./hooks-CO8_l9qG.js";import"./axisSelectors-CpQ2T2MD.js";import"./zIndexSlice-D-AtcMvw.js";import"./CartesianChart-Cy5Kgrrw.js";import"./chartDataContext-BKjXgLbF.js";import"./CategoricalChart-Dr5ioBXT.js";import"./CartesianAxis-BtXVVZhW.js";import"./Layer-CgMiZnew.js";import"./Text-BIiE8Zu5.js";import"./DOMUtils-BEUHT1oG.js";import"./Label-Cini22wZ.js";import"./ZIndexLayer-BRoLt-1O.js";import"./types-DwL4AKHm.js";import"./Dot-3WZgPHXQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-8c_ign4p.js";import"./ChartSizeDimensions-DNVkMrvA.js";import"./OffsetShower-BJ2e6zPx.js";import"./PlotAreaShower-BJGrz5Yh.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const V=["IfOverflow"];export{t as IfOverflow,V as __namedExportsOrder,Q as default};
