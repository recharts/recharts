import{R as e}from"./iframe-DWmnh-44.js";import{R as n}from"./zIndexSlice-BJoYTr5_.js";import{C as s}from"./ComposedChart-W6hZFmz1.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CmSO2f9C.js";import{X as f}from"./XAxis-B-oD2iVw.js";import{Y as l}from"./YAxis-D314iiH8.js";import{R as d}from"./ReferenceDot-NLkO9fWS.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DUM2qh_d.js";import"./index-DOTsKUtA.js";import"./index-BHMOAiDy.js";import"./get-BnHecJzQ.js";import"./resolveDefaultProps-CaNslZFW.js";import"./isWellBehavedNumber-fLv0mpTe.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3xTPXxL.js";import"./index-DVoRxuxV.js";import"./index-DYZmblhi.js";import"./renderedTicksSlice-DsxFAPWV.js";import"./axisSelectors-BiiECraK.js";import"./d3-scale-Cf8jgknj.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CARUth8A.js";import"./chartDataContext-CAO4RomS.js";import"./CategoricalChart-BUEeThvR.js";import"./CartesianAxis-B7Vv6p_O.js";import"./Layer-BzPfvU9G.js";import"./Text-DgygHz8M.js";import"./DOMUtils-DIpMDOYS.js";import"./Label-CfXLQ6Y8.js";import"./ZIndexLayer-CulQyNMA.js";import"./types-DcmHsPIr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-D6jfHQrF.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
