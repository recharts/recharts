import{r as p,R as t}from"./iframe-B5g3I7ev.js";import{L as n}from"./LineChart-DZMSaTwR.js";import{R as s}from"./zIndexSlice-DGvgy2X6.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C7KPRcbe.js";import{X as d}from"./XAxis-BhxgbA2b.js";import{Y as y}from"./YAxis-8glJaMk0.js";import{L as u}from"./Legend-CFeBRj0Y.js";import{L as h}from"./Line-CzGLEasr.js";import{T as g}from"./Tooltip-CHIKe2CP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bo6Jfh5F.js";import"./resolveDefaultProps-CNWhfhMM.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DjPo8MIe.js";import"./throttle-DboQbEZw.js";import"./index-CUp993cz.js";import"./index-BAWIKs3X.js";import"./isWellBehavedNumber-C-qAxBmX.js";import"./d3-scale-C7u8uwmP.js";import"./index-Z4LdU3de.js";import"./index-wrz3e8tU.js";import"./renderedTicksSlice-BmUG22gY.js";import"./index-DQOAurO-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CCYXF9ai.js";import"./chartDataContext-DiPBxGan.js";import"./CategoricalChart-BprHnfNJ.js";import"./CartesianAxis-CufURV0j.js";import"./Layer-BzSrPOIw.js";import"./Text-BYK6re_u.js";import"./DOMUtils-BBurC4Bd.js";import"./useId-BeJfkheV.js";import"./useBackwardsCompatibleTheme-BDfv2Eej.js";import"./Label-T3V6prm0.js";import"./ZIndexLayer-C61b4tvj.js";import"./types-4J1YdzxR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BArdl8gR.js";import"./symbol-BI5IrfIV.js";import"./path-DyVhHtw_.js";import"./useElementOffset-9_pOD8zc.js";import"./uniqBy-3ryMdrvw.js";import"./iteratee-D8S9d83o.js";import"./Curve-CnFbZ5iA.js";import"./step-CCbudcDx.js";import"./AnimatedItems-BAgU6T0J.js";import"./useAnimationId-E9ax1yjD.js";import"./ActivePoints-DonB9ZTw.js";import"./Dot-DrD1foSY.js";import"./RegisterGraphicalItemId-B0kmn4VH.js";import"./ErrorBarContext-CUA3MPdo.js";import"./GraphicalItemClipPath-C2l89xTF.js";import"./SetGraphicalItem-B2TqdHsC.js";import"./getRadiusAndStrokeWidthFromDot-lubS4zqJ.js";import"./ActiveShapeUtils-BHMUVdMS.js";import"./useGraphicalItemIdentity-DeD0kRsv.js";import"./Cross-9hgsawqu.js";import"./Rectangle-BtmGpz6E.js";import"./util-Dxo8gN5i.js";import"./Sector-4FsQvLtK.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
