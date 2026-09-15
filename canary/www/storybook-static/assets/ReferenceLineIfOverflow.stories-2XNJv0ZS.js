import{R as e}from"./iframe-qeJRbQC_.js";import{R as a}from"./zIndexSlice-7202Aouk.js";import{C as p}from"./ComposedChart-CxuV2NoV.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D-AsCndx.js";import{X as f}from"./XAxis-u_1Q5fGR.js";import{Y as l}from"./YAxis-BZzCIX-v.js";import{L as d}from"./Line-gjOGxWIr.js";import{R as h}from"./ReferenceLine-B6WWs-cz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bm7TlndJ.js";import"./index-BD72gC8i.js";import"./index-DyUeFg7T.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DeRAgm8x.js";import"./isWellBehavedNumber-CEbP45d6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CI86w_cv.js";import"./axisSelectors-D3Tk6yw2.js";import"./d3-scale-DPqZAioL.js";import"./index-DfrLYgMZ.js";import"./index-COOVNst_.js";import"./renderedTicksSlice-BMyK9gC5.js";import"./index-BOsshKUN.js";import"./CartesianChart-D9mK1Hr2.js";import"./chartDataContext-BPJsRsvJ.js";import"./CategoricalChart-DXUZLIpB.js";import"./CartesianAxis-BByvFPIV.js";import"./Layer-DnfYbRaC.js";import"./Text-CGxsVVX7.js";import"./DOMUtils-DzJTCa9O.js";import"./useId-BP7tb9fo.js";import"./useBackwardsCompatibleTheme-DmTHavmp.js";import"./Label-IJrwe4z6.js";import"./ZIndexLayer-D8LlaNHN.js";import"./types-CQ8TW7B4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-u1NUazY3.js";import"./step-m8FbBLvj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ba5qFTnf.js";import"./useAnimationId-Dc0yoLfA.js";import"./ActivePoints-zmt_Feef.js";import"./Dot-BTyyD634.js";import"./RegisterGraphicalItemId-C6fN5b4g.js";import"./ErrorBarContext-Brj2ZIP_.js";import"./GraphicalItemClipPath-wv7NC4zW.js";import"./SetGraphicalItem-BpzaqcDs.js";import"./getRadiusAndStrokeWidthFromDot-8Ne4VOFo.js";import"./ActiveShapeUtils-DKEMCySD.js";import"./useGraphicalItemIdentity-DtcgFGn-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
