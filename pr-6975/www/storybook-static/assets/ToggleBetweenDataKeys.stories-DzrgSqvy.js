import{r as n,e as t}from"./iframe-BGwjwh7b.js";import{L as p}from"./LineChart-Csz9unot.js";import{R as s}from"./arrayEqualityCheck-Ci--b7kw.js";import{C as c}from"./CartesianGrid-Bpv9yHg0.js";import{X as l}from"./XAxis-DS9Xkr-k.js";import{Y as d}from"./YAxis-BE7e26gY.js";import{L as y}from"./Legend-BvHbPwQG.js";import{L as h}from"./Line-DnJu1JFJ.js";import{T as u}from"./Tooltip-B0klRuxw.js";import{R as g}from"./RechartsHookInspector-VWahaYTL.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-hK7FM4lj.js";import"./hooks-BrtJ2K4-.js";import"./axisSelectors-DZSZvNV6.js";import"./zIndexSlice-CqqXeG-S.js";import"./resolveDefaultProps-C4_jkDd5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-5LhnS4ee.js";import"./chartDataContext-CifXIRqa.js";import"./CategoricalChart-BOR7W1TN.js";import"./CartesianAxis-C6FwbBuH.js";import"./Layer-g7-Im1O-.js";import"./Text-BJbt4-uX.js";import"./DOMUtils-B5Va_Rd3.js";import"./Label-ByJ0Zn7t.js";import"./ZIndexLayer-BlpEyICK.js";import"./types-DiIJ1tuj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CA485AuF.js";import"./Curve-Bx03x7Y9.js";import"./useElementOffset-Dh036-Py.js";import"./iteratee-CHyJYDTY.js";import"./ReactUtils-0GYQhZAx.js";import"./ActivePoints-DsWvMRWX.js";import"./Dot-a7SSIrAW.js";import"./RegisterGraphicalItemId-D86zanCr.js";import"./ErrorBarContext-CNFPOgVB.js";import"./GraphicalItemClipPath-CbnJI2Ms.js";import"./SetGraphicalItem-CfxChqbu.js";import"./useAnimationId-CRoY-omv.js";import"./getRadiusAndStrokeWidthFromDot-Dha7chAz.js";import"./ActiveShapeUtils-BcFn4-44.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpPiBfe5.js";import"./Trapezoid-yFda2MLs.js";import"./Sector-CnD_zSeQ.js";import"./Cross-BTD1rZhN.js";import"./index-5-nk5biS.js";import"./ChartSizeDimensions-ewe-wGZ_.js";import"./OffsetShower-CVJaT1Gz.js";import"./PlotAreaShower-Cbm_qyV0.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Kt as __namedExportsOrder,gt as default};
