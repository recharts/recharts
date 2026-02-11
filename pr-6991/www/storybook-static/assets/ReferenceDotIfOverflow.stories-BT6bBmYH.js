import{e}from"./iframe-DAKkOQol.js";import{R as n}from"./arrayEqualityCheck-NbiC3pou.js";import{C as s}from"./ComposedChart-ChbMrpsj.js";import{C as p}from"./CartesianGrid-mv357iBP.js";import{X as c}from"./XAxis-DHACXabx.js";import{Y as f}from"./YAxis-DShQZAzJ.js";import{R as l}from"./ReferenceDot-CMZWx9kZ.js";import{R as h}from"./RechartsHookInspector-BfHJy13b.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BL_LDYW6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DReT11ch.js";import"./hooks-CgQhpM8Q.js";import"./axisSelectors-EdGkev_1.js";import"./zIndexSlice-ConFYYKV.js";import"./CartesianChart-ErdgDL_l.js";import"./chartDataContext-Byh5ybSM.js";import"./CategoricalChart-CO48ZeEI.js";import"./CartesianAxis-BHWsH5fF.js";import"./Layer-BguUBi1k.js";import"./Text-Tp-rAwzV.js";import"./DOMUtils-ngTPzyN_.js";import"./Label-CmclsLbQ.js";import"./ZIndexLayer-CBwJU_Ua.js";import"./types-Dtb0IVPy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-CCq0kKAT.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-IHUVzBeJ.js";import"./ChartSizeDimensions-D219SLoR.js";import"./OffsetShower-Bf-TTVbw.js";import"./PlotAreaShower-2vui0Dg8.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
