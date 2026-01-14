import{e}from"./iframe-DYFx2r-j.js";import{R as n}from"./arrayEqualityCheck-DCVaqN9G.js";import{C as p}from"./ComposedChart-BDMAP_Xz.js";import{C as s}from"./CartesianGrid-BbLxz0NB.js";import{X as c}from"./XAxis-CrWNcebb.js";import{Y as f}from"./YAxis-BQSE3w1-.js";import{L as l}from"./Line-VsvTPScv.js";import{R as d}from"./ReferenceLine-Cu1sFdec.js";import{R as h}from"./RechartsHookInspector-8HiD6XU_.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BTmxXdy3.js";import"./PolarUtils-C1zbAlbA.js";import"./RechartsWrapper-C83nyDwr.js";import"./hooks-DjCJ821w.js";import"./axisSelectors-CNJps_KV.js";import"./zIndexSlice-CSYHepNq.js";import"./CartesianChart-CZCpz_Bc.js";import"./chartDataContext-BcNxXqiP.js";import"./CategoricalChart-D0ijd2iH.js";import"./CartesianAxis-DetyPtZ0.js";import"./Layer-BC3vDM2H.js";import"./Text-CehOywt1.js";import"./DOMUtils-dzsDioow.js";import"./Label-DjuisPzU.js";import"./ZIndexLayer-CCFXe3ig.js";import"./types-Cik9NZHM.js";import"./ReactUtils-B5hh0nCE.js";import"./ActivePoints-D9sD73LE.js";import"./Dot-Bp4mtK_T.js";import"./RegisterGraphicalItemId-CuPr_ukv.js";import"./ErrorBarContext-BaEgtdW6.js";import"./GraphicalItemClipPath-CYj9KQXB.js";import"./SetGraphicalItem-BLQ-q15z.js";import"./useAnimationId-xTCLSGwz.js";import"./getRadiusAndStrokeWidthFromDot-CdsImqpX.js";import"./ActiveShapeUtils-5VBSo5Lq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Du9Z9pvb.js";import"./Trapezoid-B1aN-PmS.js";import"./Sector-Cw_s6D-z.js";import"./Symbols-DOMt1Ple.js";import"./Curve-7IBZZol0.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BqI5oxI8.js";import"./ChartSizeDimensions-CyZcFbe9.js";import"./OffsetShower-D26sUntH.js";import"./PlotAreaShower--zaCCVLK.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
