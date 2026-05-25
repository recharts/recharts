import{u as n,e as t}from"./iframe-CivULM0O.js";import{L as p}from"./LineChart-B90z0YGN.js";import{g as s}from"./arrayEqualityCheck-PbQt1vd_.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-BLzOmJX0.js";import{X as d}from"./XAxis-CYAQkN2U.js";import{Y as u}from"./YAxis-ESVpGmgX.js";import{L as y}from"./Legend-C9TbRXGM.js";import{L as h}from"./Line-BcwWxmgV.js";import{T as g}from"./Tooltip-DgeDNHg1.js";import{R as K}from"./RechartsHookInspector-B13-Urqc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DwxV8M50.js";import"./index-D77mCZEn.js";import"./immer-C3JSSs7p.js";import"./hooks-O1Pz3D70.js";import"./axisSelectors-C5EVC_K9.js";import"./d3-scale-D4k2z_td.js";import"./zIndexSlice-DI8beG-i.js";import"./renderedTicksSlice-DkvK2F6A.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DF7vNr1N.js";import"./chartDataContext-BWPeiq2n.js";import"./CategoricalChart-CaQLfBcJ.js";import"./resolveDefaultProps-Bzl3TnEc.js";import"./CartesianAxis-G3eNrHbq.js";import"./Layer-BOVDUSvA.js";import"./Text-aFIbFVfW.js";import"./DOMUtils-D-P4J5bL.js";import"./Label-BAI4tr_y.js";import"./ZIndexLayer-CgUDZ3al.js";import"./types-CYA8PCW2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-cGyzM8dQ.js";import"./symbol-DB8A-7yY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CC9xhXxh.js";import"./uniqBy-Cwhcwtk-.js";import"./iteratee-UPOw9UnH.js";import"./Curve-CR9QitUx.js";import"./step-DozMZOeE.js";import"./ReactUtils-B75F0iOa.js";import"./ActivePoints-De-ksHDq.js";import"./Dot-13A9yk-i.js";import"./RegisterGraphicalItemId-C8jduj3R.js";import"./ErrorBarContext-rnb_GXzV.js";import"./GraphicalItemClipPath-UzEv0mvn.js";import"./SetGraphicalItem-DhyPdJoF.js";import"./useAnimationId-DJJiEnXV.js";import"./getRadiusAndStrokeWidthFromDot-CdnZqcwv.js";import"./ActiveShapeUtils-DzUFHSun.js";import"./Cross-P7L2JLrH.js";import"./Rectangle-d22AVGnL.js";import"./Sector-592Fkfg8.js";import"./index-kHVaJKAG.js";import"./ChartSizeDimensions-B7zlPcNh.js";import"./OffsetShower-BTGRafEk.js";import"./PlotAreaShower-BV6yuT_Y.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,Lt as default};
