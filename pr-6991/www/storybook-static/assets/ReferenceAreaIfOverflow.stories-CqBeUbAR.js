import{e}from"./iframe-DAKkOQol.js";import{R as s}from"./arrayEqualityCheck-NbiC3pou.js";import{C as p}from"./ComposedChart-ChbMrpsj.js";import{C as c}from"./CartesianGrid-mv357iBP.js";import{X as f}from"./XAxis-DHACXabx.js";import{Y as l}from"./YAxis-DShQZAzJ.js";import{R as h}from"./ReferenceArea-BA4lh9ht.js";import{R as d}from"./RechartsHookInspector-BfHJy13b.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BL_LDYW6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DReT11ch.js";import"./hooks-CgQhpM8Q.js";import"./axisSelectors-EdGkev_1.js";import"./zIndexSlice-ConFYYKV.js";import"./CartesianChart-ErdgDL_l.js";import"./chartDataContext-Byh5ybSM.js";import"./CategoricalChart-CO48ZeEI.js";import"./CartesianAxis-BHWsH5fF.js";import"./Layer-BguUBi1k.js";import"./Text-Tp-rAwzV.js";import"./DOMUtils-ngTPzyN_.js";import"./Label-CmclsLbQ.js";import"./ZIndexLayer-CBwJU_Ua.js";import"./types-Dtb0IVPy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-CgMMN0ms.js";import"./useAnimationId-BJodvzW1.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-IHUVzBeJ.js";import"./ChartSizeDimensions-D219SLoR.js";import"./OffsetShower-Bf-TTVbw.js";import"./PlotAreaShower-2vui0Dg8.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
