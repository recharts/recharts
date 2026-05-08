import{r as n,e as t}from"./iframe-BCIyDy2y.js";import{L as p}from"./LineChart-dbsJyxZn.js";import{R as s}from"./arrayEqualityCheck-Cf245WJn.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C9QCD4jM.js";import{X as d}from"./XAxis-DV5Xkww9.js";import{Y as y}from"./YAxis-CnRlmuzM.js";import{L as h}from"./Legend-oU0cZFoo.js";import{L as u}from"./Line-RgI7W7Nt.js";import{T as g}from"./Tooltip-5TOXxqC4.js";import{R as K}from"./RechartsHookInspector-Z2OccCn4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bdd2O_oM.js";import"./index-CtknXjDa.js";import"./immer-C2RICBwb.js";import"./hooks-BTsBRBHp.js";import"./axisSelectors-yCT-Higf.js";import"./d3-scale-CI4AiR3w.js";import"./zIndexSlice-DSrTTGma.js";import"./renderedTicksSlice-Cz2vx4zM.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DrswP_Ob.js";import"./chartDataContext-CXwTcmro.js";import"./CategoricalChart-up_sq5JM.js";import"./resolveDefaultProps-lVM9sbuz.js";import"./CartesianAxis-DQMQkFuk.js";import"./Layer-BI55N2-G.js";import"./Text-DkhCuMky.js";import"./DOMUtils-BAzLlmnO.js";import"./Label-BLeLqCLV.js";import"./ZIndexLayer-OXXPiSY6.js";import"./types-lt17_KuZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BB8IGNYJ.js";import"./symbol-BWsdZnbp.js";import"./step-C8nuQph-.js";import"./useElementOffset-G1RjUq0A.js";import"./uniqBy-CMyGBwYl.js";import"./iteratee-CPlqxnf-.js";import"./ReactUtils-xGOtO2-g.js";import"./ActivePoints-DNcriVBd.js";import"./Dot-D1QG05Rg.js";import"./RegisterGraphicalItemId-UqraLzmZ.js";import"./ErrorBarContext-BoyyOct_.js";import"./GraphicalItemClipPath-DTR4rFg9.js";import"./SetGraphicalItem-D1XFyIIN.js";import"./useAnimationId-BkfXIhqW.js";import"./getRadiusAndStrokeWidthFromDot-Cn2oGl7V.js";import"./ActiveShapeUtils-jGAWG3IP.js";import"./isPlainObject-whMXKUZx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-SMe0MBtT.js";import"./Trapezoid-RcGRNOCe.js";import"./Sector-Ck7ah4lL.js";import"./Curve-CewalY2f.js";import"./Cross-BauiRK37.js";import"./index-DwfpJ5JJ.js";import"./ChartSizeDimensions-DA9WuIbb.js";import"./OffsetShower-DxUIrgLH.js";import"./PlotAreaShower-DU-Wc0h4.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
