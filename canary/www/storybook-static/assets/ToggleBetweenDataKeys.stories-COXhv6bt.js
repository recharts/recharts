import{r as n,e as t}from"./iframe-B0S7Bw5r.js";import{L as p}from"./LineChart-B4FDZDv9.js";import{R as s}from"./arrayEqualityCheck-B6UHuCSW.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C0Qqgu6b.js";import{X as d}from"./XAxis-DiUkTxAp.js";import{Y as y}from"./YAxis-Cfh_dm5A.js";import{L as h}from"./Legend-Q88WEYIF.js";import{L as u}from"./Line-D68t4KMI.js";import{T as g}from"./Tooltip-ZhoZYo-6.js";import{R as K}from"./RechartsHookInspector-CMq6C7Gt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DcP5S-Eh.js";import"./index-DUOReC0q.js";import"./immer-evaWtkoc.js";import"./hooks-CcX3T7-M.js";import"./axisSelectors-6PiCImLD.js";import"./d3-scale-jq0pJJv9.js";import"./zIndexSlice-9UjK9UdZ.js";import"./renderedTicksSlice-BUt6rxsY.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BMVLa6xS.js";import"./chartDataContext-DJdmDZoh.js";import"./CategoricalChart-C3QYPPHI.js";import"./resolveDefaultProps-q1JLKZ97.js";import"./CartesianAxis-xLcMiLgB.js";import"./Layer-Dc2WQE0F.js";import"./Text-BDzyoHwy.js";import"./DOMUtils-CppXT_dB.js";import"./Label-Sf__cS6l.js";import"./ZIndexLayer-D8Z-QIey.js";import"./types-DOzdXJDs.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CYKSAWm0.js";import"./symbol-B-6h4y7x.js";import"./step-BpWwZl0O.js";import"./useElementOffset-z_Q4U8yI.js";import"./uniqBy-L7bCXYuO.js";import"./iteratee-BbOKiONH.js";import"./ReactUtils-X5Zc33o_.js";import"./ActivePoints-zTeK-7RL.js";import"./Dot-DXEnHZYi.js";import"./RegisterGraphicalItemId-wXMOnM03.js";import"./ErrorBarContext-CJSJ027V.js";import"./GraphicalItemClipPath-CFnrI3NK.js";import"./SetGraphicalItem-BWO2MSFy.js";import"./useAnimationId-NZHn6B37.js";import"./getRadiusAndStrokeWidthFromDot-iWtNb3XX.js";import"./ActiveShapeUtils-BunL0KP8.js";import"./isPlainObject-Dg3LRGot.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-R6r6MP54.js";import"./Trapezoid-CwbraNO9.js";import"./Sector-CoxeQB-O.js";import"./Curve-DEKI4hEN.js";import"./Cross-oxAmOxir.js";import"./index-j_275XjD.js";import"./ChartSizeDimensions-C7fjLK0m.js";import"./OffsetShower-xAOZ3hBm.js";import"./PlotAreaShower-VWh9CzYD.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
