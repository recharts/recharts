import{r as p,R as t}from"./iframe-BJZoea5Q.js";import{L as n}from"./LineChart-C79lDmel.js";import{R as s}from"./zIndexSlice-3SrN7G8I.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CHKHKifi.js";import{X as d}from"./XAxis-x49kq4XJ.js";import{Y as y}from"./YAxis-CuM9t2qy.js";import{L as u}from"./Legend-BlBBdJ0C.js";import{L as h}from"./Line-BNZk4sLa.js";import{T as g}from"./Tooltip-B05ie6I6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CEdFNSj2.js";import"./resolveDefaultProps-p2HAfk0o.js";import"./get-C2VjdU0L.js";import"./axisSelectors-10L_Paee.js";import"./throttle-DhjtP12Z.js";import"./index-eqi9YN1t.js";import"./index-BDOUu_G8.js";import"./isWellBehavedNumber-PsmwNW5h.js";import"./d3-scale-Bo47ZJJr.js";import"./index-BdI0Temb.js";import"./index-Q3HRKpx2.js";import"./renderedTicksSlice-DjcslC9u.js";import"./index-ey4yeO--.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DDkwxTw9.js";import"./chartDataContext-2iVlib8J.js";import"./CategoricalChart-DYS4mlap.js";import"./CartesianAxis-zlv9iD03.js";import"./Layer-CY8EZbPL.js";import"./Text-C846DGO8.js";import"./DOMUtils-DMsPd0Jf.js";import"./useId-CgY4hBIS.js";import"./useBackwardsCompatibleTheme-cb-KLBvK.js";import"./Label-CKHttH-g.js";import"./ZIndexLayer-gq-nfNXC.js";import"./types-DB2bYquS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CJSFJ2Z-.js";import"./symbol-nJQKKWnA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cr52qiLm.js";import"./uniqBy-C2cKh28N.js";import"./iteratee-DxckVfRJ.js";import"./Curve-C2T2vEED.js";import"./step-DQt_azzu.js";import"./AnimatedItems-B1n61v19.js";import"./useAnimationId-DIbB0gmH.js";import"./ActivePoints-BIetIDgh.js";import"./Dot-CgLNu5xp.js";import"./RegisterGraphicalItemId-lL7ggMEp.js";import"./ErrorBarContext-CE1fn35z.js";import"./GraphicalItemClipPath-BEj7XwPx.js";import"./SetGraphicalItem-BvBiLTUU.js";import"./getRadiusAndStrokeWidthFromDot-DajYH82O.js";import"./ActiveShapeUtils-t9roLBb8.js";import"./useGraphicalItemIdentity-CiHiONr1.js";import"./Cross-BLk8fHnY.js";import"./Rectangle-DShU24mH.js";import"./util-Dxo8gN5i.js";import"./Sector-Dp9ZSCFr.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
