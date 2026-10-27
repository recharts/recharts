import{R as e}from"./iframe-BhkmDUK8.js";import{R as p}from"./zIndexSlice-Cx3NgCbD.js";import{C as s}from"./ComposedChart-BfTAH9AC.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-D3pDQ3P1.js";import{X as d}from"./XAxis-C6NctsPw.js";import{Y as l}from"./YAxis-CXhwTwOE.js";import{R as h}from"./ReferenceArea-pn5c44n4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CBrUOLtb.js";import"./throttle-BvBRI7mu.js";import"./index-BGM2KozU.js";import"./index-Co7lnbSI.js";import"./RechartsWrapper-DFqlV8En.js";import"./axisSelectors-iANbDNdr.js";import"./polarAxisSelectors-BxjhUIGd.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-6P_5w6kZ.js";import"./index-CMvdSvcn.js";import"./index-DbiGNxfl.js";import"./renderedTicksSlice-BaGEcMV8.js";import"./index-EMj2ovmv.js";import"./CartesianChart-DAEGsrX3.js";import"./ZIndexPortal-B4U04QBk.js";import"./CategoricalChart-DsbjL1iZ.js";import"./CartesianAxis-BmcJMrp5.js";import"./Layer-DN_2iRDC.js";import"./Text-DMX7oKTI.js";import"./pageBackground-4Wz1Kk9n.js";import"./ZIndexLayer-CK_kCyLL.js";import"./Label-BVWylkM-.js";import"./dataEntryStyles-BVrjnugi.js";import"./types-CU7_71qS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-CulpOJA0.js";import"./useAnimationId-49rixTyB.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},oe=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,oe as __namedExportsOrder,re as default};
