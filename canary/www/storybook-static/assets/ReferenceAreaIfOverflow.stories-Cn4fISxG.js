import{R as e}from"./iframe-DzBbDK3f.js";import{R as s}from"./zIndexSlice-BhAJBvui.js";import{C as p}from"./ComposedChart-DlJ6UxJ6.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-saqq4ujh.js";import{X as d}from"./XAxis-CQnsilRX.js";import{Y as l}from"./YAxis-DfXf3Bj6.js";import{R as h}from"./ReferenceArea-CXZdlcAX.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DQoMHntF.js";import"./index-BPARkMMW.js";import"./index-DKCqHE7S.js";import"./get-B36j_mfg.js";import"./resolveDefaultProps-0BSwoaCz.js";import"./isWellBehavedNumber-DiHCDXDD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8vZdR5pa.js";import"./index-tjSc758v.js";import"./index-Blqr4elb.js";import"./renderedTicksSlice-B9_diZXM.js";import"./axisSelectors-VQ5WENH-.js";import"./d3-scale-qbHfyqh1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DtImfiMD.js";import"./chartDataContext-Czi5ozBn.js";import"./CategoricalChart-DVCKFz9W.js";import"./CartesianAxis-CeDbxL1s.js";import"./Layer-BXEIHXdm.js";import"./Text-Cjl7teQi.js";import"./DOMUtils-BTYTQ9_I.js";import"./Label-CGWWfPsR.js";import"./ZIndexLayer-DpRTlowh.js";import"./types-NVYIi3uc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-BlGzqP8k.js";import"./useAnimationId-B-2-DeJx.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
