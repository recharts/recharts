import{R as e}from"./iframe-D972tbhF.js";import{R as s}from"./zIndexSlice-Dmvy26G-.js";import{C as p}from"./ComposedChart-CTTx4JQZ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CY_9Ffyk.js";import{X as d}from"./XAxis-QP_2w1I7.js";import{Y as l}from"./YAxis-MB1xCt9L.js";import{R as h}from"./ReferenceArea-BlrxOv0H.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D2OThsuy.js";import"./index-D9VN6yju.js";import"./index-C5z2sCvf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D_CwbNhq.js";import"./isWellBehavedNumber-CISTmZa5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ouFvztbg.js";import"./index-oKVWKKHt.js";import"./index-zPQcggW0.js";import"./axisSelectors-uJIqnO2D.js";import"./d3-scale-CR9xOcuY.js";import"./renderedTicksSlice-Dv4CGxUS.js";import"./CartesianChart-BjAe6VAT.js";import"./chartDataContext-Cq56uXGO.js";import"./CategoricalChart-DKJz-sZX.js";import"./CartesianAxis-B06URywl.js";import"./Layer-C5RVdPDc.js";import"./Text-Dysxol0f.js";import"./DOMUtils-DPBa-ha3.js";import"./Label-BZnc8KKN.js";import"./ZIndexLayer-Dhusbhig.js";import"./types-DLeA2L4w.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C7EwwBej.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-C3KTtfAJ.js";import"./useAnimationId-BPwHrlOs.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
