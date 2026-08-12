import{r as n,R as t}from"./iframe-CVyYUHBB.js";import{L as p}from"./LineChart-B2InQOzn.js";import{R as s}from"./zIndexSlice-DQO5Hbgs.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BDm06sUL.js";import{X as d}from"./XAxis-L2wk8rnW.js";import{Y as y}from"./YAxis-Da2JXkbU.js";import{L as u}from"./Legend-DdTk7cU9.js";import{L as h}from"./Line-BPoyEZrU.js";import{T as g}from"./Tooltip-bL6ikWyH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B47jb7Bg.js";import"./index-Ck0Bo50f.js";import"./index-DLItSsfJ.js";import"./index-DyYl91DI.js";import"./index-Bu-B5WMy.js";import"./throttle-BBXZcEly.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CMqkaAfm.js";import"./resolveDefaultProps-C7voaGK7.js";import"./isWellBehavedNumber-BkHFck3s.js";import"./d3-scale-G2cHgOnr.js";import"./renderedTicksSlice-Cdp3Xg1W.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart--y5fp4Ts.js";import"./chartDataContext-CkCkvPBB.js";import"./CategoricalChart-BzwwubIO.js";import"./CartesianAxis-890WjR3i.js";import"./Layer-BB5O4xlv.js";import"./Text-CiA3AAlg.js";import"./DOMUtils-ukWQHZl5.js";import"./RechartsThemeContext-NTsyT9p1.js";import"./Label-DUcJCWBn.js";import"./ZIndexLayer-DBw3xiu4.js";import"./types-DESxFXXj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DMTBO25H.js";import"./symbol-BSVPaPlS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BXKfJxEF.js";import"./uniqBy-CHZtDAbM.js";import"./iteratee-CwapYXfW.js";import"./Curve-BDPvfmPk.js";import"./step-Be_wHVCe.js";import"./AnimatedItems-Clv-mx2A.js";import"./useAnimationId-_KC_AMgU.js";import"./ActivePoints-D1NkQNgM.js";import"./Dot-D0NdtXSm.js";import"./RegisterGraphicalItemId-BhQ648vE.js";import"./ErrorBarContext-Buq5hkgo.js";import"./GraphicalItemClipPath-JgdFdpvQ.js";import"./SetGraphicalItem-C8TpD4Nn.js";import"./getRadiusAndStrokeWidthFromDot-OHCftA6z.js";import"./ActiveShapeUtils-D5nCu2Hc.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BgZQfds0.js";import"./Rectangle-AHQh490H.js";import"./util-Dxo8gN5i.js";import"./Sector-3KjT9U1p.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
