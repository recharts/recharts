import{R as e}from"./iframe-WV_asirj.js";import{R as p}from"./zIndexSlice-GixElPZ_.js";import{C as s}from"./ComposedChart-BvVU85k-.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CKu9mYPj.js";import{X as d}from"./XAxis-DD-Khhe3.js";import{Y as l}from"./YAxis-DRMYGn-2.js";import{R as h}from"./ReferenceArea-yMu5E_DQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Ba7gBaVO.js";import"./index-BTbJQRbi.js";import"./index-FtwXBSMR.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CXdIXtb2.js";import"./isWellBehavedNumber-CU2jbRyM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsCMkadb.js";import"./axisSelectors-8uL09VjP.js";import"./d3-scale-Cy0pMHbr.js";import"./index-DNMQn43Q.js";import"./index-BrA93ln9.js";import"./renderedTicksSlice-Dr2G7YjO.js";import"./index-5piGZExt.js";import"./CartesianChart-BSNtd9by.js";import"./chartDataContext-DkG6gPSF.js";import"./CategoricalChart-DnjLzrnf.js";import"./CartesianAxis-BGGDzNNT.js";import"./Layer-D1F1s_Cb.js";import"./Text-Dsqc9k19.js";import"./DOMUtils-CnLU0pz8.js";import"./useId-CWlmqz6v.js";import"./useBackwardsCompatibleTheme-DtOSIckQ.js";import"./Label-Q870r3oo.js";import"./ZIndexLayer-rRlGaKvU.js";import"./types-Cgo928Y8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-WQEGXCsY.js";import"./useAnimationId-DlwLI8cF.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
