import{e}from"./iframe-DGrXlEkx.js";import{R as n}from"./arrayEqualityCheck-DicChNuU.js";import{C as p}from"./ComposedChart-B5e_pVnj.js";import{C as s}from"./CartesianGrid-BzHr3Sej.js";import{X as c}from"./XAxis-CAsPUI6L.js";import{Y as f}from"./YAxis-m9KoigUY.js";import{L as l}from"./Line-WPyxC3MW.js";import{R as d}from"./ReferenceLine-BXtyYLEF.js";import{R as h}from"./RechartsHookInspector-Br39JKkJ.js";import{p as w}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CbjUZWO4.js";import"./PolarUtils-DHWqJfSQ.js";import"./RechartsWrapper-BsZxNtsW.js";import"./hooks-BJzdHLQJ.js";import"./axisSelectors-B99hHUji.js";import"./zIndexSlice-BOlzJk7E.js";import"./CartesianChart-DhyYzKH1.js";import"./chartDataContext-xgZ2IC4i.js";import"./CategoricalChart-CoFZdKLi.js";import"./CartesianAxis-BzLzw--d.js";import"./Layer-D3LXHH9n.js";import"./Text-DHLuacJp.js";import"./DOMUtils-BNpuiDkW.js";import"./Label-BU6Zd3bq.js";import"./ZIndexLayer-B0lWMP9E.js";import"./types-Byz7h8Fw.js";import"./ReactUtils-B0RMD20A.js";import"./ActivePoints-Cg45XT1Q.js";import"./Dot-JJjdvtMS.js";import"./RegisterGraphicalItemId-kRuXUne3.js";import"./ErrorBarContext-B6C65bkw.js";import"./GraphicalItemClipPath-BaBV_qBF.js";import"./SetGraphicalItem-DtkD_AUo.js";import"./useAnimationId-BLzFnaDj.js";import"./getRadiusAndStrokeWidthFromDot-gCSpblHn.js";import"./ActiveShapeUtils-Dmo5KH5o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B_ChE2a8.js";import"./Trapezoid-D3rkb8mR.js";import"./Sector-BiHhGzVm.js";import"./Symbols-lPueLsWK.js";import"./Curve-B7GNUcvb.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DUFFx6eI.js";import"./ChartSizeDimensions-DMMvC6d0.js";import"./OffsetShower-T7KMfcKq.js";import"./PlotAreaShower-B7mPYwn0.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
