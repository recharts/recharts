import{r as n,R as t}from"./iframe-C20wDroG.js";import{L as p}from"./LineChart-BeuH2A-9.js";import{R as s}from"./zIndexSlice-Dn977bIM.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DhTGlh1s.js";import{X as d}from"./XAxis-bncj55mF.js";import{Y as y}from"./YAxis-Dregax_Z.js";import{L as u}from"./Legend-D6Pxhrbc.js";import{L as h}from"./Line-BK0Z6C9x.js";import{T as g}from"./Tooltip-_ToFbj_m.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ajeFxaVY.js";import"./index-B_Gj3SOI.js";import"./index-CwuSxHdI.js";import"./index-Drz6B1BJ.js";import"./index-D0HNPWdm.js";import"./throttle-D_pKwmSO.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D2d7y5tB.js";import"./resolveDefaultProps-DUXs9b9S.js";import"./isWellBehavedNumber-CiTmvWUm.js";import"./d3-scale-CMJeOIiZ.js";import"./renderedTicksSlice-CDLV8c3e.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D0DqF69B.js";import"./chartDataContext-BN_dA9lB.js";import"./CategoricalChart-BPRT5cE8.js";import"./CartesianAxis-BCVPeUYs.js";import"./Layer-DDCJtugd.js";import"./Text-DGWMJ0hU.js";import"./DOMUtils-CaGG5Hmm.js";import"./useId-HPBRJy0D.js";import"./useBackwardsCompatibleTheme-CdR6FU4E.js";import"./Label-DkS9BWG5.js";import"./ZIndexLayer-DPgbR3ka.js";import"./types-BDuMvVkF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CkjYU1xm.js";import"./symbol-BOBSpd1m.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dnes-XqG.js";import"./uniqBy-2EVv77Lm.js";import"./iteratee-CfZ0Y8VA.js";import"./Curve-CmAw5S9J.js";import"./step-cmv5QLzJ.js";import"./AnimatedItems-BeGp4Wik.js";import"./useAnimationId-Bc7mxzMe.js";import"./ActivePoints-Bxc8A2aK.js";import"./Dot-tDq1zpNX.js";import"./RegisterGraphicalItemId-CBXEWS4T.js";import"./ErrorBarContext-B7iknVLS.js";import"./GraphicalItemClipPath-DnJzFjkV.js";import"./SetGraphicalItem-DfmFtgCH.js";import"./getRadiusAndStrokeWidthFromDot-BXHe0lbi.js";import"./ActiveShapeUtils-BjalrG5Q.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-D4jIbQ8y.js";import"./Rectangle-Bmy5AWRQ.js";import"./util-Dxo8gN5i.js";import"./Sector-B3XUnZrl.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
