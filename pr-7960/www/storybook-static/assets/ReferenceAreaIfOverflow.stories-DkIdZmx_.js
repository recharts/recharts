import{R as e}from"./iframe-BuvSZiBU.js";import{R as p}from"./zIndexSlice-CQnbxV7B.js";import{C as s}from"./ComposedChart-C5RBlYP6.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CnOEuHER.js";import{X as d}from"./XAxis-BOfa2s22.js";import{Y as l}from"./YAxis-BWzjkf00.js";import{R as h}from"./ReferenceArea-DEM9bFOz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Csayz_X_.js";import"./index-BXTQQRSe.js";import"./index-hoeugXO7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BfSOVUjP.js";import"./isWellBehavedNumber-B_8a6RB1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMwFRg1j.js";import"./axisSelectors-DGKzkChq.js";import"./d3-scale-B4_DxsXg.js";import"./index-C49MXgC-.js";import"./index-CItffRII.js";import"./renderedTicksSlice-CC7BtYy2.js";import"./index-Coj2gvLu.js";import"./CartesianChart-BHftvwV6.js";import"./chartDataContext-CCUXEs40.js";import"./CategoricalChart-4mWCyxjg.js";import"./CartesianAxis-BUinM5G-.js";import"./Layer-DVAnIpPd.js";import"./Text-BkZYuu7y.js";import"./pageBackground-BDR7TGLv.js";import"./useId-BuSUlJ9G.js";import"./useBackwardsCompatibleTheme-CJX_yJan.js";import"./Label-w8cJkoy5.js";import"./ZIndexLayer-CF-B9exK.js";import"./types-EtJbnETm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-DSr8qKkL.js";import"./useAnimationId-CdC3v3R9.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
