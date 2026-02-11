import{e}from"./iframe-DAKkOQol.js";import{R as n}from"./arrayEqualityCheck-NbiC3pou.js";import{C as p}from"./ComposedChart-ChbMrpsj.js";import{C as s}from"./CartesianGrid-mv357iBP.js";import{X as c}from"./XAxis-DHACXabx.js";import{Y as f}from"./YAxis-DShQZAzJ.js";import{L as l}from"./Line-BSJ_6kE8.js";import{R as d}from"./ReferenceLine-B6OAw2JQ.js";import{R as h}from"./RechartsHookInspector-BfHJy13b.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BL_LDYW6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DReT11ch.js";import"./hooks-CgQhpM8Q.js";import"./axisSelectors-EdGkev_1.js";import"./zIndexSlice-ConFYYKV.js";import"./CartesianChart-ErdgDL_l.js";import"./chartDataContext-Byh5ybSM.js";import"./CategoricalChart-CO48ZeEI.js";import"./CartesianAxis-BHWsH5fF.js";import"./Layer-BguUBi1k.js";import"./Text-Tp-rAwzV.js";import"./DOMUtils-ngTPzyN_.js";import"./Label-CmclsLbQ.js";import"./ZIndexLayer-CBwJU_Ua.js";import"./types-Dtb0IVPy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BWrOVeoB.js";import"./ActivePoints-7-0qoVWK.js";import"./Dot-CCq0kKAT.js";import"./RegisterGraphicalItemId-DNcFFbXF.js";import"./ErrorBarContext-ig0ccB3h.js";import"./GraphicalItemClipPath-C0lJi0bX.js";import"./SetGraphicalItem-CWARA50H.js";import"./useAnimationId-BJodvzW1.js";import"./getRadiusAndStrokeWidthFromDot-Dc544xEP.js";import"./ActiveShapeUtils-DnsJnZjx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CgMMN0ms.js";import"./Trapezoid-DpCkavyj.js";import"./Sector-BqcXv69K.js";import"./Symbols-NCjlL2qf.js";import"./Curve-Jt8KljXD.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-IHUVzBeJ.js";import"./ChartSizeDimensions-D219SLoR.js";import"./OffsetShower-Bf-TTVbw.js";import"./PlotAreaShower-2vui0Dg8.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
