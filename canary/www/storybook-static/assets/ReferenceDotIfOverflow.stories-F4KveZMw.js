import{R as e}from"./iframe-DNntBodD.js";import{R as m}from"./zIndexSlice-DiWKALGY.js";import{C as p}from"./ComposedChart-BH2fklny.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-LMPXAGBk.js";import{X as f}from"./XAxis-BY2gNAXm.js";import{Y as l}from"./YAxis-CF14HcHp.js";import{R as d}from"./ReferenceDot-DzkL0EWe.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C7dkKHPf.js";import"./index-DJMKHO2r.js";import"./index-Dseq7l94.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BBBno9Vz.js";import"./isWellBehavedNumber-BAVeTOtu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-v1Mup_kK.js";import"./axisSelectors-B-JAPPws.js";import"./d3-scale-B1cdCOGf.js";import"./index-D3OPKtIE.js";import"./index-C8meDON6.js";import"./renderedTicksSlice-CzSTMxGf.js";import"./index-BzMcqiTa.js";import"./CartesianChart-xqtu5zOX.js";import"./chartDataContext-GWmAYxkF.js";import"./CategoricalChart-Bgnt48NN.js";import"./CartesianAxis-DWyLKLt1.js";import"./Layer-BJ4Iw8RT.js";import"./Text-CagXdBG4.js";import"./DOMUtils-Dvaq5fYM.js";import"./useId-D2xBfPBM.js";import"./useBackwardsCompatibleTheme-CfEQJ-O-.js";import"./Label-CCBtX9go.js";import"./ZIndexLayer-BnBloPVM.js";import"./types-DE65RlUn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DwijN6tl.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
