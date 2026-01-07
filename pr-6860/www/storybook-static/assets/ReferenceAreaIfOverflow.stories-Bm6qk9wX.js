import{e}from"./iframe-VZdOSrkq.js";import{R as s}from"./arrayEqualityCheck-Ba8aNuDT.js";import{C as p}from"./ComposedChart-BhKILeAz.js";import{C as c}from"./CartesianGrid-DMjcwRE-.js";import{X as f}from"./XAxis-CUPjg_0f.js";import{Y as l}from"./YAxis-BxbT09X2.js";import{R as h}from"./ReferenceArea-OcbfiiBK.js";import{R as d}from"./RechartsHookInspector-MoE0nLDg.js";import{p as x}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CnCOAE1M.js";import"./PolarUtils-CC6VYEjV.js";import"./RechartsWrapper-Dvu2t6Ac.js";import"./hooks-5m2MLZXp.js";import"./axisSelectors-BKO4jsPN.js";import"./zIndexSlice-C3gfI6wW.js";import"./CartesianChart-BoW6sGG3.js";import"./chartDataContext-B6oCj1lT.js";import"./CategoricalChart-Cp_1f-8v.js";import"./CartesianAxis-dyxsJwQR.js";import"./Layer-BsibGM2g.js";import"./Text-C2K_oBbR.js";import"./DOMUtils-CnMWRd9H.js";import"./Label-wuhIVgaJ.js";import"./ZIndexLayer-G2n4L0mz.js";import"./types-pQqJf-MX.js";import"./Rectangle-CC7CQlR8.js";import"./useAnimationId-DK5gOqc4.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BmO0aGXh.js";import"./ChartSizeDimensions-D3Cff-Ry.js";import"./OffsetShower-kLJdjlLh.js";import"./PlotAreaShower-zycKA3rU.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
