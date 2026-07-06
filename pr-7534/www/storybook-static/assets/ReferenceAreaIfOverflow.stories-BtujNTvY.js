import{R as e}from"./iframe-Dz7fOwcI.js";import{R as s}from"./zIndexSlice-DlvYonxh.js";import{C as p}from"./ComposedChart-Dj2W9R-k.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-NZHV0vEk.js";import{X as d}from"./XAxis-DFw5p9mB.js";import{Y as l}from"./YAxis-BBLdCd6N.js";import{R as h}from"./ReferenceArea-BbF0E73n.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-P3hcp8f5.js";import"./index-ClEhXPgh.js";import"./index-CItZCrSt.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-iMaSxvai.js";import"./isWellBehavedNumber-BNED1DFM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGGSKz0I.js";import"./index-wFbpiefS.js";import"./index-DeBQrWVz.js";import"./renderedTicksSlice-DgHHusta.js";import"./axisSelectors-BrQnrxrh.js";import"./d3-scale-DvZHjVYW.js";import"./CartesianChart-B9Hxpjtk.js";import"./chartDataContext-_X11uzVv.js";import"./CategoricalChart-DAJpY1kv.js";import"./CartesianAxis-Ccqj4A2W.js";import"./Layer-Cbl9ckF3.js";import"./Text-Bb3XY4nD.js";import"./DOMUtils-ChsYv9qG.js";import"./Label-DdFPLPtR.js";import"./ZIndexLayer-uLTirNmh.js";import"./types-BbykzSU1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-B2KMKFcS.js";import"./useAnimationId-DXftpzbd.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
