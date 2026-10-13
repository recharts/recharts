import{R as e}from"./iframe-HQzZVjBz.js";import{R as p}from"./zIndexSlice-CGQ7Au-h.js";import{C as s}from"./ComposedChart-CL_dGEsU.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Buehb8fQ.js";import{X as d}from"./XAxis-DRgGc3zf.js";import{Y as l}from"./YAxis-B3rEjge7.js";import{R as h}from"./ReferenceArea-D6olvz7S.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CBKyBD78.js";import"./index-B-hjV7sb.js";import"./index-CoahYeeF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-FnTseFp7.js";import"./isWellBehavedNumber-CcswNJGt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CHbQgt_R.js";import"./axisSelectors-Pv4KR-zj.js";import"./d3-scale-Bm5seH5s.js";import"./index-Du00f8Ig.js";import"./index-Cd4WuegV.js";import"./renderedTicksSlice-CBd_vSTQ.js";import"./index-DBkbRNLm.js";import"./CartesianChart-CBFKxon3.js";import"./chartDataContext-B1WnW-uC.js";import"./CategoricalChart-CFFTEefl.js";import"./CartesianAxis-DqRUh5Lc.js";import"./Layer-CZF3Yvdy.js";import"./Text-BOeOqlf9.js";import"./pageBackground-BMzh5QHA.js";import"./useId-CLiKfQI1.js";import"./useBackwardsCompatibleTheme-BydTEdxL.js";import"./Label-CkcS20G_.js";import"./ZIndexLayer-B9EFhzLD.js";import"./types-Bq-isVxM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-BjPRKiky.js";import"./useAnimationId-D_-yy58E.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
