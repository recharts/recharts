import{r as n,R as t}from"./iframe-C93Nv-sG.js";import{L as p}from"./LineChart-CT61rgaU.js";import{R as s}from"./zIndexSlice-ByU1_vW7.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-hTEgD5KK.js";import{X as d}from"./XAxis-B8fGRCoq.js";import{Y as y}from"./YAxis-jlrI5912.js";import{L as u}from"./Legend-CVAGn_Wv.js";import{L as h}from"./Line-CcowXM7j.js";import{T as g}from"./Tooltip-OZRRMacM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bd-lflJB.js";import"./index-2-1yVY-g.js";import"./index-BGWLrOy5.js";import"./index-CX4bLeAT.js";import"./index-WdxouXHE.js";import"./throttle-DKDTz13_.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B_nw5bC_.js";import"./resolveDefaultProps-C5w327Ax.js";import"./isWellBehavedNumber-Cfr3MT4y.js";import"./d3-scale-DPCHxtwr.js";import"./renderedTicksSlice-BfcPBBmI.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DjN4sIo1.js";import"./chartDataContext-DgDj7d7B.js";import"./CategoricalChart-Ckb0xTkj.js";import"./CartesianAxis-BKA7b1EI.js";import"./Layer-C-yThQSL.js";import"./Text-BwKXAAQh.js";import"./DOMUtils-BXMnIR4n.js";import"./useId-Dcf96ehM.js";import"./useBackwardsCompatibleTheme-LhXwVyLe.js";import"./Label-C3kKco4I.js";import"./ZIndexLayer-txp7Phg0.js";import"./types-DSu39Mtk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BfpK6qZN.js";import"./symbol-DmXohmX3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BajoHWy5.js";import"./uniqBy-CgKYnAzP.js";import"./iteratee-DE2e34V0.js";import"./Curve-C4EKfZxi.js";import"./step-DUN67lSa.js";import"./AnimatedItems-B9gSLTjZ.js";import"./useAnimationId-ChO4WR-0.js";import"./ActivePoints-C6Pzzzqs.js";import"./Dot-4IJHfCjD.js";import"./RegisterGraphicalItemId-DBNNmaKj.js";import"./ErrorBarContext-Bdw1FAXk.js";import"./GraphicalItemClipPath-DHw7w2MP.js";import"./SetGraphicalItem-BVLzKmF8.js";import"./getRadiusAndStrokeWidthFromDot-BKbcHmv5.js";import"./ActiveShapeUtils-CpLwkFCz.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-_pQov7bs.js";import"./Rectangle-CIdUd0kK.js";import"./util-Dxo8gN5i.js";import"./Sector-BjPZNeMG.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
