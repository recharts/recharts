import{r as n,R as t}from"./iframe-tjnA4ZJo.js";import{L as p}from"./LineChart-BppoQF-g.js";import{R as s}from"./zIndexSlice-C0N8aUUS.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CX-XzHb5.js";import{X as d}from"./XAxis-C_h8MhtB.js";import{Y as y}from"./YAxis-BN_pqP4r.js";import{L as u}from"./Legend-B6tcd6Eb.js";import{L as h}from"./Line-Cwid8INE.js";import{T as g}from"./Tooltip-CbkLMveH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CWJ-Ct21.js";import"./index-BXBph9CX.js";import"./index-zHF4-EZF.js";import"./index-BTfui88R.js";import"./index-BBMNndk4.js";import"./throttle-BG5Cbw48.js";import"./get-C2VjdU0L.js";import"./axisSelectors-kO8GHbei.js";import"./resolveDefaultProps-Bpk1yIxn.js";import"./isWellBehavedNumber-C0zpNc8z.js";import"./d3-scale-DO15g-NA.js";import"./renderedTicksSlice-cCRvnCrJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Fpuc0WuY.js";import"./chartDataContext-Czgamfqs.js";import"./CategoricalChart-4thYKElI.js";import"./CartesianAxis-CBg_pQkI.js";import"./Layer-BffJbX--.js";import"./Text-D3he8dQP.js";import"./DOMUtils-Bpsfg4Oe.js";import"./useBackwardsCompatibleTheme-WfOg4bTb.js";import"./Label-CYvlsQvC.js";import"./ZIndexLayer-J8-hOCa0.js";import"./types-B1JXlqQN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-kjmF9QMx.js";import"./symbol-FDo79mI1.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BodDkwvF.js";import"./uniqBy-n-0FIf0H.js";import"./iteratee-BlG9qfWt.js";import"./Curve-CyJ2f9jM.js";import"./step-OCCE-5TJ.js";import"./AnimatedItems-6MMSMcYJ.js";import"./useAnimationId-1S4zeXgZ.js";import"./ActivePoints-BiBnoeEb.js";import"./Dot-3hZpkGF4.js";import"./RegisterGraphicalItemId-CPAkHit-.js";import"./ErrorBarContext-B_e3sY13.js";import"./GraphicalItemClipPath-CVEv0QyJ.js";import"./SetGraphicalItem-Bw7kOs9y.js";import"./getRadiusAndStrokeWidthFromDot-CaYPlNA5.js";import"./ActiveShapeUtils-D6_9Syl7.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-D4DCD1JZ.js";import"./Rectangle-Ckn9RlkE.js";import"./util-Dxo8gN5i.js";import"./Sector-CiC563Fg.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
