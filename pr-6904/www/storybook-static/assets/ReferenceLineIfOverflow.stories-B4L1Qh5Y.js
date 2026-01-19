import{e}from"./iframe-CpNu1JlZ.js";import{R as n}from"./arrayEqualityCheck-BJH8Jf6v.js";import{C as p}from"./ComposedChart-BI4mwn7j.js";import{C as s}from"./CartesianGrid-I2wQTv9V.js";import{X as c}from"./XAxis-4Sxw4UkR.js";import{Y as f}from"./YAxis-B8FElgTt.js";import{L as l}from"./Line-D-KlkcmY.js";import{R as d}from"./ReferenceLine-2PnDgo1L.js";import{R as h}from"./RechartsHookInspector-BmpKM6Nz.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-W5bbcHB0.js";import"./PolarUtils-D3v-RsLH.js";import"./RechartsWrapper-0hOTWq_R.js";import"./hooks-C6Ia6Lfs.js";import"./axisSelectors-BBvb1V6K.js";import"./zIndexSlice-DY-K2-IQ.js";import"./CartesianChart-DJav-J6T.js";import"./chartDataContext-D9xDPkuR.js";import"./CategoricalChart-BHgD9gAO.js";import"./CartesianAxis-DHgD0c-6.js";import"./Layer-CgGUTlVA.js";import"./Text-CcMcwnEY.js";import"./DOMUtils-Bq1JWBRd.js";import"./Label-BZ3pAw6v.js";import"./ZIndexLayer-BhjXIlXu.js";import"./types-DLbIt3jn.js";import"./ReactUtils-DkvyTuz_.js";import"./ActivePoints-DW3qXorP.js";import"./Dot-DHMhFj_F.js";import"./RegisterGraphicalItemId-D7Qen5Xd.js";import"./ErrorBarContext-CPEIMkdr.js";import"./GraphicalItemClipPath-CxPnAcc7.js";import"./SetGraphicalItem-B-5mlAj6.js";import"./useAnimationId-B5QsM2o0.js";import"./getRadiusAndStrokeWidthFromDot-CA6t2h0u.js";import"./ActiveShapeUtils-DXbdTG-x.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpK3ty__.js";import"./Trapezoid-DLjeAkOF.js";import"./Sector-CFrzjDGx.js";import"./Symbols-BLQ2T1a8.js";import"./Curve-BgSSBByK.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BjecE5DL.js";import"./ChartSizeDimensions-Q_MjQJbH.js";import"./OffsetShower-CV2zUXL0.js";import"./PlotAreaShower-Bf09ZPlm.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
