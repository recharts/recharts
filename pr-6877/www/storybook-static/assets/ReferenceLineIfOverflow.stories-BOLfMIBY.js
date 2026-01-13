import{e}from"./iframe-BIMs3Nj-.js";import{R as n}from"./arrayEqualityCheck-pDlZyWSR.js";import{C as p}from"./ComposedChart-DZntHa2l.js";import{C as s}from"./CartesianGrid-Bsgxj9XA.js";import{X as c}from"./XAxis-DGDhYE5R.js";import{Y as f}from"./YAxis-DCTV7yXH.js";import{L as l}from"./Line-5CZALR-o.js";import{R as d}from"./ReferenceLine-BuUEwa20.js";import{R as h}from"./RechartsHookInspector-DBOIj4qW.js";import{p as w}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C_VwJ3u_.js";import"./PolarUtils-BWV_hv32.js";import"./RechartsWrapper-Bo8-B70G.js";import"./hooks-Bc7hX-2Z.js";import"./axisSelectors-NKchjqRS.js";import"./zIndexSlice-Cnolt5PP.js";import"./CartesianChart-BUJVTvnU.js";import"./chartDataContext-Dko-7FeN.js";import"./CategoricalChart-DCejedhJ.js";import"./CartesianAxis-BteZhTH6.js";import"./Layer-DBgzSzH_.js";import"./Text-CgjsJcds.js";import"./DOMUtils-voeX-mFj.js";import"./Label-CIRwRBMZ.js";import"./ZIndexLayer-DJ3JTFRU.js";import"./types-CnKH5I-b.js";import"./ReactUtils-3uFwj_TO.js";import"./ActivePoints-Dga_4R6z.js";import"./Dot-DH_B4APi.js";import"./RegisterGraphicalItemId-DeUg8eaE.js";import"./ErrorBarContext-87-HwFAI.js";import"./GraphicalItemClipPath-Bw0KLcwW.js";import"./SetGraphicalItem-D5C3EpbS.js";import"./useAnimationId-DJ77ibSq.js";import"./getRadiusAndStrokeWidthFromDot-Cc2fOwDf.js";import"./ActiveShapeUtils-CV_fg9r-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dx9fcimO.js";import"./Trapezoid-B19U1HS5.js";import"./Sector-B3pSkdDH.js";import"./Symbols-BUMcrI7R.js";import"./Curve-DwuONHqE.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CngAoIpS.js";import"./ChartSizeDimensions-C2UWIaZL.js";import"./OffsetShower-DVFE9F3Y.js";import"./PlotAreaShower-DBdBZo3w.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
