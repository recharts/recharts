import{R as e}from"./iframe-Bs1YcocL.js";import{R as s}from"./zIndexSlice-t-gzu3GV.js";import{C as p}from"./ComposedChart-BwzNzHHG.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BCkiCSha.js";import{X as d}from"./XAxis-CkMNNwML.js";import{Y as l}from"./YAxis-DPiwbt5y.js";import{R as h}from"./ReferenceArea-BXIt10HU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle--2-Gh3Mm.js";import"./index-UwTvLFMH.js";import"./index-BRumuJ4r.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BnOzFFcK.js";import"./isWellBehavedNumber-BSPOqlf0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DZyIyn43.js";import"./index-D9ADN89d.js";import"./index-CKxampel.js";import"./renderedTicksSlice-BTmhgiNO.js";import"./axisSelectors-DMllfokS.js";import"./d3-scale-37tvwNAS.js";import"./CartesianChart-CcQU6wxH.js";import"./chartDataContext-CPXqqfzF.js";import"./CategoricalChart-WxCIVI_m.js";import"./CartesianAxis-D8VsSsOs.js";import"./Layer-C-8BEA-e.js";import"./Text-BklYvR7D.js";import"./DOMUtils-cVtaUTCs.js";import"./Label-XTRgfpgH.js";import"./ZIndexLayer-CN0cINvr.js";import"./types-DYZE7YT1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-BQAZ15JG.js";import"./useAnimationId-BX2lcr_s.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
