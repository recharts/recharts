import{R as e}from"./iframe-BfLA0-xE.js";import{R as s}from"./zIndexSlice-CxHl2f9g.js";import{C as p}from"./ComposedChart-Bx2fTno4.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-h-ZP1Nr2.js";import{X as d}from"./XAxis-WPatnG2H.js";import{Y as l}from"./YAxis-BCvzYcvQ.js";import{R as h}from"./ReferenceArea-Czcma-dn.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B4u_I-fq.js";import"./index-B543iUM5.js";import"./index-BW364ill.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DtsxpH35.js";import"./isWellBehavedNumber-D8uyT4tB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BAR0yTLB.js";import"./index-BjcF9KIO.js";import"./index-Ua2Ph-JY.js";import"./renderedTicksSlice-CGglt0-o.js";import"./axisSelectors-k3PcgN9v.js";import"./d3-scale-d2-bssiM.js";import"./CartesianChart-BkXNVBYX.js";import"./chartDataContext-CGwkpgmd.js";import"./CategoricalChart-Y3X7k6Lu.js";import"./CartesianAxis-C347muns.js";import"./Layer-D2dAv-AD.js";import"./Text-ClB8EwPj.js";import"./DOMUtils-AQyyON10.js";import"./Label-KTqJ5zS0.js";import"./ZIndexLayer-t--MbcyW.js";import"./types-CMVKXdeT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BFvPG-1n.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CJAi1gPv.js";import"./useAnimationId-Uu44n6G0.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
