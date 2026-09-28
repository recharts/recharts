import{R as e}from"./iframe-w_s9Pd89.js";import{R as p}from"./zIndexSlice-it-eJu8g.js";import{C as s}from"./ComposedChart-DhweWezK.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-LBYnT_h9.js";import{X as d}from"./XAxis-vfiIl3GE.js";import{Y as l}from"./YAxis-CCoq1LN0.js";import{R as h}from"./ReferenceArea-DdLgcTKH.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CTOajQ3R.js";import"./index-BpnKJ17e.js";import"./index-C_RIjmQF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-6WLroyVF.js";import"./isWellBehavedNumber-Dd6bWbIs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ddpcm_Bi.js";import"./axisSelectors-BCLDkErh.js";import"./d3-scale-CNw_APXm.js";import"./index-DXNGRRuP.js";import"./index-JMX4B72w.js";import"./renderedTicksSlice-rrZYFmVg.js";import"./index-ZJJtOEb6.js";import"./CartesianChart-DHQ6NGvH.js";import"./chartDataContext-2knnLAcK.js";import"./CategoricalChart--3BVlkMW.js";import"./CartesianAxis-Dt-9RID0.js";import"./Layer-3ye4UFiI.js";import"./Text-JLeCEDp8.js";import"./DOMUtils-BAN9qVyI.js";import"./useId-BHCtlGO9.js";import"./useBackwardsCompatibleTheme-o--ajDl9.js";import"./Label-hJtR_DxY.js";import"./ZIndexLayer-29vxzJUo.js";import"./types-o4OSUUn5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-D15ntAhJ.js";import"./useAnimationId-CYLXREv3.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
