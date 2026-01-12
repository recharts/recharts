import{e}from"./iframe-B2sVpU8Z.js";import{R as n}from"./arrayEqualityCheck-Dhi79NZV.js";import{C as p}from"./ComposedChart-CtbTJa68.js";import{C as s}from"./CartesianGrid-DZIf5xGW.js";import{X as c}from"./XAxis-tglJjYCd.js";import{Y as f}from"./YAxis-DOY4gwW6.js";import{L as l}from"./Line-CnVEiaWf.js";import{R as d}from"./ReferenceLine-DeSiv274.js";import{R as h}from"./RechartsHookInspector-CVc_RdQc.js";import{p as w}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CY8PYEK4.js";import"./PolarUtils-D7wLniJK.js";import"./RechartsWrapper-BO_KERjm.js";import"./hooks-CO8_l9qG.js";import"./axisSelectors-CpQ2T2MD.js";import"./zIndexSlice-D-AtcMvw.js";import"./CartesianChart-Cy5Kgrrw.js";import"./chartDataContext-BKjXgLbF.js";import"./CategoricalChart-Dr5ioBXT.js";import"./CartesianAxis-BtXVVZhW.js";import"./Layer-CgMiZnew.js";import"./Text-BIiE8Zu5.js";import"./DOMUtils-BEUHT1oG.js";import"./Label-Cini22wZ.js";import"./ZIndexLayer-BRoLt-1O.js";import"./types-DwL4AKHm.js";import"./ReactUtils-myx_H7Lt.js";import"./ActivePoints-B9nnYV9I.js";import"./Dot-3WZgPHXQ.js";import"./RegisterGraphicalItemId-DS_P1DDV.js";import"./ErrorBarContext-DVCgOIGq.js";import"./GraphicalItemClipPath-Dg2YJGXp.js";import"./SetGraphicalItem-BEcH9pqG.js";import"./useAnimationId-Dci0ZhWb.js";import"./getRadiusAndStrokeWidthFromDot-DcCyEWQm.js";import"./ActiveShapeUtils-BmX6o3Pn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-r91KSjwc.js";import"./Trapezoid-CHmzYexd.js";import"./Sector-DOuizIpa.js";import"./Symbols-D-gYgerz.js";import"./Curve-DIfGyAUS.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-8c_ign4p.js";import"./ChartSizeDimensions-DNVkMrvA.js";import"./OffsetShower-BJ2e6zPx.js";import"./PlotAreaShower-BJGrz5Yh.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
