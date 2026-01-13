import{r as n,e as t}from"./iframe-BqhCRw8_.js";import{L as p}from"./LineChart-DGN3ymUm.js";import{R as s}from"./arrayEqualityCheck-C0e5XGku.js";import{C as c}from"./CartesianGrid-_rSYIU2z.js";import{X as l}from"./XAxis-B6heQTMm.js";import{Y as d}from"./YAxis--q0qF4k-.js";import{L as y}from"./Legend-CKVoaOnK.js";import{L as h}from"./Line-oXXYYyzH.js";import{T as u}from"./Tooltip-BDidcHyN.js";import{R as g}from"./RechartsHookInspector-D3QTgPO3.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CKbioI8N.js";import"./hooks-9X7mYxl9.js";import"./axisSelectors-HrCd8mj3.js";import"./zIndexSlice-DIIl2FeU.js";import"./resolveDefaultProps-Ayaicgzr.js";import"./PolarUtils-DQrS6uhh.js";import"./CartesianChart-FjeQ0j5o.js";import"./chartDataContext-CS827bLR.js";import"./CategoricalChart-DGivdYUS.js";import"./CartesianAxis-D53Jp3Xe.js";import"./Layer-STOxxKM-.js";import"./Text-BS3Ermk4.js";import"./DOMUtils-Dw5i-fzQ.js";import"./Label-DtQEJ7YC.js";import"./ZIndexLayer-ZQy-DVxw.js";import"./types-DSzwAYYq.js";import"./Symbols-BJgGnflL.js";import"./Curve-ttUwhXb9.js";import"./useElementOffset-By4t1ZxX.js";import"./iteratee-CYK2JnRd.js";import"./ReactUtils-CMMuRoIm.js";import"./ActivePoints-C1iInYcK.js";import"./Dot-8ifXwx0k.js";import"./RegisterGraphicalItemId-OICgoI54.js";import"./ErrorBarContext-B1PjpMzV.js";import"./GraphicalItemClipPath-De0vPM73.js";import"./SetGraphicalItem-5CyATFN5.js";import"./useAnimationId-DEFSqTDH.js";import"./getRadiusAndStrokeWidthFromDot-Dvx47Ego.js";import"./ActiveShapeUtils-BwvIzm_Z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bg3AWp4l.js";import"./Trapezoid-D6Ifyq-x.js";import"./Sector-Cc8cLGGz.js";import"./Cross-CXjdlaIM.js";import"./index-BUjJ7HF5.js";import"./ChartSizeDimensions-DGTJjry1.js";import"./OffsetShower-HUtE30KP.js";import"./PlotAreaShower-C7l9vpaF.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,gt as __namedExportsOrder,ut as default};
