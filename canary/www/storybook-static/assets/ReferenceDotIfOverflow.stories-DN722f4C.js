import{R as e}from"./iframe-BU3iqhog.js";import{R as m}from"./zIndexSlice-Cpd3Oi8q.js";import{C as p}from"./ComposedChart-CnlQVWiV.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C270DU6Z.js";import{X as f}from"./XAxis-DVT5C2oc.js";import{Y as l}from"./YAxis-C4ehmAHw.js";import{R as d}from"./ReferenceDot-BzFA3O9s.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dtv6RWTH.js";import"./index-JOJ-brJb.js";import"./index-CKIb-o38.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-4q4hBHNx.js";import"./isWellBehavedNumber-DTANvM1I.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-zJDpEykE.js";import"./axisSelectors-C9pjjfER.js";import"./d3-scale-BBqyl05y.js";import"./index--oAu63xI.js";import"./index-BAJoWACv.js";import"./renderedTicksSlice-DJZNDnvY.js";import"./index-Crwgfq_Z.js";import"./CartesianChart-C9c1nVF1.js";import"./chartDataContext-DjOyYX_x.js";import"./CategoricalChart-B34ld9nC.js";import"./CartesianAxis-DRURazzH.js";import"./Layer-BUBmv9mO.js";import"./Text-BrjMZ7T0.js";import"./DOMUtils-CiCEa87M.js";import"./useId-C4wpt1HA.js";import"./useBackwardsCompatibleTheme-BMMiVQGL.js";import"./Label-BEIJZAIQ.js";import"./ZIndexLayer-D4v3Xv2l.js";import"./types-Cp0AAwbW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-C8c1IDgg.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
