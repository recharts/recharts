import{R as e}from"./iframe-i0tdfO-S.js";import{R as n}from"./zIndexSlice-kcLB36p_.js";import{C as p}from"./ComposedChart-CzSoXaYq.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BJy1eyof.js";import{X as f}from"./XAxis-DVXCxOsO.js";import{Y as l}from"./YAxis-DpT96wDN.js";import{L as d}from"./Line-Cm9DvNYq.js";import{R as h}from"./ReferenceLine-CVwf7dho.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-yuh6eqF5.js";import"./index-C1dNy9AB.js";import"./index-BlLn1ZJf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cqgjjt0o.js";import"./isWellBehavedNumber-BGsBu9W1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CQ-K3_cR.js";import"./index-BsuycueP.js";import"./index-BBdkxuke.js";import"./axisSelectors-C9dKusfX.js";import"./d3-scale-Clxk0FTV.js";import"./renderedTicksSlice-xuaKpSF7.js";import"./CartesianChart-B95UWo8G.js";import"./chartDataContext-DuTDnpGx.js";import"./CategoricalChart-DFB3mzsf.js";import"./CartesianAxis-CDi0h_Ul.js";import"./Layer-CsmYaDC8.js";import"./Text-BMlLhZu5.js";import"./DOMUtils-CUxE2jbS.js";import"./Label-DT2Ych2e.js";import"./ZIndexLayer-CZv5OG2W.js";import"./types-CcIZQOYN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C7h8s25b.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Dy9EB64d.js";import"./step-hH_hNvlA.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DHFbNXP7.js";import"./useAnimationId-OfLHi_5O.js";import"./ActivePoints-pXtGf72N.js";import"./Dot-CtPF4Cca.js";import"./RegisterGraphicalItemId-DtBmeLcC.js";import"./ErrorBarContext-FzqsPEvI.js";import"./GraphicalItemClipPath-BsfG3uc-.js";import"./SetGraphicalItem-DW3yQoWV.js";import"./graphicalItemIdentity-wnXl2DYz.js";import"./ActiveShapeUtils-EZQtDmwK.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
