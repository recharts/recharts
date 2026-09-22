import{R as e}from"./iframe-D0zbLhxA.js";import{R as p}from"./zIndexSlice-CWkdbIA2.js";import{C as s}from"./ComposedChart-Bxco2poZ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Dxz-EVsG.js";import{X as d}from"./XAxis-C4BjHZeA.js";import{Y as l}from"./YAxis-BZXRR7_6.js";import{R as h}from"./ReferenceArea-BeYxP6aQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B_CESfsw.js";import"./index-88DQaVXO.js";import"./index-CyOzo8aY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BgsmPYXb.js";import"./isWellBehavedNumber-x1jcTYzd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BY5Xz_58.js";import"./axisSelectors-BlTNsS6D.js";import"./d3-scale-DfMtHGNT.js";import"./index-BWHvlcOR.js";import"./index-Blp0C-1x.js";import"./renderedTicksSlice-DXlRaIPl.js";import"./index-Bnqxj0FR.js";import"./CartesianChart-BS4vd5Ws.js";import"./chartDataContext-CXCNMTYE.js";import"./CategoricalChart-0fndcTvE.js";import"./CartesianAxis-HOzTxsIt.js";import"./Layer-CmDCK7Pe.js";import"./Text-_UZJg8Mt.js";import"./DOMUtils-CI9OljrR.js";import"./useId-DQM9uYad.js";import"./useBackwardsCompatibleTheme-BiiWRDQN.js";import"./Label-BXZW4D8v.js";import"./ZIndexLayer-BARNP0Xd.js";import"./types-CtSuVyzs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CXJxULof.js";import"./useAnimationId-DmbXEcsZ.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
