import{r as n,e as t}from"./iframe-RyyUADvi.js";import{L as p}from"./LineChart-6r5A_zvp.js";import{R as s}from"./arrayEqualityCheck-BK7ZKOIC.js";import{C as c}from"./CartesianGrid-DWbw8Yjd.js";import{X as l}from"./XAxis-CoWhvSWs.js";import{Y as d}from"./YAxis-Un8vVQsB.js";import{L as y}from"./Legend-DzpIi1aN.js";import{L as h}from"./Line-CWDvrl0r.js";import{T as u}from"./Tooltip-Df-5ziqW.js";import{R as g}from"./RechartsHookInspector-p0Yz6ifZ.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-oQCIJm_t.js";import"./index-DS9IaigZ.js";import"./immer-DiJOv4tT.js";import"./hooks-ZFjK5fyy.js";import"./axisSelectors-Bf3stQgf.js";import"./d3-scale-ZW2PW4r9.js";import"./zIndexSlice-I41T8JEG.js";import"./renderedTicksSlice-BUipPmkG.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BVog2BC6.js";import"./chartDataContext-D7w4QAUg.js";import"./CategoricalChart-D1KFd6eK.js";import"./resolveDefaultProps-CwxDEkD6.js";import"./CartesianAxis-BpXuAb-I.js";import"./Layer-DGeVqCLc.js";import"./Text-BCjtKebt.js";import"./DOMUtils-CUy7YYLN.js";import"./Label-CQil7oNR.js";import"./ZIndexLayer-CXHEgDXB.js";import"./types-Bp-ZZqOO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-C-qwK5A2.js";import"./symbol-BBBIWRyY.js";import"./step-4PchhSUC.js";import"./useElementOffset-DlEUeD5Q.js";import"./uniqBy-BEHYZLGg.js";import"./iteratee-z1tmzYKs.js";import"./ReactUtils-BuUocuWo.js";import"./ActivePoints-BiNqWYY2.js";import"./Dot-CH5vcBHO.js";import"./RegisterGraphicalItemId-BvOeRSvq.js";import"./ErrorBarContext-DoMKVMyl.js";import"./GraphicalItemClipPath-B8_DVnDn.js";import"./SetGraphicalItem-Cl0KJDHX.js";import"./useAnimationId-6eUUABj9.js";import"./getRadiusAndStrokeWidthFromDot-BZmLJ3C8.js";import"./ActiveShapeUtils-Db-WQFuK.js";import"./isPlainObject-Dd20guMq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BY6gKUrO.js";import"./Trapezoid-BnRug_7I.js";import"./Sector-CY4skt_U.js";import"./Curve-BOxvHyTd.js";import"./Cross-DtIxRXka.js";import"./index-BPy7O-_m.js";import"./ChartSizeDimensions-B2WcmWF_.js";import"./OffsetShower-Cy4pmMeQ.js";import"./PlotAreaShower-CgXv_TiK.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
