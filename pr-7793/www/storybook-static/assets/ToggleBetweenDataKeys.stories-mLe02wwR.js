import{r as p,R as t}from"./iframe-CkRErbX3.js";import{L as n}from"./LineChart-rAAIRHdI.js";import{R as s}from"./zIndexSlice-DTmbH2kM.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CwC0PiQW.js";import{X as d}from"./XAxis-B1jTgdYR.js";import{Y as y}from"./YAxis-CAzXCAfe.js";import{L as u}from"./Legend-DP9QQmLJ.js";import{L as h}from"./Line-DO9_PgIv.js";import{T as g}from"./Tooltip-B3kOWmGC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-LX80ZVpP.js";import"./resolveDefaultProps-D0XcYrnY.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BQZb9AEv.js";import"./throttle-BUNP2xt_.js";import"./index-lTKqLNY2.js";import"./index-8q2B2E2Y.js";import"./isWellBehavedNumber-D_Km0wQV.js";import"./d3-scale-CAyfIE8L.js";import"./index-Cj3PhY3N.js";import"./index-DPOnfHKZ.js";import"./renderedTicksSlice-BTBGPftx.js";import"./index-CHvbSDPi.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D7JoZRAe.js";import"./chartDataContext-C9978EDJ.js";import"./CategoricalChart-BNOSmnxT.js";import"./CartesianAxis-BGltcbGd.js";import"./Layer-eVqkjfjk.js";import"./Text-CcsMLAiM.js";import"./DOMUtils-ysvCMZ9n.js";import"./useId-BiQAXzmn.js";import"./useBackwardsCompatibleTheme-Z-DwFZxL.js";import"./Label-Cbc3sDLG.js";import"./ZIndexLayer-mbz94-CG.js";import"./types-ByxJ_946.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DXiS9O9j.js";import"./symbol-qt5DuKbX.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DggOv2T5.js";import"./uniqBy-BwaEYqQz.js";import"./iteratee-BG9CjH6Z.js";import"./Curve-DD6HoqKB.js";import"./step-ZsLkjyrm.js";import"./AnimatedItems-BXDAeM5O.js";import"./useAnimationId-B20w_W1l.js";import"./ActivePoints-DWOGb-Xm.js";import"./Dot-2hkZUwyy.js";import"./RegisterGraphicalItemId-DwpGnQ-i.js";import"./ErrorBarContext-LdHiwwFE.js";import"./GraphicalItemClipPath-osbFejbO.js";import"./SetGraphicalItem-7qiiWKdg.js";import"./getRadiusAndStrokeWidthFromDot-B41JQ_h1.js";import"./ActiveShapeUtils-B8wUCaOd.js";import"./useGraphicalItemIdentity-kWkqpE_r.js";import"./Cross-ComRXYT8.js";import"./Rectangle-IH7PyD6Z.js";import"./util-Dxo8gN5i.js";import"./Sector-DfkCo5uI.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
