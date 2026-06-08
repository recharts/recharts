import{r as n,R as t}from"./iframe-8lQPdWqg.js";import{L as p}from"./LineChart-D59Xp5xh.js";import{R as s}from"./zIndexSlice-HgvYxHxO.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D1Asfpul.js";import{X as d}from"./XAxis-DJEDKgVX.js";import{Y as y}from"./YAxis-B8-aAKdo.js";import{L as u}from"./Legend-DPXKScSx.js";import{L as h}from"./Line-DQbvyftM.js";import{T as g}from"./Tooltip-C7ZXpw4h.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-1T0MVTTa.js";import"./index-4GPQXHZz.js";import"./index-DC8gB5sz.js";import"./index-DDpCqwLC.js";import"./index-DuAs5Bye.js";import"./immer-BzJ0g7On.js";import"./get-BByPkrE2.js";import"./renderedTicksSlice-BULVvGQu.js";import"./axisSelectors-6HnY6kw7.js";import"./d3-scale-CBB0hoc6.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-D5naey2E.js";import"./isWellBehavedNumber-Bo5Fj-TS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BwVyT9hr.js";import"./chartDataContext-p8mU6nY6.js";import"./CategoricalChart-DXrGsRNK.js";import"./CartesianAxis-DwSWDszA.js";import"./Layer-CDc8atAP.js";import"./Text-B197qhYG.js";import"./DOMUtils-BTKUKMTR.js";import"./Label-Dm0B15Tp.js";import"./ZIndexLayer-CBi4-krB.js";import"./types-CT--YnpL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-B9gudQGC.js";import"./symbol-Cnindm4l.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BrKF9R5o.js";import"./uniqBy-CjCz0Q6p.js";import"./iteratee-Db3NWcbd.js";import"./Curve-bBnKBK2X.js";import"./step-BSoAUg6l.js";import"./AnimatedItems-DC4nP9_V.js";import"./useAnimationId-Bv0dv7sa.js";import"./ActivePoints-CO3DAqSg.js";import"./Dot-Bl-weaMj.js";import"./RegisterGraphicalItemId-CXVUtMmc.js";import"./ErrorBarContext-B402Fsm3.js";import"./GraphicalItemClipPath-DqeRAZts.js";import"./SetGraphicalItem-BjZEdkKC.js";import"./getRadiusAndStrokeWidthFromDot-CgN7yRoc.js";import"./ActiveShapeUtils-BLPRWSBX.js";import"./Cross-D5O4BVdp.js";import"./Rectangle-BOIggd48.js";import"./Sector-ChdwTptZ.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
