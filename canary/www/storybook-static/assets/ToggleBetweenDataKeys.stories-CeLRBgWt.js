import{r as n,R as t}from"./iframe-QVKxPJQm.js";import{L as p}from"./LineChart-B2JDN2Iq.js";import{R as s}from"./zIndexSlice-G0DC-c-K.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B0UIFc_O.js";import{X as d}from"./XAxis-C2HS1FtJ.js";import{Y as y}from"./YAxis-D2swP-TV.js";import{L as u}from"./Legend-sLgq0bx5.js";import{L as h}from"./Line-P2ZNjFCX.js";import{T as g}from"./Tooltip-DJxRTBUk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C-HdUf1N.js";import"./index-CIkXYV9A.js";import"./index-D4ODfY0z.js";import"./index-C30tpYub.js";import"./index-BlfChkir.js";import"./immer-edRA0-Yp.js";import"./get-DLMFwiXu.js";import"./renderedTicksSlice-BovhzHMl.js";import"./axisSelectors-C3vt1wN5.js";import"./d3-scale-CGteqX7a.js";import"./resolveDefaultProps-CEVaC25K.js";import"./isWellBehavedNumber-JryOpPT2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-KcupAlfP.js";import"./chartDataContext-zcaQUTsU.js";import"./CategoricalChart-CeUMrFdM.js";import"./CartesianAxis-DF6IixyN.js";import"./Layer-Bc0oacyD.js";import"./Text-BQy0Q-oS.js";import"./DOMUtils-D8ZqFxMD.js";import"./Label-IjZcZSlh.js";import"./ZIndexLayer-CNHQW8Kz.js";import"./types-DQssRkrH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Ba_SzYwE.js";import"./symbol-DrviD42Y.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DWwojRwA.js";import"./uniqBy-f_3dXFuE.js";import"./iteratee-BmhOMioJ.js";import"./Curve-7I9MiX70.js";import"./step-Bask81UI.js";import"./AnimatedItems--IUYJkxx.js";import"./useAnimationId-BUf_qCat.js";import"./ActivePoints-QMqqqiKi.js";import"./Dot-1qgdhznt.js";import"./RegisterGraphicalItemId-DJWNxqfN.js";import"./ErrorBarContext-CGBznjIg.js";import"./GraphicalItemClipPath-cpuBGhtV.js";import"./SetGraphicalItem-mX53cDIp.js";import"./getRadiusAndStrokeWidthFromDot-4L8nwbWx.js";import"./ActiveShapeUtils-Dv5zSjSn.js";import"./Cross-C4Qn6tVJ.js";import"./Rectangle-BBAzwt0m.js";import"./util-Dxo8gN5i.js";import"./Sector-BP2pJ8-s.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
