import{R as e}from"./iframe-CbiyPpOQ.js";import{R as n}from"./zIndexSlice-CpGqLNgf.js";import{C as p}from"./ComposedChart-Ml_tEQsO.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BVt8BIlH.js";import{X as f}from"./XAxis-DS8USeJo.js";import{Y as l}from"./YAxis-DQOVOwqz.js";import{L as d}from"./Line-CX19U38B.js";import{R as h}from"./ReferenceLine-Bl25bwrY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-qq70w1DA.js";import"./index-DN_zLXSU.js";import"./index-DyGRF9jX.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BWAgYfPV.js";import"./isWellBehavedNumber-CgYUMQU-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-TOXK1lwb.js";import"./index-Bca_d3DG.js";import"./index-D-fswtUu.js";import"./renderedTicksSlice-lYU8ut4F.js";import"./axisSelectors-CCqDM7T-.js";import"./d3-scale-Bap3CkU2.js";import"./CartesianChart-DS8MRKt-.js";import"./chartDataContext-Bznw4op9.js";import"./CategoricalChart-l1FuTysV.js";import"./CartesianAxis-DdhiMqO2.js";import"./Layer-DqgjT4E-.js";import"./Text-6JPkC2Bj.js";import"./DOMUtils-Db0o8Zdl.js";import"./Label-Bqdiqqm9.js";import"./ZIndexLayer-BdQyI4NS.js";import"./types-CzM6FhOK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-B54n4LWH.js";import"./step-CAX9qAEt.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DRdB4DWi.js";import"./useAnimationId-BzqZ1CPr.js";import"./ActivePoints-BcBYuZ18.js";import"./Dot-CrmxLVmG.js";import"./RegisterGraphicalItemId-DWEdhGSI.js";import"./ErrorBarContext-BC0_okWx.js";import"./GraphicalItemClipPath-Bzcd_Jhp.js";import"./SetGraphicalItem-DrfGre3X.js";import"./getRadiusAndStrokeWidthFromDot-CcpM4ut6.js";import"./ActiveShapeUtils-CSCl1dIf.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
