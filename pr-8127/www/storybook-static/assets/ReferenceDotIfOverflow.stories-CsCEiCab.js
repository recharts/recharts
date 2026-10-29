import{R as e}from"./iframe-BmCEaXnl.js";import{R as m}from"./zIndexSlice-CCSErHLO.js";import{C as s}from"./ComposedChart-X5OSzv7C.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CpUWFpw2.js";import{X as f}from"./XAxis-u0XIPlGG.js";import{Y as l}from"./YAxis-wM7iKB0B.js";import{R as d}from"./ReferenceDot-DgjIboLl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CFAPbmi-.js";import"./throttle-qcDxTsLf.js";import"./index-BqP1aJDu.js";import"./index-F6n6DaVK.js";import"./RechartsWrapper-e4k-RA_5.js";import"./axisSelectors-jGKN6-F9.js";import"./polarAxisSelectors-pAXQteq7.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DOe-rCGU.js";import"./index-BTkbJW8j.js";import"./index-B6BvyTbH.js";import"./renderedTicksSlice-2egCQc0E.js";import"./index-C_f_Jppx.js";import"./CartesianChart-r4VMNRon.js";import"./ZIndexPortal-QH_cbCJt.js";import"./CategoricalChart-DB6XzEGw.js";import"./CartesianAxis-MWIUmivx.js";import"./Layer-BpXqwf7v.js";import"./Text-CVqIJR2f.js";import"./DOMUtils-C4PB-VGE.js";import"./ZIndexLayer-CQzpYkd8.js";import"./Label-BMv4awTg.js";import"./types-_yr4vfnQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-Cf5kf7-L.js";import"./Dot-BKYa8qvg.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},te=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,te as __namedExportsOrder,ee as default};
