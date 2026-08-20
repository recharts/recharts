import{R as e}from"./iframe-Bxb7fTI_.js";import{R as n}from"./zIndexSlice-Dc8AhsBR.js";import{C as s}from"./ComposedChart-BUiYgrq1.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Bio2Kdhg.js";import{X as f}from"./XAxis-CkOknljo.js";import{Y as l}from"./YAxis-nAknvnvN.js";import{R as d}from"./ReferenceDot-BFSv3Iuo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CFHzUNT1.js";import"./index-Cx8Wpi4i.js";import"./index-Bo-C2AfN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BI7lk0Xh.js";import"./isWellBehavedNumber-CwdI5Moi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DZ0rQEPQ.js";import"./index-DTEA-FIe.js";import"./index-C-XRKF5d.js";import"./axisSelectors-B6Hc05Ed.js";import"./d3-scale-Dc6IGH61.js";import"./renderedTicksSlice-CGX0B5OX.js";import"./CartesianChart-DeUsHf5g.js";import"./chartDataContext-BelA56cJ.js";import"./CategoricalChart-D-PTwWFe.js";import"./CartesianAxis-CMkdpaa1.js";import"./Layer-DjfrzuA0.js";import"./Text-CjptF509.js";import"./DOMUtils-pu9LPEtL.js";import"./useId-BnCOmIJ8.js";import"./useBackwardsCompatibleTheme-4TZTHq_s.js";import"./Label-CTFdx9tw.js";import"./ZIndexLayer-oyOyBp5p.js";import"./types-sJxYiwgt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-CatBtppS.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
