import{r as n,e as t}from"./iframe-6EykQKfG.js";import{L as p}from"./LineChart-Bf4ZBL_Q.js";import{R as s}from"./arrayEqualityCheck-CqC3jwM6.js";import{C as c}from"./CartesianGrid-DVK0Bf9z.js";import{X as l}from"./XAxis-Bq0FFrPR.js";import{Y as d}from"./YAxis-EuersLOS.js";import{L as y}from"./Legend-DFC8rw7q.js";import{L as h}from"./Line-BA8V0JUx.js";import{T as u}from"./Tooltip-Dv-xsBcn.js";import{R as g}from"./RechartsHookInspector-De58Dhu7.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B-8Vi1YZ.js";import"./index-C5RNfFWo.js";import"./immer-DZYxGOvJ.js";import"./hooks-C3ySExDc.js";import"./axisSelectors-FAny2dXm.js";import"./d3-scale-ZR-RinUh.js";import"./zIndexSlice-C6kP2rU-.js";import"./renderedTicksSlice-ChlibOAb.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-yFNUOVem.js";import"./chartDataContext-vZs3YuCl.js";import"./CategoricalChart-B0C_vbjT.js";import"./resolveDefaultProps-CZLGh6RG.js";import"./CartesianAxis-DTiDbYgb.js";import"./Layer-DsfYNbWJ.js";import"./Text-ByiAR9HY.js";import"./DOMUtils-BptD102S.js";import"./Label-AanK--nR.js";import"./ZIndexLayer-Dj7WhaOm.js";import"./types-DI1ZOnYm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DRjofMjK.js";import"./symbol-VuSYaHfl.js";import"./step-DU4Jxd72.js";import"./useElementOffset-DL95p2it.js";import"./uniqBy-D9IJRH_0.js";import"./iteratee-BWAJxHBx.js";import"./ReactUtils-CfLs9KKR.js";import"./ActivePoints-BuDRjoco.js";import"./Dot-CjdQs5Xf.js";import"./RegisterGraphicalItemId-SLc1E9Mg.js";import"./ErrorBarContext-BKEDiamV.js";import"./GraphicalItemClipPath-CyC67rpY.js";import"./SetGraphicalItem-D4EZqEL5.js";import"./useAnimationId-SK1GTTks.js";import"./getRadiusAndStrokeWidthFromDot-BPPKe8oa.js";import"./ActiveShapeUtils-BzU2hCU1.js";import"./isPlainObject-CAtj_e7X.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle--9HeXx83.js";import"./Trapezoid-DdvROJEh.js";import"./Sector-NFqcE7L7.js";import"./Curve-BHG7-tm7.js";import"./Cross-UGMpL9w2.js";import"./index-DoXoLnYR.js";import"./ChartSizeDimensions-4WehLi-t.js";import"./OffsetShower-DPGgRtYl.js";import"./PlotAreaShower-DJZyMIDk.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
