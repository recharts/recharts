import{r as n,R as t}from"./iframe-DiQxFPiD.js";import{L as p}from"./LineChart-Db1z8a11.js";import{R as s}from"./zIndexSlice-CbAjIrOk.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BNjJpSbz.js";import{X as d}from"./XAxis-EdXvGrQH.js";import{Y as y}from"./YAxis-Djww7T90.js";import{L as u}from"./Legend-BnuCy5C8.js";import{L as h}from"./Line-sGvSTEOh.js";import{T as g}from"./Tooltip-CjyLpcR8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BvKHUawi.js";import"./index-DEHTfYnV.js";import"./index-DXMpEhi9.js";import"./index-gf7fYE_b.js";import"./index-B_6w02dr.js";import"./immer-DosMXF92.js";import"./get-Dz6QpTIZ.js";import"./renderedTicksSlice-CVnOD3jK.js";import"./axisSelectors-BmcnLQg7.js";import"./d3-scale-DQujxaME.js";import"./resolveDefaultProps-BZylAH88.js";import"./isWellBehavedNumber-BHg_3JmY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-j347tMAF.js";import"./chartDataContext-sNW_KTv-.js";import"./CategoricalChart-1umVaoo6.js";import"./CartesianAxis-BIrMP5Fh.js";import"./Layer-DW7oRwXF.js";import"./Text-BktdaDV_.js";import"./DOMUtils-C48HdCx5.js";import"./Label-DzhDJono.js";import"./ZIndexLayer-CyWmE1eJ.js";import"./types-3xORkcTs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CEFSVf8K.js";import"./symbol-C9m5SbLS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BvonADWO.js";import"./uniqBy-BRng3TIU.js";import"./iteratee-BdJ_-fKl.js";import"./Curve-B6Y4ZTmR.js";import"./step-C72WQite.js";import"./AnimatedItems-BWXZdjgl.js";import"./useAnimationId-BBPLHSdH.js";import"./ActivePoints-CDvTrnjr.js";import"./Dot-DDdvkJOK.js";import"./RegisterGraphicalItemId-CwapTkk7.js";import"./ErrorBarContext-CkyyD-i0.js";import"./GraphicalItemClipPath-B5HruHls.js";import"./SetGraphicalItem-glSzG2Ws.js";import"./getRadiusAndStrokeWidthFromDot-lcmD8n15.js";import"./ActiveShapeUtils-CPs_mOyJ.js";import"./Cross-B7agATyv.js";import"./Rectangle-D3N5fext.js";import"./util-Dxo8gN5i.js";import"./Sector-ad7jNoc1.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
