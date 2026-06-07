import{r as n,R as t}from"./iframe-CcUePkZz.js";import{L as p}from"./LineChart-B9cObjBR.js";import{R as s}from"./zIndexSlice-DSc4KC75.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-UvUMKN2F.js";import{X as d}from"./XAxis-BcdHEGYE.js";import{Y as y}from"./YAxis-nZsFOeFr.js";import{L as u}from"./Legend-D9oYjE5t.js";import{L as h}from"./Line-DAxMD2wb.js";import{T as g}from"./Tooltip-DzrELefj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DA0Yxt9x.js";import"./index-C-Pbn--W.js";import"./index-C1-J5F4u.js";import"./index-Z6USwMiQ.js";import"./index-CJTFlpIe.js";import"./immer-VeyOR81A.js";import"./get-UnfM8TPj.js";import"./renderedTicksSlice-BL5Mffta.js";import"./axisSelectors-BlPxUPB7.js";import"./d3-scale-ac-XiUen.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BXf8ljNz.js";import"./isWellBehavedNumber-CXwth3qC.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D-BudT5K.js";import"./chartDataContext-VDW5Tgrh.js";import"./CategoricalChart-CG91Q5ky.js";import"./CartesianAxis-B7nFXCrA.js";import"./Layer-CKbs6a8D.js";import"./Text-BLCpim0o.js";import"./DOMUtils-CgmzxpAH.js";import"./Label-dVerXnTS.js";import"./ZIndexLayer-B4p-btGn.js";import"./types-C4zY2OW7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CnKQYQZ6.js";import"./symbol-nACZTrEN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CwhrXEx4.js";import"./uniqBy-CwL7HoSI.js";import"./iteratee-DDQVwsC-.js";import"./Curve-Dhf7CAZi.js";import"./step-w_kmAd5Q.js";import"./AnimatedItems-BbZPIVL8.js";import"./useAnimationId-CH023PHf.js";import"./ActivePoints-D-HwpVLA.js";import"./Dot-CijEuNsy.js";import"./RegisterGraphicalItemId-Dk2pKOym.js";import"./ErrorBarContext-BIy678QN.js";import"./GraphicalItemClipPath-Bc96kw55.js";import"./SetGraphicalItem-D7jXrYhk.js";import"./getRadiusAndStrokeWidthFromDot-CTEsWB1S.js";import"./ActiveShapeUtils-CRuYv9Bp.js";import"./Cross-DTjUkbKF.js";import"./Rectangle-DC-jzmzs.js";import"./Sector-B9grfvlS.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
