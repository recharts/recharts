import{R as e}from"./iframe-CuYkZAih.js";import{R as p}from"./zIndexSlice-0x3uku_R.js";import{C as s}from"./ComposedChart-BkMchBFr.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-_OfLj8s1.js";import{X as d}from"./XAxis-CuSaxTWM.js";import{Y as l}from"./YAxis-2PiHbRgB.js";import{R as h}from"./ReferenceArea-DUFY1GNo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-gMp3XSAK.js";import"./index-D8cZoCL4.js";import"./index-BxmeqXxm.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B8cjP6Xa.js";import"./isWellBehavedNumber-BcDmyfQy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-COZpTTaF.js";import"./axisSelectors-DIa8K2JO.js";import"./d3-scale-DA_CpRjn.js";import"./index-TSt0tMTq.js";import"./index-27otVVTa.js";import"./renderedTicksSlice-Cf_8fVTa.js";import"./index-C60udeJw.js";import"./CartesianChart-dlpQhUsY.js";import"./chartDataContext-FQ-3D9_1.js";import"./CategoricalChart-CzQsygRV.js";import"./CartesianAxis-D3i-DiW_.js";import"./Layer-GHV7gJU9.js";import"./Text-CXyYB23t.js";import"./DOMUtils-CE__HHZf.js";import"./useId-m8zXXplu.js";import"./useBackwardsCompatibleTheme-D-5GiVJq.js";import"./Label-DkhadSFF.js";import"./ZIndexLayer-DhyZBBI_.js";import"./types-CPc5yIEA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CNLbh1Ie.js";import"./useAnimationId-CKSd0jBH.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ne as __namedExportsOrder,oe as default};
