import{r as n,e as t}from"./iframe-W4Sx2LmA.js";import{L as p}from"./LineChart-Cgrh-4HO.js";import{R as s}from"./arrayEqualityCheck-nt69rbNg.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-SQjSoYdb.js";import{X as d}from"./XAxis-Do-NADlR.js";import{Y as y}from"./YAxis-DWdWWCmD.js";import{L as h}from"./Legend-YPyrgm_o.js";import{L as u}from"./Line-s9XItNsd.js";import{T as g}from"./Tooltip-DFb6l2Be.js";import{R as K}from"./RechartsHookInspector-Ft4_PiAb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-V_uqMe0M.js";import"./index-C0P2H7BI.js";import"./immer-B5uHt3-v.js";import"./hooks-Dtno9pbE.js";import"./axisSelectors-CLSq_PV7.js";import"./d3-scale-Cc2KV_M4.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-B4A5_8Yi.js";import"./renderedTicksSlice-dCK1eX84.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-v8Cliy-Y.js";import"./chartDataContext-D35ia9Nl.js";import"./CategoricalChart-BDjWSCBE.js";import"./resolveDefaultProps-2Cae6Gg7.js";import"./CartesianAxis-QtM7KOVk.js";import"./Layer-BaLfWC67.js";import"./Text-CLwKs2sm.js";import"./DOMUtils-D7MEc4ch.js";import"./Label-aDrplQOD.js";import"./ZIndexLayer-Icro7Prq.js";import"./types-C7u7ujMp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DLTvK8m8.js";import"./symbol-DpMzgL8C.js";import"./step-01ontriS.js";import"./useElementOffset-B3_Nt53P.js";import"./uniqBy-D-4CZTX9.js";import"./iteratee-BU-pMtOK.js";import"./Curve-BQ0Kb0jt.js";import"./AnimatedItems-ORWSBWd2.js";import"./useAnimationId-BhZqgZTb.js";import"./ActivePoints-C0fyqzJF.js";import"./Dot-BiRIcMlM.js";import"./RegisterGraphicalItemId-CmKLmlaQ.js";import"./ErrorBarContext-y_IxfPjr.js";import"./GraphicalItemClipPath-DGbYSZbB.js";import"./SetGraphicalItem-DZ57qSXA.js";import"./getRadiusAndStrokeWidthFromDot-CMxbT_Fy.js";import"./ActiveShapeUtils-B164ljio.js";import"./isPlainObject-OTvoF1ix.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJERAndb.js";import"./Trapezoid-U3hbbJ2B.js";import"./Sector-CSPavfQA.js";import"./Cross-CAoPUQjQ.js";import"./index-CXRjpi5i.js";import"./ChartSizeDimensions-BbncuPUL.js";import"./OffsetShower-DPIr9odL.js";import"./PlotAreaShower-DUcsSPBD.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Rt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,xt as default};
