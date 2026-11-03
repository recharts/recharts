import{r as p,R as t}from"./iframe-BNtNFygj.js";import{L as n}from"./LineChart-DlKxR0Pf.js";import{R as s}from"./zIndexSlice-B5_48POF.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dt7wk6to.js";import{X as d}from"./XAxis-CD7gPBRF.js";import{Y as y}from"./YAxis-BOh_LEcr.js";import{L as u}from"./Legend-C7LMyXkq.js";import{L as h}from"./Line-jOR65EnP.js";import{T as g}from"./Tooltip-CbPx-O8K.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CuiNtI3q.js";import"./resolveDefaultProps-DL7SVEd6.js";import"./get-cF5BDHN6.js";import"./axisSelectors-mpzDPz7I.js";import"./throttle-D7zSzoPk.js";import"./index-W1q-JWvv.js";import"./index-Da7ZrvvU.js";import"./polarAxisSelectors-1cb9nRSh.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-AvjMremu.js";import"./index-CfoYvP3O.js";import"./index-BaHcdURT.js";import"./renderedTicksSlice-Gd5JIWsJ.js";import"./index-DIbrCmVg.js";import"./fillDefinitions-DMQk4akV.js";import"./CartesianChart-BuwWmjhG.js";import"./ZIndexPortal-yiaw4zX4.js";import"./CategoricalChart-xvnPgk-J.js";import"./CartesianAxis-B0AA9leW.js";import"./Layer-BWvVPR01.js";import"./Text-CVsQWuYy.js";import"./DOMUtils-rxSz7zRH.js";import"./ZIndexLayer-DDjEreuo.js";import"./Label-CtODaKOy.js";import"./types-Bv6DwZgB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DqFb5GoD.js";import"./symbol-z9UqeDk-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BAzX0SkM.js";import"./uniqBy-dp3XQ01K.js";import"./iteratee-CSMACznW.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CzR2ia5J.js";import"./step-3Vwob_iR.js";import"./LabelList-BMYELo_i.js";import"./ActivePoints-CXNwUvpE.js";import"./Dot-DlYRSPs_.js";import"./activeStyles-B8Yp5U6S.js";import"./useAnimationId-DUqQXAVR.js";import"./dataEntryStyles-Bi8dthc7.js";import"./ErrorBarContext-BnU4GK2I.js";import"./SetGraphicalItem-D8wY5DBd.js";import"./getRadiusAndStrokeWidthFromDot-BCWYzwNk.js";import"./ActiveShapeUtils-BNpZBMKl.js";import"./useEffectiveDataKey-BUQC0_MU.js";import"./Cross-Ch0LMa9x.js";import"./Rectangle-BeuBChLi.js";import"./util-Dxo8gN5i.js";import"./Sector-p7c5jngg.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
