import{R as e}from"./iframe-B8oHBE2B.js";import{R as s}from"./zIndexSlice-CY69X-_e.js";import{C as p}from"./ComposedChart-D7HXrnrm.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-2imRBn1n.js";import{X as d}from"./XAxis-ZjtmoAYX.js";import{Y as l}from"./YAxis-xlwnxq94.js";import{R as h}from"./ReferenceArea-B0QvH9mc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CgUiyAYX.js";import"./throttle-CUYrrG0C.js";import"./index-DmSsi07Q.js";import"./index-cJCZbnBh.js";import"./RechartsWrapper-DFBUYq9O.js";import"./axisSelectors-Ds5h7JK9.js";import"./polarAxisSelectors-D2FYbhjQ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CbMuV4Xw.js";import"./index-DMrvH4_y.js";import"./index-DGZRfgJf.js";import"./renderedTicksSlice-a5-uxQKT.js";import"./index-BO756sza.js";import"./fillDefinitions-DKQEn6JZ.js";import"./CartesianChart-Cx94wGq6.js";import"./chartDataContext-DF9RfUto.js";import"./CategoricalChart-B_DdruJc.js";import"./CartesianAxis-DLXM_Mrp.js";import"./Layer-d-LKmDNk.js";import"./Text-CvT3zU9x.js";import"./ZIndexLayer-ctGMKsDO.js";import"./Label-Do0pS3hb.js";import"./types-pqA8tR2L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-DSfNDwxH.js";import"./useAnimationId-DstXvFRQ.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
