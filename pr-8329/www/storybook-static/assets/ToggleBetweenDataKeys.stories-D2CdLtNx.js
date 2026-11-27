import{r as p,R as t}from"./iframe-D4kLWznI.js";import{L as n}from"./LineChart-gcQ6rDC9.js";import{R as s}from"./zIndexSlice-B28gm5Zj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DhEJMMM0.js";import{X as d}from"./XAxis-CIt9BLfr.js";import{Y as y}from"./YAxis-DTOW1dZ3.js";import{L as u}from"./Legend-DWq2NLoW.js";import{L as h}from"./Line-MmZxVnyG.js";import{T as g}from"./Tooltip-DTjQB8kY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Brhd5wtn.js";import"./resolveDefaultProps-CJYKgT8A.js";import"./get-CjriyByo.js";import"./axisSelectors-ByHGSv-T.js";import"./throttle-q19G1wYU.js";import"./index-K9fqWjcX.js";import"./index-BZ6MCrYJ.js";import"./polarAxisSelectors-Jvx5Hvrj.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-COuExidI.js";import"./index-BukBKnfG.js";import"./index-BSDf5RkV.js";import"./renderedTicksSlice-BRzk6Zuy.js";import"./index-Cxoy9Bx4.js";import"./fillDefinitions-uAqib7o2.js";import"./CartesianChart-CYGJ7Vi6.js";import"./chartDataContext-ExwO8N-9.js";import"./CategoricalChart-lvaD8ywk.js";import"./CartesianAxis-BbZQB26a.js";import"./Layer-BiQ6tIpf.js";import"./Text-NG93JaM3.js";import"./ZIndexLayer-DTTyUNkX.js";import"./Label-CC2QlraV.js";import"./types-C0VOENzr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C71JHuMc.js";import"./symbol-q_YI2BlA.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CuWdjgeb.js";import"./uniqBy-B6TwiwOy.js";import"./iteratee-DSdbCzg-.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-CZtOf2sh.js";import"./Curve-BIpyAZSM.js";import"./step-BWfRSULP.js";import"./dataEntryStyles-CQy-JarL.js";import"./ActivePoints-CZBrkmRZ.js";import"./Dot-We9lW2eK.js";import"./activeStyles-B6xOxwnr.js";import"./useAnimationId-Cda-LmXY.js";import"./ErrorBarContext-D-e_coEF.js";import"./SetGraphicalItem-BpVaXpzF.js";import"./ActiveShapeUtils-CmC5_l1r.js";import"./useEffectiveDataKey-KQzX-PyK.js";import"./Cross-C0ROwwiQ.js";import"./Rectangle-BzREhQg7.js";import"./util-Dxo8gN5i.js";import"./Sector-CScXPvLM.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
