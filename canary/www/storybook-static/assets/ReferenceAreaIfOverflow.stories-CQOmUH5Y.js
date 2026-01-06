import{e}from"./iframe-CKmpfOpL.js";import{R as s}from"./arrayEqualityCheck-CGTamc7H.js";import{C as p}from"./ComposedChart-CicuSwT1.js";import{C as c}from"./CartesianGrid-Cq5KhU9R.js";import{X as f}from"./XAxis-BBRqfJxe.js";import{Y as l}from"./YAxis-ho-us9Q5.js";import{R as h}from"./ReferenceArea-BRF38410.js";import{R as d}from"./RechartsHookInspector-DZtkbE0Z.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C7FTbt6F.js";import"./PolarUtils-BmD-XZwK.js";import"./RechartsWrapper-D1NbH_UG.js";import"./hooks-BGbqk51h.js";import"./axisSelectors-Bt4_ZMoO.js";import"./zIndexSlice-CQqF6s7B.js";import"./CartesianChart-B2JPCr5o.js";import"./chartDataContext-CLpm-ufS.js";import"./CategoricalChart-CCPcc9Jc.js";import"./CartesianAxis-DmTSqBS2.js";import"./Layer-DhYkCEVl.js";import"./Text-DsSpVH1-.js";import"./DOMUtils-Bi3DtBC5.js";import"./Label-DnuO6Rjq.js";import"./ZIndexLayer-B_sQwTbu.js";import"./types-BLY5tRwt.js";import"./Rectangle-D_zs00yx.js";import"./useAnimationId-DzZ8q-8e.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-moZvkop3.js";import"./ChartSizeDimensions-DFNYoe11.js";import"./OffsetShower-9z7FzopR.js";import"./PlotAreaShower-C7JeV-Sm.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
