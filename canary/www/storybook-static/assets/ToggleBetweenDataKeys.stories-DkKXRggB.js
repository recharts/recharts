import{r as n,e as t}from"./iframe-BI_pAXBB.js";import{L as p}from"./LineChart-CJp55qYS.js";import{R as s}from"./arrayEqualityCheck-BKrbAl8r.js";import{C as c}from"./CartesianGrid-w7B05F1z.js";import{X as l}from"./XAxis-CGb1kgb2.js";import{Y as d}from"./YAxis-BlCMhds7.js";import{L as y}from"./Legend-Bkrebucw.js";import{L as h}from"./Line-fl9wl9em.js";import{T as u}from"./Tooltip-zpyMAlwt.js";import{R as g}from"./RechartsHookInspector-BVifdKxh.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DROe6fuT.js";import"./index-BzE7Pa11.js";import"./immer-DS7uv6B4.js";import"./hooks-B_MXrk3m.js";import"./axisSelectors-CXWTfjJ6.js";import"./d3-scale-CUPcwIhM.js";import"./zIndexSlice-Blq0MPxS.js";import"./renderedTicksSlice-CafZfga-.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-KFRCLVOt.js";import"./chartDataContext-VgXSPlUI.js";import"./CategoricalChart-NTGK7QHa.js";import"./resolveDefaultProps-BfThY2qm.js";import"./CartesianAxis-D76QbbPe.js";import"./Layer-BbCwBMrP.js";import"./Text-DDIiPn9R.js";import"./DOMUtils-Clx04LAZ.js";import"./Label-BRAbHYpb.js";import"./ZIndexLayer-BIA7rzZS.js";import"./types-CyZr-7-n.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D26WGzjl.js";import"./symbol-DK6vMZu2.js";import"./step-aPk3qf3o.js";import"./useElementOffset-KO06kyND.js";import"./uniqBy-BWGLHH24.js";import"./iteratee-DFW71EQj.js";import"./ReactUtils-C8LT_WKY.js";import"./ActivePoints-CKakRG7P.js";import"./Dot-IX9Hy7RV.js";import"./RegisterGraphicalItemId-DUukUl_8.js";import"./ErrorBarContext-wf0IFZx-.js";import"./GraphicalItemClipPath-Bfi93Jqz.js";import"./SetGraphicalItem-d6KR3BLJ.js";import"./useAnimationId-CIydZ5LQ.js";import"./getRadiusAndStrokeWidthFromDot-RglsRcI2.js";import"./ActiveShapeUtils-BVb3C7rS.js";import"./isPlainObject-D710pF_7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BlZgVPa6.js";import"./Trapezoid-NjnAs4CK.js";import"./Sector-CeaItBuI.js";import"./Curve-C08bjkMC.js";import"./Cross-D_9Wubri.js";import"./index-D4zEKe7v.js";import"./ChartSizeDimensions-B1IFVDHL.js";import"./OffsetShower-PutuTgHL.js";import"./PlotAreaShower-CbV6UHYA.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
