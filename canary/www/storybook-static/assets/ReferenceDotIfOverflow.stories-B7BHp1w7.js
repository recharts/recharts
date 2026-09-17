import{R as e}from"./iframe-DzO9JHZD.js";import{R as m}from"./zIndexSlice-wXMOrHSA.js";import{C as p}from"./ComposedChart-nRRh8kX9.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C58JEBH2.js";import{X as f}from"./XAxis-s5CUDx62.js";import{Y as l}from"./YAxis-DLr6Fu7l.js";import{R as d}from"./ReferenceDot-Bx3ifEXD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-_6vD_mzO.js";import"./index-D6SCMRFc.js";import"./index-DBwiuZT2.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B5PLlTs_.js";import"./isWellBehavedNumber-F-o7IHqi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DFXgxjJb.js";import"./axisSelectors-Bktw6xhv.js";import"./d3-scale-BhZPhAmj.js";import"./index-HY8blrlW.js";import"./index-vlcan66w.js";import"./renderedTicksSlice-B6tapBnR.js";import"./index-DN5zS5di.js";import"./CartesianChart-aILzJ3W8.js";import"./chartDataContext-CW-xn50P.js";import"./CategoricalChart-BMeJEgn8.js";import"./CartesianAxis-ITKfZFUK.js";import"./Layer-CnogDsGN.js";import"./Text-CkTBNTFx.js";import"./DOMUtils-CiXbDn_A.js";import"./useId-BB5zPEe_.js";import"./useBackwardsCompatibleTheme-DXGk--5K.js";import"./Label-CKmL6Jnj.js";import"./ZIndexLayer-CYttbcyg.js";import"./types-Br-ctfN4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-Bz-gpTQG.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
