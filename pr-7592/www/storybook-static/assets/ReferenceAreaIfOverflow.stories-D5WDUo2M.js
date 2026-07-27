import{R as e}from"./iframe-KfsXDyYe.js";import{R as s}from"./zIndexSlice-DRQ5ZoPP.js";import{C as p}from"./ComposedChart-DZx5d73W.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CelUoahD.js";import{X as d}from"./XAxis-BunU0kIP.js";import{Y as l}from"./YAxis-BIQLiJJ1.js";import{R as h}from"./ReferenceArea-BN8gJEU-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-0X77pc-d.js";import"./index-B8nw1mbK.js";import"./index-USmxlz8z.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CJQcFjaM.js";import"./isWellBehavedNumber-B9hqvBfv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1g5OPk8.js";import"./index-BcSxHpM2.js";import"./index-D3u1xKBW.js";import"./renderedTicksSlice-VAstzL9_.js";import"./axisSelectors-DqRFL16u.js";import"./d3-scale-CwZ0fpJQ.js";import"./CartesianChart-CedzGa4b.js";import"./chartDataContext-CrbAMOHN.js";import"./CategoricalChart-D28QOUrV.js";import"./CartesianAxis-DJyQkACC.js";import"./Layer-DvnIPp0b.js";import"./Text-Cvia8ncb.js";import"./DOMUtils-r4qPFFQL.js";import"./Label-dJq5mBhi.js";import"./ZIndexLayer-DyFku1ry.js";import"./types-Cp7Kv4cO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-s5HlCTRW.js";import"./isBuffer-Crkas5dz.js";import"./Rectangle-CVNtesT6.js";import"./useAnimationId-BRufZRyg.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
