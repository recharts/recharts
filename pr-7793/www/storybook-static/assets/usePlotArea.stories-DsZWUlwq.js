import{R as t}from"./iframe-BZt9gdNh.js";import{j as a}from"./RechartsWrapper-Cay7o2ht.js";import{R as p}from"./zIndexSlice-XuBBmNUo.js";import{C as n}from"./ComposedChart-j-NLk7cw.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-JaEdki4U.js";import{X as l}from"./XAxis-C8XTecZS.js";import{Y as h}from"./YAxis-B6iDX6TN.js";import{L as c}from"./Legend-D6yaaFNr.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D9AqqL0J.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cl7dH9vF.js";import"./throttle-B4vKrVKm.js";import"./index-Dp5cLYAc.js";import"./index-CaEFKWj4.js";import"./isWellBehavedNumber-Br3w71g0.js";import"./d3-scale-GcIZdCoT.js";import"./index-B_o6Jv3Z.js";import"./index-B5FMXu9L.js";import"./renderedTicksSlice-CswugCrI.js";import"./index-DjzlGcMj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B0JWnvwa.js";import"./chartDataContext-DfJ9Dq10.js";import"./CategoricalChart-qRJJqTbq.js";import"./Layer-DrcPzbE2.js";import"./Curve-CNkmv-tl.js";import"./types-Rk0FsTZp.js";import"./step-Cs04DkZC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-dtI7DJaK.js";import"./Label-CgKCxMe1.js";import"./Text-CeEgQkK1.js";import"./DOMUtils-CENtu6Ky.js";import"./useId-BpCkPPis.js";import"./useBackwardsCompatibleTheme-B33DH1wF.js";import"./ZIndexLayer-BUepW3qO.js";import"./useAnimationId-DFFh1fwK.js";import"./ActivePoints-x646kZg_.js";import"./Dot-Baaq2D37.js";import"./RegisterGraphicalItemId-DHjWQaqm.js";import"./ErrorBarContext-Di40cu4W.js";import"./GraphicalItemClipPath-DFXU-IsT.js";import"./SetGraphicalItem-Bu5vFhfh.js";import"./getRadiusAndStrokeWidthFromDot-BR61MnO_.js";import"./ActiveShapeUtils-BSpPce9D.js";import"./useGraphicalItemIdentity-CraBFHaJ.js";import"./CartesianAxis-Cv8lslC5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Bc8IP3E4.js";import"./symbol-CyhJoWFM.js";import"./useElementOffset-CNPicTEJ.js";import"./uniqBy-C655Zvfo.js";import"./iteratee-DgWSL6uQ.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
