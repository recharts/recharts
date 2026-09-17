import{R as e}from"./iframe-DzO9JHZD.js";import{R as p}from"./zIndexSlice-wXMOrHSA.js";import{C as s}from"./ComposedChart-nRRh8kX9.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-C58JEBH2.js";import{X as d}from"./XAxis-s5CUDx62.js";import{Y as l}from"./YAxis-DLr6Fu7l.js";import{R as h}from"./ReferenceArea-D5Dt0GQY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-_6vD_mzO.js";import"./index-D6SCMRFc.js";import"./index-DBwiuZT2.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B5PLlTs_.js";import"./isWellBehavedNumber-F-o7IHqi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DFXgxjJb.js";import"./axisSelectors-Bktw6xhv.js";import"./d3-scale-BhZPhAmj.js";import"./index-HY8blrlW.js";import"./index-vlcan66w.js";import"./renderedTicksSlice-B6tapBnR.js";import"./index-DN5zS5di.js";import"./CartesianChart-aILzJ3W8.js";import"./chartDataContext-CW-xn50P.js";import"./CategoricalChart-BMeJEgn8.js";import"./CartesianAxis-ITKfZFUK.js";import"./Layer-CnogDsGN.js";import"./Text-CkTBNTFx.js";import"./DOMUtils-CiXbDn_A.js";import"./useId-BB5zPEe_.js";import"./useBackwardsCompatibleTheme-DXGk--5K.js";import"./Label-CKmL6Jnj.js";import"./ZIndexLayer-CYttbcyg.js";import"./types-Br-ctfN4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-BYTciqJx.js";import"./useAnimationId-CV7fiXfg.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
