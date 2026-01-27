import{e}from"./iframe-qr4fLFpB.js";import{R as n}from"./arrayEqualityCheck-Bgik-Trt.js";import{C as p}from"./ComposedChart-L7gwkfC6.js";import{C as s}from"./CartesianGrid-Dyw4sjTG.js";import{X as c}from"./XAxis-ceniSK6J.js";import{Y as f}from"./YAxis-DTFQgDTu.js";import{L as l}from"./Line-CW7fs-Ya.js";import{R as d}from"./ReferenceLine-BUgyblTI.js";import{R as h}from"./RechartsHookInspector-Br68X8gZ.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C5koYet4.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-Mc2-Xf8T.js";import"./hooks-BuX4DZtw.js";import"./axisSelectors-Bo6ergNf.js";import"./zIndexSlice-DUnMgb4W.js";import"./CartesianChart-ByeB8V_W.js";import"./chartDataContext-GFM1rpYw.js";import"./CategoricalChart-KanALp4p.js";import"./CartesianAxis-SSDJgaWv.js";import"./Layer-CflgJyns.js";import"./Text-GNEjhoqj.js";import"./DOMUtils-DRnJ2sM4.js";import"./Label-BCYS56wU.js";import"./ZIndexLayer-BTmo2O_X.js";import"./types-D-QHYsBW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Bl1pLFc3.js";import"./ActivePoints-DzfMrV3Y.js";import"./Dot-DatHxVLb.js";import"./RegisterGraphicalItemId-Bik8WklO.js";import"./ErrorBarContext-iPmq77XA.js";import"./GraphicalItemClipPath-BxRwLljn.js";import"./SetGraphicalItem--WYAW04t.js";import"./useAnimationId-C_x8lvyj.js";import"./getRadiusAndStrokeWidthFromDot-V53muJ6j.js";import"./ActiveShapeUtils-D_mT6BGA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CTwxPXfp.js";import"./Trapezoid-DV0XCdJ4.js";import"./Sector-D_XFCZJC.js";import"./Symbols-B9DXvbaq.js";import"./Curve-VUq81ujr.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BzLAea9N.js";import"./ChartSizeDimensions-CgtvjcwQ.js";import"./OffsetShower-B6BSL9ge.js";import"./PlotAreaShower-CCEHTneG.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
