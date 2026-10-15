import{R as e}from"./iframe-DpdlAHMd.js";import{R as p}from"./zIndexSlice-D40A4F5S.js";import{C as s}from"./ComposedChart-zgSZL8eg.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-_-u-nYWC.js";import{X as d}from"./XAxis-BEUW7cLW.js";import{Y as l}from"./YAxis-DLQpEtie.js";import{R as h}from"./ReferenceArea-B2O655sR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bui1B-A-.js";import"./index-CKGLfYUI.js";import"./index-D9RL9gGT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DK3XJvDH.js";import"./isWellBehavedNumber-ccQ0ki_-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dd9femQq.js";import"./axisSelectors-DQOroxWm.js";import"./d3-scale-DPtZvEea.js";import"./index-Dgc5VXFD.js";import"./index-CPgT1QoG.js";import"./renderedTicksSlice-BduPU7I5.js";import"./index-938zI0LN.js";import"./CartesianChart-Dhk6ePqg.js";import"./chartDataContext-t_vCqpmk.js";import"./CategoricalChart-Bt7APlp3.js";import"./CartesianAxis-Di7rigDv.js";import"./Layer-B8bai4JO.js";import"./Text-CoXwYvwY.js";import"./pageBackground-D9ogOXyk.js";import"./useId-CnP1W382.js";import"./useBackwardsCompatibleTheme-CGJLu250.js";import"./Label-E3aXJx_S.js";import"./ZIndexLayer-lKfC9naY.js";import"./types-BGps8a2x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CK9sa7-j.js";import"./useAnimationId-BE4SknEb.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
