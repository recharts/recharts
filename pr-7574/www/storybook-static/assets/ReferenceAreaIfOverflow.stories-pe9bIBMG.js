import{R as e}from"./iframe-CSEjTzPi.js";import{R as s}from"./zIndexSlice-D_RH8zNR.js";import{C as p}from"./ComposedChart-D_Dji_bW.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BgwHL7aZ.js";import{X as d}from"./XAxis-ClW-CKIG.js";import{Y as l}from"./YAxis-CLbub78N.js";import{R as h}from"./ReferenceArea-BjE0Bp2V.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DaFWWJDR.js";import"./index-CUrD2lSO.js";import"./index-CnUd66Ue.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BozJKtND.js";import"./isWellBehavedNumber-CzqG-O5b.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-AtEN8KAH.js";import"./index-Ba7n3l96.js";import"./index-CBv6hKJf.js";import"./renderedTicksSlice-E8p_yuf8.js";import"./axisSelectors-D_moIkNX.js";import"./d3-scale-CTeKr7fc.js";import"./CartesianChart-Dl0PI1ZO.js";import"./chartDataContext-D54q9WWr.js";import"./CategoricalChart-DzTcvl21.js";import"./CartesianAxis-Mej6s-Ju.js";import"./Layer-CcgNOeDR.js";import"./Text-Pr_fu-xU.js";import"./DOMUtils-Dvp2PgSJ.js";import"./Label-COqEjZup.js";import"./ZIndexLayer-CCVrkImG.js";import"./types-CLne6YGI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Rectangle-CxDLp35k.js";import"./useAnimationId-De2Quo8T.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
