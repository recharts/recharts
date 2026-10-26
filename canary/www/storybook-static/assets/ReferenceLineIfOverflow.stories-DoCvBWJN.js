import{R as e}from"./iframe-DPP4Tdri.js";import{R as a}from"./zIndexSlice-Bty8FlsF.js";import{C as p}from"./ComposedChart-CXeRVVMY.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-hbpsuTxI.js";import{X as f}from"./XAxis-BpxUBGxx.js";import{Y as l}from"./YAxis-Ce7IYC8C.js";import{L as d}from"./Line-D2KFCdB_.js";import{R as h}from"./ReferenceLine-Q_w0TBUJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cm9tdCQy.js";import"./throttle-vvUvRomY.js";import"./index-DVADikfE.js";import"./index-De7017Q2.js";import"./RechartsWrapper-Dc5A4Gsl.js";import"./axisSelectors-D5c_jQLf.js";import"./polarAxisSelectors-CClqMsSX.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DzX31dlW.js";import"./index-Cb0QOEvK.js";import"./index-CTYPR5t0.js";import"./renderedTicksSlice-B_g7wt05.js";import"./index-C1bARSgS.js";import"./CartesianChart-_cTASiWq.js";import"./chartDataContext-BX3Xv7t3.js";import"./CategoricalChart-CkLeLS7-.js";import"./CartesianAxis-Cw8YZYZ1.js";import"./Layer-wOFD4jm5.js";import"./Text-BtmpD8Z5.js";import"./pageBackground-km40Fien.js";import"./useId-Ddybgx-i.js";import"./ZIndexLayer-Blh-9Ce2.js";import"./Label-VwhFHh0o.js";import"./dataEntryStyles-CptsKKQm.js";import"./types-nPujXrb0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-B2UCYZoR.js";import"./step-3axEj_2-.js";import"./path-DyVhHtw_.js";import"./activeStyles-Czb_VVwe.js";import"./useAnimationId-CRGpdxWH.js";import"./ActivePoints-DKXQv37u.js";import"./Dot-9cI0fI12.js";import"./Symbols-DAUL1Z82.js";import"./symbol-CyE3iFmu.js";import"./RegisterGraphicalItemId-C_PEUR1P.js";import"./ErrorBarContext-DA7VKoxZ.js";import"./SetGraphicalItem-me1Dq43s.js";import"./getRadiusAndStrokeWidthFromDot-CNoHTcoN.js";import"./ActiveShapeUtils-BRfAaZtt.js";import"./useEffectiveDataKey-CPqFi3kZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
