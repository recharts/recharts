import{R as e}from"./iframe-DpDTD0JG.js";import{R as n}from"./zIndexSlice-DGwVx7BW.js";import{C as s}from"./ComposedChart-B51SS0m3.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B3XOwetY.js";import{X as f}from"./XAxis-DWjiAOFV.js";import{Y as l}from"./YAxis-tfWa7V5m.js";import{R as d}from"./ReferenceDot-Cumq0fVw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DoBh-DCx.js";import"./index-DWuIzRsj.js";import"./index-Knde-ajF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CxXNP2HM.js";import"./isWellBehavedNumber-DmMeAzDB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCxYcmRP.js";import"./index-B2s4Biye.js";import"./index-Cd_oQMUU.js";import"./renderedTicksSlice-BRwKivWp.js";import"./axisSelectors-Ck_lqLE7.js";import"./d3-scale-BfEaqYEJ.js";import"./CartesianChart-BR7vTuCF.js";import"./chartDataContext-DFDKJiUi.js";import"./CategoricalChart-C6CLVh4_.js";import"./CartesianAxis-C7YtKMNS.js";import"./Layer-lPi_1jCz.js";import"./Text-Bc5Ou4J8.js";import"./DOMUtils-3wivgqkH.js";import"./Label-BwbI5cJ6.js";import"./ZIndexLayer-DqWsyuzf.js";import"./types-C1vx5dmr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CVSBj4p3.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DB73TuWs.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
