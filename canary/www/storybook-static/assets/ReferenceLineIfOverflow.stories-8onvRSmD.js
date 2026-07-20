import{R as e}from"./iframe-B9NgERoL.js";import{R as n}from"./zIndexSlice-CeMrsmMa.js";import{C as p}from"./ComposedChart-DqPZ70OF.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-ByMgXI7P.js";import{X as f}from"./XAxis-aLbTU0vL.js";import{Y as l}from"./YAxis-BZ7igdn9.js";import{L as d}from"./Line--rEciFbL.js";import{R as h}from"./ReferenceLine-BVKf_5j1.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DaANxDja.js";import"./index-1yiXAU6d.js";import"./index-U01BUWsX.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dx164Y1F.js";import"./isWellBehavedNumber-bmfh_B4y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BIufO86S.js";import"./index-IJSHzaJE.js";import"./index-D4sqhJ-M.js";import"./renderedTicksSlice-Cqze-A-7.js";import"./axisSelectors-Cp9fRWWc.js";import"./d3-scale-CeApqfqF.js";import"./CartesianChart-D1OHX_Vn.js";import"./chartDataContext-MrXPhuTJ.js";import"./CategoricalChart-BaN3vUEH.js";import"./CartesianAxis-CU4wTzgV.js";import"./Layer-C_3qb5EZ.js";import"./Text-ouhTNjrK.js";import"./DOMUtils-BpJWFEfX.js";import"./Label-D0wu2lTJ.js";import"./ZIndexLayer-B-abFFm7.js";import"./types-fCUwHeLW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-VzKcWA61.js";import"./step-D7ajG_sH.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C-FRFA-Z.js";import"./useAnimationId-Dul1SXp-.js";import"./ActivePoints-CC4YCm4F.js";import"./Dot-CinH8xYi.js";import"./RegisterGraphicalItemId-DqMxb_Dg.js";import"./ErrorBarContext-Dl5oIQ1g.js";import"./GraphicalItemClipPath-BesQYa1_.js";import"./SetGraphicalItem-KoMfzPcE.js";import"./getRadiusAndStrokeWidthFromDot-CFmXYxCt.js";import"./ActiveShapeUtils-CBSWPzIX.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
