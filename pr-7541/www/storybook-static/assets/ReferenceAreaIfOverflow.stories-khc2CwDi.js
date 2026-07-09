import{R as e}from"./iframe-B_vrQl8R.js";import{R as s}from"./zIndexSlice-Cxwz8Tl-.js";import{C as p}from"./ComposedChart-yc7O9hvj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-2-NeYVAl.js";import{X as d}from"./XAxis-Ci68TUER.js";import{Y as l}from"./YAxis-BnsZeISF.js";import{R as h}from"./ReferenceArea-BHMR9eFx.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dyk5owXH.js";import"./index-C_xOR2HM.js";import"./index-D5WptIo8.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-I1lUK0_w.js";import"./isWellBehavedNumber-CBzBJL74.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-6qr9rM4_.js";import"./index-DskW-dUs.js";import"./index-HEwSZYID.js";import"./renderedTicksSlice-BE8z1LZo.js";import"./axisSelectors-DWL2EjSK.js";import"./d3-scale-ByBkJlb2.js";import"./CartesianChart-48RP5Lhn.js";import"./chartDataContext-sXI4Ore6.js";import"./CategoricalChart-C5bYZX9f.js";import"./CartesianAxis-BAwOMXAP.js";import"./Layer-Gd_R9sAX.js";import"./Text-DHNSM_o8.js";import"./DOMUtils-BvPkU0IV.js";import"./Label-CvVA6TIG.js";import"./ZIndexLayer-DUE9jsMX.js";import"./types-B9Larr1k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-q-Ta0Kiu.js";import"./useAnimationId-DAjnsWww.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
