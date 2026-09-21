import{R as e}from"./iframe-B8S5mZni.js";import{R as m}from"./zIndexSlice-C7WPWBHj.js";import{C as p}from"./ComposedChart-BFmInjuY.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-tDRJN_IA.js";import{X as f}from"./XAxis-Del5mp5I.js";import{Y as l}from"./YAxis-CXfsjvSU.js";import{R as d}from"./ReferenceDot-DSmnTtmM.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DJQOHpml.js";import"./index-BRy-1fgE.js";import"./index-DkKi0J9U.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B-gwRbWC.js";import"./isWellBehavedNumber-TBIenFex.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNwO_82A.js";import"./axisSelectors-Im4hMjdM.js";import"./d3-scale-siXpSW3b.js";import"./index-wxI64tZb.js";import"./index-CiAWbHQN.js";import"./renderedTicksSlice-BoqO-m_z.js";import"./index-DmW1QCPA.js";import"./CartesianChart-CYUUiu8V.js";import"./chartDataContext-B9Fl8ZXu.js";import"./CategoricalChart-za3sj-4w.js";import"./CartesianAxis-D2B7a931.js";import"./Layer-DKzqyPeV.js";import"./Text-DDGxlEP5.js";import"./DOMUtils-DwuCUUr8.js";import"./useId-7Q8874Q1.js";import"./useBackwardsCompatibleTheme-v1szHh_7.js";import"./Label-DZ6C1Cc6.js";import"./ZIndexLayer-OLi9LTWb.js";import"./types-BZDZh7Dp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-Dq-zru-b.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
