import{R as e}from"./iframe-FAdFbT6J.js";import{R as a}from"./zIndexSlice-COO8R9lj.js";import{C as p}from"./ComposedChart-ByetWKbs.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-H4vGAjA9.js";import{X as f}from"./XAxis-2xPTd-UO.js";import{Y as l}from"./YAxis-T_mO5jU8.js";import{L as d}from"./Line-jyNZb6sa.js";import{R as h}from"./ReferenceLine-UYHAig4b.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dtf0HKLA.js";import"./throttle-DmbGe_oo.js";import"./index-Bi2HKvdy.js";import"./index-CAO6Ulba.js";import"./RechartsWrapper-B8CA35TH.js";import"./axisSelectors-DjwIFZga.js";import"./polarAxisSelectors-CZ0SBXPQ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CfdNPJMp.js";import"./index-BCrgpV8I.js";import"./index-D2Bzwkru.js";import"./renderedTicksSlice-C41wjkwS.js";import"./index-Cdi1oYuJ.js";import"./CartesianChart-BPlrTUFV.js";import"./ZIndexPortal-B1h9CFOj.js";import"./CategoricalChart-D9WR_D7Z.js";import"./CartesianAxis-_1uLVGpU.js";import"./Layer-DDi6JECL.js";import"./Text-Cndhy6VG.js";import"./pageBackground-CQW2qZWO.js";import"./ZIndexLayer-5IISokl0.js";import"./Label-MEQSQEMP.js";import"./dataEntryStyles-CEjpbRUj.js";import"./types-BX8ZQcvG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DQIDgvYs.js";import"./step-DTM-27zI.js";import"./path-DyVhHtw_.js";import"./LabelList-BYdzk1TZ.js";import"./ActivePoints-NvUWdQPY.js";import"./Dot-CvQhsRdk.js";import"./activeStyles-D7U9MU9g.js";import"./useAnimationId-CiJHzCVR.js";import"./Symbols-DFQxEPmi.js";import"./symbol-BlNnJRbB.js";import"./RegisterGraphicalItemId-DlZGROHe.js";import"./ErrorBarContext-C30p0TOk.js";import"./SetGraphicalItem-CbZ_Osbr.js";import"./getRadiusAndStrokeWidthFromDot-BJ55Ryxa.js";import"./ActiveShapeUtils-CppGq9PY.js";import"./useEffectiveDataKey-DTWxfT2D.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,xe as __namedExportsOrder,ye as default};
