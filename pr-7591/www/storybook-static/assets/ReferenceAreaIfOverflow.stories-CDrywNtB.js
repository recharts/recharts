import{R as e}from"./iframe-9izd3D9f.js";import{R as s}from"./zIndexSlice-j8GW4H6F.js";import{C as p}from"./ComposedChart-CUUhu7OO.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BQpI-YDI.js";import{X as d}from"./XAxis--s8YS1Wl.js";import{Y as l}from"./YAxis-DDd0ZoO9.js";import{R as h}from"./ReferenceArea-BIuBxhvr.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dy12ptOd.js";import"./index-DfNj7uF8.js";import"./index-QeEXQkn5.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CJPuqJ9q.js";import"./isWellBehavedNumber-Dt2_Y5DC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CpTAS-BM.js";import"./index-DrKXWdQ6.js";import"./index-D25GhdX2.js";import"./renderedTicksSlice-xsvpNcHR.js";import"./axisSelectors-C_YuJB8n.js";import"./d3-scale-592QtAt9.js";import"./CartesianChart-Cdk7-_gT.js";import"./chartDataContext-D7Iq0aTs.js";import"./CategoricalChart-B8CDnPPF.js";import"./CartesianAxis-C-mmkXWm.js";import"./Layer-CGfY9rzU.js";import"./Text-DrtU0dSh.js";import"./DOMUtils-BT3FOC_T.js";import"./Label-DH_iQkHv.js";import"./ZIndexLayer-CbN30hBP.js";import"./types-DZJVpBfQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CsvLvw9-.js";import"./isBuffer-Crkas5dz.js";import"./Rectangle-CFwhI2o-.js";import"./useAnimationId-DwScawE-.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
