import{R as e}from"./iframe-BaabCOfo.js";import{R as n}from"./zIndexSlice-CWxxXgIH.js";import{C as p}from"./ComposedChart-D9WOh2Dq.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CHZGEMe9.js";import{X as f}from"./XAxis-BXlMIHd8.js";import{Y as l}from"./YAxis-q_zljZs-.js";import{L as d}from"./Line-DqlgNAdm.js";import{R as h}from"./ReferenceLine-2HkB527t.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BLHHDgig.js";import"./index-B1UijuQJ.js";import"./index-vSeH92Tc.js";import"./get-C9kPOoUz.js";import"./resolveDefaultProps-m6H7CCvK.js";import"./isWellBehavedNumber-B34pSeK5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BzVbI7QS.js";import"./index-DXTcRTSc.js";import"./index-CADxnCms.js";import"./renderedTicksSlice-qKkoa7Pp.js";import"./axisSelectors-BaT59QoB.js";import"./d3-scale-xd-t_SLV.js";import"./CartesianChart-C9YeuOyj.js";import"./chartDataContext-DaAkZdG0.js";import"./CategoricalChart-_HoXNLFS.js";import"./CartesianAxis-DzzVwONF.js";import"./Layer-64CGscPm.js";import"./Text-BmSZi3Hk.js";import"./DOMUtils-CUUTvSW3.js";import"./Label-C7hyOp5H.js";import"./ZIndexLayer-qDXxNkeJ.js";import"./types-hBJB7bDz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Dz8p7kZF.js";import"./step-Bn04m8nP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CREItNhG.js";import"./useAnimationId-DievnnW1.js";import"./ActivePoints-DsUWTgVX.js";import"./Dot-Cxl_B4ln.js";import"./RegisterGraphicalItemId-CuBJ-yCL.js";import"./ErrorBarContext-BTWgR7nJ.js";import"./GraphicalItemClipPath-BPT-cS9W.js";import"./SetGraphicalItem-DPRJSznG.js";import"./getRadiusAndStrokeWidthFromDot-VrSFbMxb.js";import"./ActiveShapeUtils-DcOcWj43.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const le=["IfOverflow"];export{t as IfOverflow,le as __namedExportsOrder,fe as default};
