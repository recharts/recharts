import{R as e}from"./iframe-CQ0Lljz5.js";import{R as p}from"./zIndexSlice-DEHrA3Rr.js";import{C as s}from"./ComposedChart-CDVvV506.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DAHH3aHX.js";import{X as d}from"./XAxis-DOKTQQJO.js";import{Y as l}from"./YAxis-BU1cXErq.js";import{R as h}from"./ReferenceArea-BsH1haNI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D0Qp2wbd.js";import"./index-CgKUH7Pt.js";import"./index-DJBjlh9k.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BJD_NHtt.js";import"./isWellBehavedNumber-B5oWMPg-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dx4TkxXI.js";import"./axisSelectors-CIePYxzF.js";import"./d3-scale-bZdbqgmB.js";import"./index--XZnrZ3Q.js";import"./index-_-Q-FGj6.js";import"./renderedTicksSlice-BkkJdu7D.js";import"./index-BGyIiFfh.js";import"./CartesianChart-MQW7TOME.js";import"./chartDataContext-DkzXheoo.js";import"./CategoricalChart-DFae7qCs.js";import"./CartesianAxis-K2XDXRUA.js";import"./Layer-DFHm6cg2.js";import"./Text-CnTJRORA.js";import"./DOMUtils-DMu9BuDW.js";import"./useId-aq3DvHIK.js";import"./useBackwardsCompatibleTheme-CNmncO23.js";import"./Label-D63u7ve3.js";import"./ZIndexLayer-Bj3SLdvY.js";import"./types-BxcasGOq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-scsETNBO.js";import"./useAnimationId-CcXfV18V.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
