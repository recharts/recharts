import{r as n,R as t}from"./iframe-9izd3D9f.js";import{L as p}from"./LineChart-BmKNyQkU.js";import{R as s}from"./zIndexSlice-j8GW4H6F.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BQpI-YDI.js";import{X as d}from"./XAxis--s8YS1Wl.js";import{Y as y}from"./YAxis-DDd0ZoO9.js";import{L as u}from"./Legend-DQ3IX6XL.js";import{L as h}from"./Line-DeweEXxf.js";import{T as g}from"./Tooltip-D2A1sLSM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CpTAS-BM.js";import"./index-DrKXWdQ6.js";import"./index-D25GhdX2.js";import"./index-DfNj7uF8.js";import"./index-QeEXQkn5.js";import"./throttle-Dy12ptOd.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-xsvpNcHR.js";import"./axisSelectors-C_YuJB8n.js";import"./resolveDefaultProps-CJPuqJ9q.js";import"./isWellBehavedNumber-Dt2_Y5DC.js";import"./d3-scale-592QtAt9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cdk7-_gT.js";import"./chartDataContext-D7Iq0aTs.js";import"./CategoricalChart-B8CDnPPF.js";import"./CartesianAxis-C-mmkXWm.js";import"./Layer-CGfY9rzU.js";import"./Text-DrtU0dSh.js";import"./DOMUtils-BT3FOC_T.js";import"./Label-DH_iQkHv.js";import"./ZIndexLayer-CbN30hBP.js";import"./types-DZJVpBfQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CsvLvw9-.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-CtJwUDWI.js";import"./symbol-EUEOF-dN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BkW_M-s3.js";import"./uniqBy-BUkiiJvI.js";import"./iteratee-BCGyVx9n.js";import"./Curve-CwmLK7S7.js";import"./step-BVbRt37Q.js";import"./AnimatedItems-BaOOJr-i.js";import"./useAnimationId-DwScawE-.js";import"./ActivePoints-DABmwt2C.js";import"./Dot-BOLG4WLO.js";import"./RegisterGraphicalItemId-DMscoraw.js";import"./ErrorBarContext-BIj0xSPV.js";import"./GraphicalItemClipPath-DPeQpV-c.js";import"./SetGraphicalItem-DzCkGHMg.js";import"./getRadiusAndStrokeWidthFromDot-BjpuMrzG.js";import"./ActiveShapeUtils-BG6vmKAa.js";import"./Cross-c7J_UcAh.js";import"./Rectangle-CFwhI2o-.js";import"./util-Dxo8gN5i.js";import"./Sector-CjIuMRVG.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Lt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Lt as __namedExportsOrder,Et as default};
