import{r as n,e as t}from"./iframe-B9O9PLmj.js";import{L as p}from"./LineChart-u0nXp41P.js";import{R as s}from"./arrayEqualityCheck-DC5CCiaX.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D3aW2foA.js";import{X as d}from"./XAxis-B1EE7uVS.js";import{Y as y}from"./YAxis-BoxHjnQ7.js";import{L as h}from"./Legend-waBu6jOx.js";import{L as u}from"./Line-C5FWVrxM.js";import{T as g}from"./Tooltip-BxSGwdpc.js";import{R as K}from"./RechartsHookInspector-oD2s6CPO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DGbm3XN2.js";import"./index-CAnKFVeM.js";import"./immer-CorX8m6_.js";import"./hooks-BTzSQdIL.js";import"./axisSelectors-D00_Gdzw.js";import"./d3-scale-CExCS1t0.js";import"./zIndexSlice-CXYg_MdN.js";import"./renderedTicksSlice-M3URujhE.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CzHYXFWb.js";import"./chartDataContext-CXYcSTD1.js";import"./CategoricalChart-CMv5R2DQ.js";import"./resolveDefaultProps-BG5-jm5o.js";import"./CartesianAxis-D9MTlCrN.js";import"./Layer-CeeJrP8o.js";import"./Text-BILB17Zq.js";import"./DOMUtils-CwoLiA_U.js";import"./Label-CyHBMA3l.js";import"./ZIndexLayer-DYfC-fux.js";import"./types-wS1CwaJ6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CFtKhMEP.js";import"./symbol-gibfx3Ew.js";import"./step-DmhUsuIO.js";import"./useElementOffset-BDjp6GLr.js";import"./uniqBy-CjP1EF7z.js";import"./iteratee-D6c1MZ_S.js";import"./ReactUtils-BBiT48UQ.js";import"./ActivePoints-DwZhrzjl.js";import"./Dot-CuQoBawd.js";import"./RegisterGraphicalItemId-B6wW9i8n.js";import"./ErrorBarContext-CdQGiGFg.js";import"./GraphicalItemClipPath-CTLEHBag.js";import"./SetGraphicalItem-C1WNJGNc.js";import"./useAnimationId-CEyoSkEC.js";import"./getRadiusAndStrokeWidthFromDot-BJYT2kqZ.js";import"./ActiveShapeUtils-BZRBvXfn.js";import"./isPlainObject-DKUUO2R6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DD4TDJ91.js";import"./Trapezoid-BTKQS4gb.js";import"./Sector-Cr5FAs6h.js";import"./Curve-CnUGNDOG.js";import"./Cross-BioPQKld.js";import"./index-B7585ExM.js";import"./ChartSizeDimensions-BLFdg5d7.js";import"./OffsetShower-BZwyeReB.js";import"./PlotAreaShower-4RtYHx69.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
