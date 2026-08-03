import{R as e}from"./iframe-w1sUw1VE.js";import{R as s}from"./zIndexSlice-BFtIIbIH.js";import{C as p}from"./ComposedChart-BjXbyHB1.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CoEf9ips.js";import{X as d}from"./XAxis-Cjs911bp.js";import{Y as l}from"./YAxis-DDPi_wRf.js";import{R as h}from"./ReferenceArea-DocCcijD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-9uSjnkRJ.js";import"./index-CKtl8pQB.js";import"./index-JAlJc66Y.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DsVHMq00.js";import"./isWellBehavedNumber-B6HqUKYK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-kdFU-RZ0.js";import"./index-B50wbS8k.js";import"./index-DREvHpCt.js";import"./renderedTicksSlice-BYSsRx-Z.js";import"./axisSelectors-Fjy06-Ct.js";import"./d3-scale-BNSttRgc.js";import"./CartesianChart-Cpc3KnxA.js";import"./chartDataContext-Qn0Ey9bz.js";import"./CategoricalChart-DPuU_nkZ.js";import"./CartesianAxis-CxEX_iq4.js";import"./Layer-B0FPP_Ev.js";import"./Text-BMcE5w5g.js";import"./DOMUtils-CT4eanyO.js";import"./Label-DclIafX4.js";import"./ZIndexLayer-BmjcQumE.js";import"./types-BKQwKiAc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-ws5do87s.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-unJoww32.js";import"./useAnimationId-oodeuVFJ.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
