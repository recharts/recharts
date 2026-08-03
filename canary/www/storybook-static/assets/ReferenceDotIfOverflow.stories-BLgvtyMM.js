import{R as e}from"./iframe-BvoaHdmy.js";import{R as n}from"./zIndexSlice-Bsr7cBhR.js";import{C as s}from"./ComposedChart-91fEDFol.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D6bYhLhX.js";import{X as f}from"./XAxis-CDpMlutO.js";import{Y as l}from"./YAxis-m3S-JfIe.js";import{R as d}from"./ReferenceDot-DOXreBUL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DQ4zUznN.js";import"./index-B_-FbWrF.js";import"./index-BIiBQ2RS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DcaR1-NP.js";import"./isWellBehavedNumber-BXi0lz-u.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DtuASqVJ.js";import"./index-b13xllOW.js";import"./index-DeegS3pB.js";import"./renderedTicksSlice-BOmSwCSv.js";import"./axisSelectors-Choe--Hk.js";import"./d3-scale-DHqQWI-P.js";import"./CartesianChart-DoxhMpsB.js";import"./chartDataContext-ChSxK7K-.js";import"./CategoricalChart-B1Q3to5_.js";import"./CartesianAxis-BTq7uWzR.js";import"./Layer-NFFKs1EA.js";import"./Text-D4sNDUmz.js";import"./DOMUtils-DEiR2hJy.js";import"./Label-DD7tXZFM.js";import"./ZIndexLayer-BJa50qFF.js";import"./types-Df8Ct0Qg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-w6Fo4fMR.js";import"./isBuffer-BG75eWKN.js";import"./Dot-BZ0HUF_R.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
