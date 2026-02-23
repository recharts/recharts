import{e}from"./iframe-NG7xn8us.js";import{R as s}from"./arrayEqualityCheck-DBfkDrHK.js";import{C as p}from"./ComposedChart-D59nZdGq.js";import{C as c}from"./CartesianGrid-tO3meBLn.js";import{X as f}from"./XAxis-DsLntPLQ.js";import{Y as l}from"./YAxis-C_VVeJTb.js";import{R as h}from"./ReferenceArea-B2asq6T3.js";import{R as d}from"./RechartsHookInspector-DUqk6vIV.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-wED6QReO.js";import"./immer-B8QNuQuL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BZXpt1WI.js";import"./index-DNpbdYzC.js";import"./hooks-BHzjNaS-.js";import"./axisSelectors-BO092XPC.js";import"./d3-scale-C8XpcDzx.js";import"./zIndexSlice-a1m4fSW4.js";import"./renderedTicksSlice-BnMzv5_X.js";import"./CartesianChart-BQHwW8oQ.js";import"./chartDataContext-CXUKTGqi.js";import"./CategoricalChart-CYSdgUQn.js";import"./CartesianAxis-F1bzBjNH.js";import"./Layer-DoTh6aNf.js";import"./Text-C1Ij1VWt.js";import"./DOMUtils-BH2xyswp.js";import"./Label-mpYwp3tS.js";import"./ZIndexLayer-BXUSr-Ha.js";import"./types-DHhKLS2Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-C6QRuf4O.js";import"./useAnimationId-DOHX5rOk.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D29y0xCx.js";import"./ChartSizeDimensions-DBi-EbUV.js";import"./OffsetShower-BpCRw-nU.js";import"./PlotAreaShower-sY7tlQH0.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
