import{r as n,e as t}from"./iframe-DU-LucVk.js";import{L as p}from"./LineChart-C3nrvX4j.js";import{R as s}from"./arrayEqualityCheck-CclNUIwX.js";import{C as c}from"./CartesianGrid-ZQnOdJGL.js";import{X as l}from"./XAxis-NPkkQ63f.js";import{Y as d}from"./YAxis-oxI_7caT.js";import{L as y}from"./Legend-FjKnAjYX.js";import{L as h}from"./Line-D0rR1HZ1.js";import{T as u}from"./Tooltip-D49Au06n.js";import{R as g}from"./RechartsHookInspector-BEY9qfJh.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BQ8ifATJ.js";import"./index-BvEdvQ3w.js";import"./immer-CeDnDLs7.js";import"./hooks-5DppKLy_.js";import"./axisSelectors-1v6f9L3u.js";import"./d3-scale-s-kDCmvc.js";import"./zIndexSlice-BokCIqI7.js";import"./renderedTicksSlice-CYsmXTCd.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cbq4Hmtt.js";import"./chartDataContext-CG1EXfO5.js";import"./CategoricalChart-I9vscfUJ.js";import"./resolveDefaultProps-B2aHdDhI.js";import"./CartesianAxis-xpog4YLf.js";import"./Layer-8a5GeXWN.js";import"./Text-CzwymKY5.js";import"./DOMUtils-CWJBrBTl.js";import"./Label-OGUbf68M.js";import"./ZIndexLayer-BaiBFLw5.js";import"./types-Dgs-vk0Z.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BtQj-4ur.js";import"./symbol-m7w_ZRD-.js";import"./step-CgB13xZG.js";import"./useElementOffset-bryqI-pl.js";import"./uniqBy-CFOdKjJ7.js";import"./iteratee-Biu9ujnd.js";import"./ReactUtils-Ctv0Vese.js";import"./ActivePoints-CvZtNNWP.js";import"./Dot-D3cffN2_.js";import"./RegisterGraphicalItemId-CicihkEh.js";import"./ErrorBarContext-D0ejYvv2.js";import"./GraphicalItemClipPath-CL71Q66l.js";import"./SetGraphicalItem-DZHXtodu.js";import"./useAnimationId-CtR34_Zs.js";import"./getRadiusAndStrokeWidthFromDot-DiPRkIfe.js";import"./ActiveShapeUtils-CNQl8MpC.js";import"./isPlainObject-DmZ4Jk-5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dh8uHokW.js";import"./Trapezoid-C0vmhZZj.js";import"./Sector-DdGN5B7D.js";import"./Curve-rk5soVjK.js";import"./Cross-CPgau8IV.js";import"./index-k3KoyLP9.js";import"./ChartSizeDimensions-ChW5udk0.js";import"./OffsetShower-BWhNcTks.js";import"./PlotAreaShower-9QTURT9p.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
