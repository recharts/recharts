import{R as e}from"./iframe-pamQLAuY.js";import{R as s}from"./zIndexSlice-BlDUGc8d.js";import{C as p}from"./ComposedChart-D29eHQa-.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CQCtiiJp.js";import{X as d}from"./XAxis-D-SXbwy8.js";import{Y as l}from"./YAxis-BYc7pX1a.js";import{R as h}from"./ReferenceArea-BC7vZ5r6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-kiiYJYN_.js";import"./throttle-C_B1UjR8.js";import"./index-Cr46aqlt.js";import"./index-WeK6OXUT.js";import"./RechartsWrapper-ub_WEUz3.js";import"./axisSelectors-DKhGUp-k.js";import"./polarAxisSelectors-DoSBNlO9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-eIG0jwTX.js";import"./index-m8mQ2_y4.js";import"./index-QF6L8m8x.js";import"./renderedTicksSlice-BaFBICsx.js";import"./index-Dkcp91gd.js";import"./fillDefinitions-BDZZPSU3.js";import"./CartesianChart-CH5OILiC.js";import"./chartDataContext-B156a3vg.js";import"./CategoricalChart-C57OyuNX.js";import"./CartesianAxis-CWD0k2VK.js";import"./Layer-Cm9mi55v.js";import"./Text-CgAHMzD3.js";import"./ZIndexLayer-DY36flUP.js";import"./Label-53Y237WA.js";import"./types-DIKPUmB7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-B2noBFFP.js";import"./useAnimationId-BGgwVpYD.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
