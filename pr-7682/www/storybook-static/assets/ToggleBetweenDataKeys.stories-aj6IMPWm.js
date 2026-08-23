import{r as n,R as t}from"./iframe-mnAzB4o-.js";import{L as p}from"./LineChart-wrzwy6-X.js";import{R as s}from"./zIndexSlice-D6JZj8nu.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BOdqfpIi.js";import{X as d}from"./XAxis-BJJ3SHcS.js";import{Y as y}from"./YAxis-CaUMjbmS.js";import{L as u}from"./Legend-CmWQNkqO.js";import{L as h}from"./Line-ClUmRFWF.js";import{T as g}from"./Tooltip-CkPVTX4w.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C7l6xfyV.js";import"./index-DwcIeoVT.js";import"./index-UdOV9nJO.js";import"./index-BVGAPrUY.js";import"./index-CtygltyQ.js";import"./throttle-DkA8wIil.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C1jFNzqn.js";import"./resolveDefaultProps-DC3M7TEl.js";import"./isWellBehavedNumber-Csz_97LF.js";import"./d3-scale-CRNCXhx2.js";import"./renderedTicksSlice-Bqv1L3Am.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D3iAW6ju.js";import"./chartDataContext-d1JBVIv3.js";import"./CategoricalChart-Dvtv2sve.js";import"./CartesianAxis-BJUtWOS_.js";import"./Layer-Cr54uUjf.js";import"./Text-BI5zaK2n.js";import"./DOMUtils-CS3XthwK.js";import"./useId-DlzE9UHI.js";import"./useBackwardsCompatibleTheme-D4uIz6B3.js";import"./Label-CHzafVhK.js";import"./ZIndexLayer-B_AeVWGh.js";import"./types-CREZv15c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Kcb7M6d1.js";import"./symbol-CzjYWchS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bv8ynH_4.js";import"./uniqBy-xa31W4My.js";import"./iteratee-BHZlqNLc.js";import"./Curve-o9IX9QPv.js";import"./step-BYsm7KBD.js";import"./AnimatedItems-DKc9cClm.js";import"./useAnimationId-C2CD38MP.js";import"./ActivePoints-0ixA6i7h.js";import"./Dot-CbnujumB.js";import"./RegisterGraphicalItemId-CVIGTwbR.js";import"./ErrorBarContext-BqNwP9Uy.js";import"./GraphicalItemClipPath-2kfGKsY1.js";import"./SetGraphicalItem-C3b_Fk26.js";import"./getRadiusAndStrokeWidthFromDot-CGiQ8j25.js";import"./ActiveShapeUtils-CPpaX7pN.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-ixwHigiP.js";import"./Rectangle-D-paqn8Q.js";import"./util-Dxo8gN5i.js";import"./Sector-B_puyY74.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
