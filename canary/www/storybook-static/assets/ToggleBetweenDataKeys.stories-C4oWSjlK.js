import{r as n,e as t}from"./iframe-D1Hwi0RI.js";import{L as p}from"./LineChart-MSAj5JMk.js";import{R as s}from"./arrayEqualityCheck-DQEOD_zw.js";import{C as c}from"./CartesianGrid-BxNgwSyo.js";import{X as l}from"./XAxis-BuTZpXCP.js";import{Y as d}from"./YAxis-Bdw8XaXe.js";import{L as y}from"./Legend--HvhgAdS.js";import{L as h}from"./Line-DpHBAjCF.js";import{T as u}from"./Tooltip-DZXJTEd9.js";import{R as g}from"./RechartsHookInspector-DsUGDtNJ.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CXtEZB_H.js";import"./hooks-CSIs-51X.js";import"./axisSelectors-GEJN5kco.js";import"./zIndexSlice-D8jnnygc.js";import"./resolveDefaultProps-Bz6XhQRL.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-Dc2mELGa.js";import"./chartDataContext-GCfI3aAK.js";import"./CategoricalChart-DQ6b8iW8.js";import"./CartesianAxis-CyxUGwT-.js";import"./Layer-Di0VROrF.js";import"./Text-DLOnQ8zM.js";import"./DOMUtils-dbB3jEW_.js";import"./Label-Bb86ILB8.js";import"./ZIndexLayer-By5F7TF9.js";import"./types-C-uSS9Dl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-0go88kKd.js";import"./Curve-CF532csu.js";import"./useElementOffset-C88bX5-D.js";import"./iteratee-CzoMm9Y3.js";import"./ReactUtils-hNtx3_VI.js";import"./ActivePoints-DbTDI5Wq.js";import"./Dot-BxaODjLb.js";import"./RegisterGraphicalItemId-Pd4SqxWN.js";import"./ErrorBarContext-DWrqh2-_.js";import"./GraphicalItemClipPath-Ba1a27e_.js";import"./SetGraphicalItem-DLoBPGEI.js";import"./useAnimationId-CwGlJXjy.js";import"./getRadiusAndStrokeWidthFromDot-CJ731Roi.js";import"./ActiveShapeUtils-CoHlE8BH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-YjLZgqxG.js";import"./Trapezoid-CD3SuCZk.js";import"./Sector-Dr9-p71P.js";import"./Cross-BvgUK9A6.js";import"./index-BkDkQzlc.js";import"./ChartSizeDimensions-CUepdASc.js";import"./OffsetShower-7LYmniyx.js";import"./PlotAreaShower-BWomwUUC.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
