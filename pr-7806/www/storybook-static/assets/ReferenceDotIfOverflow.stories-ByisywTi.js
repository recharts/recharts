import{R as e}from"./iframe-B7hbNEXj.js";import{R as m}from"./zIndexSlice-B7xQcNcG.js";import{C as p}from"./ComposedChart-CBHvobIY.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-R_m8YFEY.js";import{X as f}from"./XAxis-DTRImo2J.js";import{Y as l}from"./YAxis-DYrUNm06.js";import{R as d}from"./ReferenceDot-CdiABRnS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BSjszxUH.js";import"./index-Dqn8czyj.js";import"./index-BYIthK0p.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CZFMPmgx.js";import"./isWellBehavedNumber-7V-rOBye.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-jiH_AYjt.js";import"./axisSelectors-MpDLX8pO.js";import"./d3-scale-BYK0PNRi.js";import"./index-yv8yhgLp.js";import"./index-BXYzHp_E.js";import"./renderedTicksSlice-CuhNidwY.js";import"./index-C8e3_gAU.js";import"./CartesianChart-DfAXRIqb.js";import"./chartDataContext-BXIYwbQE.js";import"./CategoricalChart-yOdjtk4z.js";import"./CartesianAxis-CneZULGs.js";import"./Layer-osX5cZvY.js";import"./Text-DWuYBy5V.js";import"./DOMUtils-BhIaSreR.js";import"./useId-CxLZ9MIg.js";import"./useBackwardsCompatibleTheme-L1kNM3iV.js";import"./Label-lNQzMu7Z.js";import"./ZIndexLayer-jcXUwYN8.js";import"./types-C3ibKMTz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-ArvJ9HsL.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
