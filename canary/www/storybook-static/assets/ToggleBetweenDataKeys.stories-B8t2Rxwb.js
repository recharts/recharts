import{r as p,R as t}from"./iframe-CUSfJVGy.js";import{L as n}from"./LineChart-Dh8JSBmy.js";import{R as s}from"./zIndexSlice-DHvlitAO.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dd4F1MTn.js";import{X as d}from"./XAxis-93B4Nx5D.js";import{Y as y}from"./YAxis-cM-Or_OG.js";import{L as u}from"./Legend-e14FWaDl.js";import{L as h}from"./Line-BkUDmjMa.js";import{T as g}from"./Tooltip-CNt3xiQz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DAlfJkzI.js";import"./resolveDefaultProps-eB2rdyhX.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Ba-uagI8.js";import"./throttle-Dw_3NXl9.js";import"./index-DM8acuEY.js";import"./index-BjrjF_sl.js";import"./isWellBehavedNumber-BlhXGToZ.js";import"./d3-scale-B5gueGek.js";import"./index-cWSuCV9A.js";import"./index-aMAZnXxU.js";import"./renderedTicksSlice-DTIkQgMV.js";import"./index-BHb_Ppqj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CYmwXWF8.js";import"./chartDataContext-C8S7uA6r.js";import"./CategoricalChart-CCLAUHt0.js";import"./CartesianAxis-DdmQm0Mb.js";import"./Layer-D3Rs15Eb.js";import"./Text-D1HNj6gm.js";import"./pageBackground-Cedpup01.js";import"./useId-KB6j76rh.js";import"./useBackwardsCompatibleTheme-C4dzzNKp.js";import"./Label-CA5pDLh0.js";import"./ZIndexLayer-DS-kTeIC.js";import"./dataEntryStyles-DaqIqY42.js";import"./types-CPjFjIqL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CHaAXk1q.js";import"./symbol-BqGJ5wMY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DG-NqV_R.js";import"./uniqBy-_sTXg2vc.js";import"./iteratee-BWlFYs6V.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CVDIysdN.js";import"./step-DHG-DUf8.js";import"./activeStyles-D0GvvJcq.js";import"./useAnimationId-5nMvsn6t.js";import"./ActivePoints-DGPkFg2Z.js";import"./Dot-CuTOnkdw.js";import"./RegisterGraphicalItemId-Brr1oXEa.js";import"./ErrorBarContext-B4ne9aHr.js";import"./SetGraphicalItem-C-ccX4yH.js";import"./getRadiusAndStrokeWidthFromDot-D3hEZZtv.js";import"./ActiveShapeUtils-JeO-QszI.js";import"./useEffectiveDataKey-CoJRTSM6.js";import"./Cross-BlnG8QnV.js";import"./Rectangle-vSbPEONY.js";import"./util-Dxo8gN5i.js";import"./Sector-C18YqcZp.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,kt as default};
