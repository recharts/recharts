import{r as n,R as t}from"./iframe-CzzdtdLH.js";import{L as p}from"./LineChart-CRYLVXcn.js";import{R as s}from"./zIndexSlice-Co00U7DY.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CONZzXeZ.js";import{X as d}from"./XAxis-CKEr4FP9.js";import{Y as y}from"./YAxis-xlB7Mrcu.js";import{L as u}from"./Legend-zFfIrWmw.js";import{L as h}from"./Line-BIkkaUAa.js";import{T as g}from"./Tooltip-CXOG8T9I.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BJjI_Ka0.js";import"./index-Bnee00Tj.js";import"./index-C75_nTb2.js";import"./index-64quDrFB.js";import"./index-DWpzXqnr.js";import"./throttle-DKJrGqy3.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-1HW0Usy7.js";import"./axisSelectors-BlRIZcT4.js";import"./resolveDefaultProps-BjUNTsKn.js";import"./isWellBehavedNumber-BmNKw_Tm.js";import"./d3-scale-pYyMK9Lh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CuTVmHhm.js";import"./chartDataContext-BZcRmYig.js";import"./CategoricalChart-VSe_1AC9.js";import"./CartesianAxis-BbUS-Vpa.js";import"./Layer-BbK8NiGM.js";import"./Text-0Zz8t0sM.js";import"./DOMUtils-DH9j7AXM.js";import"./Label-CL5-PwM4.js";import"./ZIndexLayer-ChHVLqdE.js";import"./types-3QfDILpo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BUtRhNjz.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-BP5bT7AT.js";import"./symbol-SPLfPpdC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DxiJzbv2.js";import"./uniqBy-CiFzx0lO.js";import"./iteratee-F5ErMUJK.js";import"./Curve-Jr9YsAj6.js";import"./step-R9BHjTQW.js";import"./AnimatedItems-BMiyvThI.js";import"./useAnimationId-C9cdprRM.js";import"./ActivePoints-B_ez_f7F.js";import"./Dot-BX-Vbuyt.js";import"./RegisterGraphicalItemId-BU-YkEzl.js";import"./ErrorBarContext-ZLp962OP.js";import"./GraphicalItemClipPath-B0mB6y5l.js";import"./SetGraphicalItem-tk_sKpy7.js";import"./getRadiusAndStrokeWidthFromDot-DFgztpRX.js";import"./ActiveShapeUtils-DWVSurhB.js";import"./Cross-B-pr5MkY.js";import"./Rectangle-COPtEdoX.js";import"./util-Dxo8gN5i.js";import"./Sector-CebjY1i8.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
