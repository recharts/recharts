import{R as e}from"./iframe-NSpsGxr3.js";import{R as p}from"./zIndexSlice-CegrvH4P.js";import{C as s}from"./ComposedChart-BSbO4QCj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-nxa9J9KB.js";import{X as d}from"./XAxis-DNhoou9P.js";import{Y as l}from"./YAxis-s1ngqAL7.js";import{R as h}from"./ReferenceArea-Bk9JKYlb.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-oOh5DhdY.js";import"./index-4AzzKt7j.js";import"./index-0HEoT-e5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BlFb5h3I.js";import"./isWellBehavedNumber-pwlbiGoO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DtJCjJYR.js";import"./axisSelectors-BkwFONEa.js";import"./d3-scale-C3gnRv6y.js";import"./index-BsIlyQNm.js";import"./index-DWO3hHqn.js";import"./renderedTicksSlice-DYxvbfog.js";import"./index-CYtbOF9C.js";import"./CartesianChart-CvLKYupN.js";import"./chartDataContext-DJ-2f6vo.js";import"./CategoricalChart-Dg01q-nM.js";import"./CartesianAxis-BwBDYPDu.js";import"./Layer-BnG363as.js";import"./Text-BtwC4msG.js";import"./DOMUtils-CWTrI1E5.js";import"./useId-BVXNnfLZ.js";import"./useBackwardsCompatibleTheme-C2Bmbb6o.js";import"./Label-BIdOyJIr.js";import"./ZIndexLayer-C4urMDBy.js";import"./types-Co_GWDov.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CmsXYr1b.js";import"./useAnimationId-N_fuM4i0.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ae=["IfOverflow"];export{t as IfOverflow,ae as __namedExportsOrder,oe as default};
