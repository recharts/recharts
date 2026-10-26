import{R as e}from"./iframe-BKSHRT_S.js";import{R as p}from"./zIndexSlice-BLeuW80U.js";import{C as s}from"./ComposedChart-CD-HLwTO.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Ce-Sqix0.js";import{X as d}from"./XAxis-BuoXjJQH.js";import{Y as l}from"./YAxis-DQujYqlQ.js";import{R as h}from"./ReferenceArea-wma5BV4R.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DcYWqzkb.js";import"./throttle-BkygAiqr.js";import"./index-D7MQE7Za.js";import"./index-D-jrioKU.js";import"./RechartsWrapper-BDEQp4gV.js";import"./axisSelectors-8rGbG1Qd.js";import"./polarAxisSelectors-CQ3ogHuY.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-A-Zbe_Tu.js";import"./index-rcRigKCu.js";import"./index-D9GCJXOs.js";import"./renderedTicksSlice-uVEXaARu.js";import"./index-Cjyk5lan.js";import"./CartesianChart-Bg8a12nJ.js";import"./chartDataContext-vZViOemf.js";import"./CategoricalChart-rdB1CfJb.js";import"./CartesianAxis-D2IkBv7G.js";import"./Layer-BzU6Nn69.js";import"./Text-B6tKJAid.js";import"./pageBackground-DKWjelca.js";import"./useId-PjG3o87t.js";import"./ZIndexLayer-Dc3T9ZED.js";import"./Label-DbF58v67.js";import"./dataEntryStyles-DoThh5sG.js";import"./types-DNwq_ZGY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-MxzM-nYG.js";import"./useAnimationId-Nyn64y9A.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
