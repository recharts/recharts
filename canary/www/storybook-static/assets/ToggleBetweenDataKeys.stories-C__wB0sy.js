import{r as n,e as t}from"./iframe-E6stEF2S.js";import{L as p}from"./LineChart-C1Ee3c1G.js";import{R as s}from"./arrayEqualityCheck-CwuTMurj.js";import{C as c}from"./CartesianGrid-S_-5ZoSZ.js";import{X as l}from"./XAxis-Bwrfz7AR.js";import{Y as d}from"./YAxis-ChoODXTv.js";import{L as y}from"./Legend-BxsS8-YX.js";import{L as h}from"./Line-DCeOoju3.js";import{T as u}from"./Tooltip-BS0GZFLk.js";import{R as g}from"./RechartsHookInspector-DWDZSsYq.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CZ-4KBI2.js";import"./hooks-B7vED1ex.js";import"./axisSelectors-CGOr44mz.js";import"./zIndexSlice-DWahER7A.js";import"./resolveDefaultProps-DpBS-wta.js";import"./PolarUtils-BcxrLtWd.js";import"./CartesianChart-BDrQ5wVQ.js";import"./chartDataContext-mxEGBICQ.js";import"./CategoricalChart-HONQPrlU.js";import"./CartesianAxis-Ji6qmxj-.js";import"./Layer-BegbPFb9.js";import"./Text-Da_5tIJ5.js";import"./DOMUtils-DelYEp0F.js";import"./Label-rhvib36b.js";import"./ZIndexLayer-CZ3aFF1-.js";import"./types-FSWLiQQw.js";import"./Symbols-BofiGE9Z.js";import"./Curve-CjjQKwtg.js";import"./useElementOffset-5Bek4vIi.js";import"./iteratee-Dz5Fb5yH.js";import"./ReactUtils-ofTPTzz1.js";import"./ActivePoints-D2kK9Clq.js";import"./Dot-DgZWwon8.js";import"./RegisterGraphicalItemId-RdaYGkCK.js";import"./ErrorBarContext-C4-NhtXv.js";import"./GraphicalItemClipPath-D7GqE0xr.js";import"./SetGraphicalItem-CJIPhBZp.js";import"./useAnimationId-jacrtTCV.js";import"./getRadiusAndStrokeWidthFromDot-Clffww7b.js";import"./ActiveShapeUtils-vlVDSwIy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DJCClTE6.js";import"./Trapezoid-BRnSAzjS.js";import"./Sector-DQ6bsa91.js";import"./Cross-Cd8u4PDt.js";import"./index-D_N7o97v.js";import"./ChartSizeDimensions-Bkhb3coG.js";import"./OffsetShower-C8PKcIaU.js";import"./PlotAreaShower-Tf4T6ETR.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,gt as __namedExportsOrder,ut as default};
