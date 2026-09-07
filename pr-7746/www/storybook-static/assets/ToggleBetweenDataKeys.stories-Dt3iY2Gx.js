import{r as p,R as t}from"./iframe-CGBDVxE-.js";import{L as n}from"./LineChart-BB0r3Mhj.js";import{R as s}from"./zIndexSlice-Dcoi5C6v.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dzue6Pof.js";import{X as d}from"./XAxis-Ynp2iGfo.js";import{Y as y}from"./YAxis-CATKcxKg.js";import{L as u}from"./Legend-geTiDdps.js";import{L as h}from"./Line-eMAUoNnx.js";import{T as g}from"./Tooltip-B0x42Fjv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-R5wdE7Du.js";import"./resolveDefaultProps-DFx1_FeE.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DpEiq2v9.js";import"./throttle-r4SgwsRS.js";import"./index-hboVxxbY.js";import"./index-DBtrqjyz.js";import"./isWellBehavedNumber-BDUfwR7p.js";import"./d3-scale-BEr64TMX.js";import"./index-BIKEo4sh.js";import"./index-WvwT3848.js";import"./renderedTicksSlice-D93v-Tca.js";import"./index-DyBKUzQK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DkeZbNrD.js";import"./chartDataContext-BUzll-9F.js";import"./CategoricalChart-_qdlKxZa.js";import"./CartesianAxis-BmUJzq6P.js";import"./Layer-BQpheWca.js";import"./Text-DzBijb3H.js";import"./DOMUtils-D0ua0v6z.js";import"./useId-BXTAvIyb.js";import"./useBackwardsCompatibleTheme-B_EiPeE9.js";import"./Label-rN0i5HX0.js";import"./ZIndexLayer-BQMQ-79w.js";import"./types-ALxpiXvN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-JKCROK7U.js";import"./symbol-BL1c8F5w.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bo3nBkz1.js";import"./uniqBy-Dq6L1riV.js";import"./iteratee-DZ9WVhQn.js";import"./Curve-D7CJuFyB.js";import"./step-DHP97Yog.js";import"./AnimatedItems-BodTqMda.js";import"./useAnimationId-Dg5PDt8u.js";import"./ActivePoints-DVb5cL5_.js";import"./Dot-CBmDQuzq.js";import"./RegisterGraphicalItemId-B6GAZHe-.js";import"./ErrorBarContext-vv2ECrtE.js";import"./GraphicalItemClipPath-CHQFwdrq.js";import"./SetGraphicalItem-CIMjPr92.js";import"./getRadiusAndStrokeWidthFromDot-XfT2XWrG.js";import"./ActiveShapeUtils-tQSQ8w1p.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-D8x6YHTw.js";import"./Rectangle-BrNBFEk8.js";import"./util-Dxo8gN5i.js";import"./Sector-CmmqCzxU.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dataKey, setDataKey] = useState('pv');
    return <>
        <button type="button" onClick={() => {
        if (dataKey === 'pv') {
          setDataKey('uv');
        } else {
          setDataKey('pv');
        }
      }}>
          Change Data Key
        </button>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
