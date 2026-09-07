import{R as e}from"./iframe-s76JLJT4.js";import{R as m}from"./zIndexSlice-BAzWj5Bm.js";import{C as p}from"./ComposedChart-CrJ4dqI5.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BPGidQVt.js";import{X as f}from"./XAxis-oY-MxrDT.js";import{Y as l}from"./YAxis-Dp0QA8yk.js";import{R as d}from"./ReferenceDot-Chttm5Wy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DlYzKYH1.js";import"./index-D791KxLc.js";import"./index-u4HpiE5R.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BacpidNF.js";import"./isWellBehavedNumber-BfAJeodP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CzmQgFdw.js";import"./axisSelectors-BVRh__it.js";import"./d3-scale-3iO39mKP.js";import"./index-BP9e58dC.js";import"./index-5KrtyyBx.js";import"./renderedTicksSlice-YO-Fp9Ef.js";import"./index-v7GV83G6.js";import"./CartesianChart-BHvBdOos.js";import"./chartDataContext-heFiBO7H.js";import"./CategoricalChart-Bnpv8dk8.js";import"./CartesianAxis-wofyjDXK.js";import"./Layer-S_x0F8ws.js";import"./Text-B6LThSxq.js";import"./DOMUtils-duej-PH-.js";import"./useId-DWgk4q6e.js";import"./useBackwardsCompatibleTheme-C6S0KGB6.js";import"./Label-BK0AZvtz.js";import"./ZIndexLayer-RER6T0Dj.js";import"./types-B1A5enlV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-bQR7q4wH.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
