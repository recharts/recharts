import{e}from"./iframe-DJH7-DuZ.js";import{R as s}from"./arrayEqualityCheck-BCL8BMWc.js";import{C as p}from"./ComposedChart-DQohHPn5.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CKoa0GDb.js";import{X as l}from"./XAxis-CZkA-oar.js";import{Y as h}from"./YAxis-D7iD0ncq.js";import{R as d}from"./ReferenceArea-CBap3Bol.js";import{R as x}from"./RechartsHookInspector-Cl1nQjm_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DEI4xjdp.js";import"./immer-Up9jfWyF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-lBMzT84x.js";import"./index-DdbzQdr9.js";import"./hooks-CHeZq7QJ.js";import"./axisSelectors-QKrA9-VE.js";import"./d3-scale-DorYBcEd.js";import"./zIndexSlice-DDN8c_9B.js";import"./renderedTicksSlice-BZJ0LC0-.js";import"./CartesianChart-DS-UTjvk.js";import"./chartDataContext-tGyrX-5w.js";import"./CategoricalChart-BCCF7qba.js";import"./CartesianAxis-CPsFrMJH.js";import"./Layer-DXEVbG5U.js";import"./Text-D3lbDKii.js";import"./DOMUtils-MBSOXcf3.js";import"./Label-CqQ3p6o_.js";import"./ZIndexLayer-BCFams-U.js";import"./types-xH_rqDEy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-DffZWIBt.js";import"./useAnimationId-CnjUKELe.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-3J-EA25K.js";import"./ChartSizeDimensions-B_Dm3cCN.js";import"./OffsetShower-BnHyQTzL.js";import"./PlotAreaShower-B21fSxhD.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
