import{r as n,e as t}from"./iframe-BbZhTIjX.js";import{L as p}from"./LineChart-C4BT9o6w.js";import{R as s}from"./arrayEqualityCheck-DkKqnDzt.js";import{C as c}from"./CartesianGrid-BPBxIaVq.js";import{X as l}from"./XAxis-C9xRC5JP.js";import{Y as d}from"./YAxis-ktUi3e4g.js";import{L as y}from"./Legend-DHLgRSez.js";import{L as h}from"./Line-DA0p8sx2.js";import{T as u}from"./Tooltip-DPk07jmV.js";import{R as g}from"./RechartsHookInspector-BEtvb3d9.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DNXfyTKD.js";import"./hooks-xGvQVXJu.js";import"./axisSelectors-tXY5A5QT.js";import"./zIndexSlice-Dz-zn5zm.js";import"./renderedTicksSlice-Bw2BSgf6.js";import"./resolveDefaultProps-DpK6kTo-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CjVvsiSP.js";import"./chartDataContext-DGmstLWk.js";import"./CategoricalChart-B-wga6Ud.js";import"./CartesianAxis-TJWR5-DY.js";import"./Layer-BRjxkTBT.js";import"./Text-DoKSXl81.js";import"./DOMUtils-BPmVZuXj.js";import"./Label-Be7TSIhI.js";import"./ZIndexLayer-C9gNEIfS.js";import"./types-BKBSpGfD.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CAuboXnu.js";import"./Curve-DGXqFy3O.js";import"./useElementOffset-BDWpCxMC.js";import"./iteratee-Babg-Qt3.js";import"./ReactUtils-B2BAtUcS.js";import"./ActivePoints-C1EnRHYt.js";import"./Dot-oTf8G_NC.js";import"./RegisterGraphicalItemId-NnVsob8d.js";import"./ErrorBarContext-DomgNI41.js";import"./GraphicalItemClipPath-DCNpup2d.js";import"./SetGraphicalItem-yYMMJ8ci.js";import"./useAnimationId-DVyCRxxH.js";import"./getRadiusAndStrokeWidthFromDot-CULUnYYv.js";import"./ActiveShapeUtils-cpKe4lwt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-E9CHGVoE.js";import"./Trapezoid-abIioDDU.js";import"./Sector-yd-JjZP_.js";import"./Cross-Dkg0comw.js";import"./index-BeB1Guy7.js";import"./ChartSizeDimensions-CT9Oervl.js";import"./OffsetShower-D-jScXPc.js";import"./PlotAreaShower-FMUTuolU.js";const Kt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,ft as __namedExportsOrder,Kt as default};
