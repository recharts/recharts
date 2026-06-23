import{R as e}from"./iframe-B-rX_Ovq.js";import{R as s}from"./zIndexSlice-BsQifls5.js";import{C as p}from"./ComposedChart-BlAyCMqM.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BFrBqPSh.js";import{X as d}from"./XAxis-SdNRN-8o.js";import{Y as l}from"./YAxis-Cicu2WWw.js";import{R as h}from"./ReferenceArea-DG8QAeWh.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DYOeNz8_.js";import"./index-D2kGKgGj.js";import"./index-Bh_-T13z.js";import"./get-DdRsJrM-.js";import"./resolveDefaultProps-D1pz5wzG.js";import"./isWellBehavedNumber-DgpUmT_-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCnMK_aC.js";import"./index-chviYFta.js";import"./index-CpJc3r_b.js";import"./renderedTicksSlice-DQrcKm6F.js";import"./axisSelectors-CfXFgmuu.js";import"./d3-scale-DG2A9yU0.js";import"./CartesianChart-Hr6f_olX.js";import"./chartDataContext-CWp3X-kc.js";import"./CategoricalChart-BH_EAWmt.js";import"./CartesianAxis-Cxy1JVbR.js";import"./Layer-BzDAHWqw.js";import"./Text-CbyfEyi5.js";import"./DOMUtils-CImWbOuY.js";import"./Label-CL0zassZ.js";import"./ZIndexLayer-CFxBNrtU.js";import"./types-BrxUVIV4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-BNA8eQFW.js";import"./useAnimationId-Bc7mMz9I.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
