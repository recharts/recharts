import{R as e}from"./iframe-IXBD7Hhe.js";import{R as s}from"./zIndexSlice-Bx8LfIjs.js";import{C as p}from"./ComposedChart-5suY9yzX.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CO0Gigqi.js";import{X as d}from"./XAxis-XUByFPwA.js";import{Y as l}from"./YAxis-BVu4beHD.js";import{R as h}from"./ReferenceArea-DUk6pc_X.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cb9pxaut.js";import"./index-BH3ea_oR.js";import"./index-CLS2dsqf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-LMM2s1w5.js";import"./isWellBehavedNumber-DuIg09Ee.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C6CdKiKJ.js";import"./index-DHkJVPjU.js";import"./index-P0vZTmxc.js";import"./axisSelectors-Cllx2Xbl.js";import"./d3-scale-DP7A7DdQ.js";import"./renderedTicksSlice-DFEnKLGW.js";import"./CartesianChart-GzQbM-WD.js";import"./chartDataContext-TL9Jhgyo.js";import"./CategoricalChart-CsZZ-_Ww.js";import"./CartesianAxis-vF0DZ8PI.js";import"./Layer-CznxcDV0.js";import"./Text-CKl7HfzI.js";import"./DOMUtils-CIca5pvR.js";import"./Label-COpsAeG1.js";import"./ZIndexLayer-BDgiHtX6.js";import"./types-ootxRHuI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Dmq8UOW5.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-Cg0GC15e.js";import"./useAnimationId-DKTTaUff.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
