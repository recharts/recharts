import{R as e}from"./iframe-aNoK1EMe.js";import{R as s}from"./zIndexSlice-DOhDXvjb.js";import{C as p}from"./ComposedChart-ciK3m7lP.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CJxsBUSc.js";import{X as d}from"./XAxis-BsEbRcU-.js";import{Y as l}from"./YAxis-flrMIfza.js";import{R as h}from"./ReferenceArea-CNC3V1gI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-dDtgRmGr.js";import"./index-DU0cxzai.js";import"./index-Bu0CjtZ3.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DbC1kYAP.js";import"./isWellBehavedNumber-DwwkvD-i.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-k_DNRHdW.js";import"./index-D5XON-Gh.js";import"./index-BdDC1fi3.js";import"./renderedTicksSlice-D-IRHrV3.js";import"./axisSelectors-Bs_-tFvB.js";import"./d3-scale-_Xy_yJsZ.js";import"./CartesianChart-9qcKzyck.js";import"./chartDataContext-DZNoVeTg.js";import"./CategoricalChart-xLJxNslX.js";import"./CartesianAxis-CeEjLShX.js";import"./Layer-BCtIHmhS.js";import"./Text-Dek-bfvO.js";import"./DOMUtils-B40T5FB1.js";import"./Label-DiB3OAIB.js";import"./ZIndexLayer-DGcx9JLL.js";import"./types-Be_2sCPa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Rectangle-DLQWIh8f.js";import"./useAnimationId-B-ZOGiBc.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
