import{R as e}from"./iframe-ChR0bWJE.js";import{R as p}from"./zIndexSlice-BhLIr8Wn.js";import{C as s}from"./ComposedChart-ClNwId6E.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CJXtM4Q6.js";import{X as d}from"./XAxis-DMWQS67d.js";import{Y as l}from"./YAxis-CGpwp8Ub.js";import{R as h}from"./ReferenceArea-DVUD0bCR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DlIXztO0.js";import"./index-DG8BxRhE.js";import"./index-B9kAIK4B.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DDJR-IFM.js";import"./isWellBehavedNumber-v660MqsB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DcESOjG2.js";import"./axisSelectors-D10lFE-B.js";import"./d3-scale-Be-Yls2-.js";import"./index-C2XNNLS0.js";import"./index-CIRFvFA-.js";import"./renderedTicksSlice-DGFTmoGv.js";import"./index-4WBQ6tEH.js";import"./CartesianChart-Csbt_4F2.js";import"./chartDataContext-B7Ty1jH-.js";import"./CategoricalChart-e5ydFkpC.js";import"./CartesianAxis-ColQ2GQs.js";import"./Layer-sRcONOkX.js";import"./Text-C-MZlV37.js";import"./pageBackground-Ck_Bl7JJ.js";import"./useId-Boe0dqcZ.js";import"./useBackwardsCompatibleTheme-vM76QVPo.js";import"./Label-6wqjlAjr.js";import"./ZIndexLayer-WvB5637-.js";import"./types-Db9gT7h1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-DhVq85Wn.js";import"./useAnimationId-rUKK14dF.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
