import{R as t}from"./iframe-DozjnQY4.js";import{j as a}from"./RechartsWrapper-CsvSe4fO.js";import{R as p}from"./zIndexSlice-BgkLcB6R.js";import{C as n}from"./ComposedChart-8ht4NcA2.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DBFiZ6tT.js";import{X as l}from"./XAxis-CMLACdRu.js";import{Y as h}from"./YAxis-DKlfhRHH.js";import{L as c}from"./Legend-D7-pVV-n.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CVm2MzcI.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DgS41G-2.js";import"./throttle-ja6YfGso.js";import"./index-C_fPCGUJ.js";import"./index-DvODWZUZ.js";import"./isWellBehavedNumber-pk6AjLe8.js";import"./d3-scale-DiLIb41e.js";import"./index-B-gAWTo9.js";import"./index-55Hv9cWy.js";import"./renderedTicksSlice-eosOC0PP.js";import"./index-CQZmeOSf.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C23oYJhj.js";import"./chartDataContext-BMMD7dGr.js";import"./CategoricalChart-cz-sFoBH.js";import"./Layer-DqTc2vWN.js";import"./Curve-cLiU8AJA.js";import"./types-BbIJv7s_.js";import"./step-DFSUgzDE.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DN24URVz.js";import"./Label-zwFJYypc.js";import"./Text-CYg0PxB3.js";import"./DOMUtils-12JScs07.js";import"./useId-CoUbJimw.js";import"./useBackwardsCompatibleTheme-ZiWSCSRQ.js";import"./ZIndexLayer-BfyW3t5T.js";import"./useAnimationId-Dn8df37H.js";import"./ActivePoints-B8JQwmYC.js";import"./Dot-8Z6kgu22.js";import"./RegisterGraphicalItemId-DbLQfc-G.js";import"./ErrorBarContext-Ure7iGoK.js";import"./GraphicalItemClipPath-CB6u2457.js";import"./SetGraphicalItem-Ba3q6rOQ.js";import"./getRadiusAndStrokeWidthFromDot-m20kiUFK.js";import"./ActiveShapeUtils-DQCdFpwN.js";import"./useGraphicalItemIdentity-BMnjEDTs.js";import"./CartesianAxis-VBiFHU3A.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B5tB_r3v.js";import"./symbol-DkoFJi3o.js";import"./useElementOffset-q9rliSht.js";import"./uniqBy-DDhkZRqQ.js";import"./iteratee-BypAlLeG.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
