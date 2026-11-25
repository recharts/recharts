import{R as e}from"./iframe-DC5T2GCj.js";import{R as s}from"./zIndexSlice-DOsx9V2z.js";import{C as p}from"./ComposedChart-Dc1csNHW.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-B28T3YID.js";import{X as d}from"./XAxis-CfQ_9fqW.js";import{Y as l}from"./YAxis-lqkl3rqG.js";import{R as h}from"./ReferenceArea-DWftxsnX.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-gSxbvbxj.js";import"./get-CjriyByo.js";import"./throttle-CU56JRf7.js";import"./index-CxhZ_jtS.js";import"./index-CuovNQzi.js";import"./RechartsWrapper-DYjSRCa_.js";import"./axisSelectors-B_BJB7t0.js";import"./polarAxisSelectors-ftiVMEmb.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ccs_pA9m.js";import"./index-BzBudmwv.js";import"./index-Dg66RVOT.js";import"./renderedTicksSlice-B-kM46TD.js";import"./index-BFdMDMd2.js";import"./fillDefinitions-Bx7rUJI2.js";import"./CartesianChart-7SPsAfcZ.js";import"./chartDataContext-BhVo_C4q.js";import"./CategoricalChart-BjWBv8hx.js";import"./CartesianAxis-Ldc9waKq.js";import"./Layer-CPK-7NIh.js";import"./Text-agvS8xSD.js";import"./ZIndexLayer-CauVCDM2.js";import"./Label-CWyu9wCB.js";import"./types-Bpysv2Pn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-Hs6i8eyj.js";import"./useAnimationId-Do3keAzT.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
