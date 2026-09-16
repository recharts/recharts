import{R as e}from"./iframe-BCNgueVp.js";import{R as p}from"./zIndexSlice-CCtmziB1.js";import{C as s}from"./ComposedChart-BZSfKAao.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Ba6XQPo3.js";import{X as d}from"./XAxis-LOCckWX5.js";import{Y as l}from"./YAxis-FgW2NdaC.js";import{R as h}from"./ReferenceArea-DuQ4KEzi.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-NhPjNryy.js";import"./index-DknrhM99.js";import"./index-C90YdW0D.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BtKNVX8w.js";import"./isWellBehavedNumber-DQrQxdGi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbCJx0GW.js";import"./axisSelectors-D-nEX4IG.js";import"./d3-scale-buoP3Yb_.js";import"./index-WR8kAZrp.js";import"./index-D7hqs4ef.js";import"./renderedTicksSlice-mO9WeRkh.js";import"./index-DhCnaeYc.js";import"./CartesianChart-zbkVSw3C.js";import"./chartDataContext-Di3BbchU.js";import"./CategoricalChart-DQPW05OG.js";import"./CartesianAxis-cRNPmBWR.js";import"./Layer-DVqtOL17.js";import"./Text-DAXsYFxH.js";import"./DOMUtils-C7-Ag6_9.js";import"./useId-Ckkf-sDd.js";import"./useBackwardsCompatibleTheme-CFJvwoVT.js";import"./Label-B2ReDrEH.js";import"./ZIndexLayer-Ccrtcbr9.js";import"./types-Dv8LLmcq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-B8Pg3yvs.js";import"./useAnimationId-CBbWVRap.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
