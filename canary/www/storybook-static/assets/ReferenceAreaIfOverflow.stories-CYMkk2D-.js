import{R as e}from"./iframe-DdGnkOFo.js";import{R as s}from"./zIndexSlice-Coao54AN.js";import{C as p}from"./ComposedChart-A-lxRNNH.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-8-gqwNmB.js";import{X as d}from"./XAxis-CwjUQWj_.js";import{Y as l}from"./YAxis-BBZ_UVPr.js";import{R as h}from"./ReferenceArea-5B5K3w87.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-zZssU-Yn.js";import"./index-CLyHvciH.js";import"./index-Z1BsW0X1.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Btuog99o.js";import"./isWellBehavedNumber-vlfZeEqT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWAtSdtd.js";import"./index-BT6JmE6p.js";import"./index-Ikz32X_R.js";import"./renderedTicksSlice-BOOh9KOs.js";import"./axisSelectors-Cd50OEg7.js";import"./d3-scale-BvrGgEa2.js";import"./CartesianChart-BEpSJ7tS.js";import"./chartDataContext-DAj5ZKMQ.js";import"./CategoricalChart-B-_DRhy8.js";import"./CartesianAxis-Bo84uroF.js";import"./Layer-C_y1fxvr.js";import"./Text-DAM87njj.js";import"./DOMUtils-DV9Ec2hx.js";import"./Label-BhIy96Hp.js";import"./ZIndexLayer-Ohjg-EB3.js";import"./types-D3VR5HmA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-Dicu6Oub.js";import"./useAnimationId-6rr0uMBz.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
