import{e}from"./iframe-DtzQZ5We.js";import{R as n}from"./arrayEqualityCheck-3Q4fEezD.js";import{C as p}from"./ComposedChart-DKZIKN5k.js";import{C as s}from"./CartesianGrid-CjCU3Tmd.js";import{X as c}from"./XAxis-DbDdWo9i.js";import{Y as f}from"./YAxis-jb4FGmfu.js";import{L as l}from"./Line-CrxGC9uS.js";import{R as d}from"./ReferenceLine--78pTYMf.js";import{R as h}from"./RechartsHookInspector-podkStYr.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BRs_UQ99.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGOHUa9W.js";import"./hooks-B-LrQ_eV.js";import"./axisSelectors-BkRgZDRN.js";import"./zIndexSlice-DS1PNPXk.js";import"./renderedTicksSlice-CW-ChE7J.js";import"./CartesianChart-DjEZ7rdy.js";import"./chartDataContext-DsBjDkWS.js";import"./CategoricalChart-p0GBJql4.js";import"./CartesianAxis-D6UZdOOc.js";import"./Layer-P1mRwVv-.js";import"./Text-plRA5L0Q.js";import"./DOMUtils-KcfZip85.js";import"./Label-D5-8z0UP.js";import"./ZIndexLayer-DGEtHlps.js";import"./types-DcSMO55m.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Bg8ILpJF.js";import"./ActivePoints-CLc9h_MH.js";import"./Dot-D4WZdJ7E.js";import"./RegisterGraphicalItemId-BLNhdTAM.js";import"./ErrorBarContext-BtAqYSS8.js";import"./GraphicalItemClipPath-pRNKwbfQ.js";import"./SetGraphicalItem-B7Fz13cw.js";import"./useAnimationId-GgPPrJFw.js";import"./getRadiusAndStrokeWidthFromDot-Cnf2Ftr7.js";import"./ActiveShapeUtils-D2Eg2bWy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSEdSL9_.js";import"./Trapezoid-DCMThu2C.js";import"./Sector-CcjHcsYG.js";import"./Symbols-k0cT0xYb.js";import"./Curve-C7rWq_eQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CiWjk4ms.js";import"./ChartSizeDimensions-DX7nzkVv.js";import"./OffsetShower-CSfFk_uM.js";import"./PlotAreaShower-IRVjM9_1.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,he={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const we=["IfOverflow"];export{t as IfOverflow,we as __namedExportsOrder,he as default};
