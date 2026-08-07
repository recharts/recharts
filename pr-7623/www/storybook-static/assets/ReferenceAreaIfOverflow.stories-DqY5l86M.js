import{R as e}from"./iframe-B67xakaW.js";import{R as s}from"./zIndexSlice-D0TzJ1fR.js";import{C as p}from"./ComposedChart-DYPq6hki.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CG4D2kRB.js";import{X as d}from"./XAxis-FKOR1g-7.js";import{Y as l}from"./YAxis-CgnEOw1P.js";import{R as h}from"./ReferenceArea-CYVvyIpM.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BKrvbeAi.js";import"./index-C636565A.js";import"./index-hWCiHkWI.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B29-kufx.js";import"./isWellBehavedNumber-ClgfPGEs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cx8TqoHO.js";import"./index-CvOnsJ-w.js";import"./index-Dk_c5Xjv.js";import"./axisSelectors-DXeKf5vs.js";import"./d3-scale-DAYedkSi.js";import"./renderedTicksSlice-B7Sc1x4H.js";import"./CartesianChart-BLDHGv8m.js";import"./chartDataContext-CfIiS_I3.js";import"./CategoricalChart-DgP4TH9i.js";import"./CartesianAxis-CPVS6EgD.js";import"./Layer-DydnlLJq.js";import"./Text-Cz97PcLA.js";import"./DOMUtils-B9paDAsr.js";import"./Label-DIs948ZI.js";import"./ZIndexLayer-Bldiyv4x.js";import"./types-CBHC2Uao.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CKqExDZQ.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-eKfFzmse.js";import"./useAnimationId-pFv40dAf.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
