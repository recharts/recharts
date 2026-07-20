import{R as e}from"./iframe-S_Q04LyU.js";import{R as n}from"./zIndexSlice-Bxg2BBQ3.js";import{C as s}from"./ComposedChart-Bj5eSX1M.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-HgE65v3j.js";import{X as f}from"./XAxis-D78GJHE5.js";import{Y as l}from"./YAxis-Cd8RwLuY.js";import{R as d}from"./ReferenceDot-BkQbYTKq.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-sJ5Xwj7N.js";import"./index-B7fnCzo3.js";import"./index-bxbAArpl.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dy-13YZo.js";import"./isWellBehavedNumber-B7JVG4WI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DllIXhjL.js";import"./index-rMJKouwD.js";import"./index-TooQEcPQ.js";import"./renderedTicksSlice-xSk0hPIv.js";import"./axisSelectors-BPn6DSnk.js";import"./d3-scale-C2cmQNtP.js";import"./CartesianChart-BKdvFgR6.js";import"./chartDataContext-pLCds2Ae.js";import"./CategoricalChart-90tJb_l9.js";import"./CartesianAxis-DhttszFl.js";import"./Layer-gdhaFlzY.js";import"./Text-C30Me8vu.js";import"./DOMUtils-b86ja7SN.js";import"./Label-DpgEyudD.js";import"./ZIndexLayer-Cyu3q_2t.js";import"./types-B2JQaABL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Dot-D891HGOH.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
