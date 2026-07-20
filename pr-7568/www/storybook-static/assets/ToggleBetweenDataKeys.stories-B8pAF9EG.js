import{r as n,R as t}from"./iframe-E9cTKeRE.js";import{L as p}from"./LineChart-YopgjNIh.js";import{R as s}from"./zIndexSlice-DgjoBcM4.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-LVg2aq4e.js";import{X as d}from"./XAxis-rRrOlgKo.js";import{Y as y}from"./YAxis-F7YCqO7L.js";import{L as u}from"./Legend-CMoclERr.js";import{L as h}from"./Line-oPEUnh-k.js";import{T as g}from"./Tooltip-DkJ_BFd4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B1G603CI.js";import"./index-BKdHAXhr.js";import"./index-CCDqlq1e.js";import"./index-CXgkWbkn.js";import"./index-dTe_TrB1.js";import"./throttle-CGWlJj3Y.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-8_6vlRT3.js";import"./axisSelectors-Cz4e0hh2.js";import"./resolveDefaultProps-VcEXnedp.js";import"./isWellBehavedNumber-CNJuLpb3.js";import"./d3-scale-BKY6FaDv.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-h93kYpLN.js";import"./chartDataContext-BLSdU0GF.js";import"./CategoricalChart-Dgnr1Z5s.js";import"./CartesianAxis-X6rLp4nN.js";import"./Layer-gCSDlxX6.js";import"./Text-Z5PFJcO5.js";import"./DOMUtils-7h76k5q7.js";import"./Label-BpZfxLrK.js";import"./ZIndexLayer-T104iiSj.js";import"./types-BiCnzAm7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-DI8xvNSa.js";import"./symbol-Xtd0tGJt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D-VfA5vV.js";import"./uniqBy-BABLZnAx.js";import"./iteratee-CoZ1T3nQ.js";import"./Curve-CKjkPgN2.js";import"./step-xjRdG8EV.js";import"./AnimatedItems-B1DMV_LJ.js";import"./useAnimationId-DdQ6zElL.js";import"./ActivePoints-Co1l_Ha9.js";import"./Dot-DCqiO5Z7.js";import"./RegisterGraphicalItemId-y5W6RdIF.js";import"./ErrorBarContext-CrHnHUPz.js";import"./GraphicalItemClipPath-BanWagPz.js";import"./SetGraphicalItem-i24-OBmJ.js";import"./getRadiusAndStrokeWidthFromDot-CZrTH9En.js";import"./ActiveShapeUtils-D82Ok3yU.js";import"./Cross-B3_mywlq.js";import"./Rectangle-CPcTji69.js";import"./util-Dxo8gN5i.js";import"./Sector-BitZCkPD.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Et=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Et as __namedExportsOrder,Ct as default};
