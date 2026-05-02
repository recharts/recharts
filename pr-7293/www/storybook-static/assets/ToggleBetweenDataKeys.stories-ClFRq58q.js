import{r as n,e as t}from"./iframe-CGwnqAI9.js";import{L as p}from"./LineChart-DJrMWupI.js";import{R as s}from"./arrayEqualityCheck-DRh0NsZa.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BrzCw4F9.js";import{X as d}from"./XAxis-B1wOh-_6.js";import{Y as y}from"./YAxis-DQ_Ub3Le.js";import{L as h}from"./Legend-DN_hPw8G.js";import{L as u}from"./Line-hsHA11JF.js";import{T as g}from"./Tooltip-BrfQv9eX.js";import{R as K}from"./RechartsHookInspector-Dp5vB4hQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DByz9jGi.js";import"./index-mavG575g.js";import"./immer-DfOKcAuw.js";import"./hooks-CyDmPBvG.js";import"./axisSelectors-BGY1T7LG.js";import"./d3-scale-DlZgn0s2.js";import"./zIndexSlice-BTBhIRz7.js";import"./renderedTicksSlice-C0ADS2ij.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bbfh0WUo.js";import"./chartDataContext-oPYA1VCq.js";import"./CategoricalChart-COt4unt0.js";import"./resolveDefaultProps-DSTq7oxQ.js";import"./CartesianAxis-4LCb4x4u.js";import"./Layer-CQ6uqOgk.js";import"./Text-DNmyQGES.js";import"./DOMUtils-nZK1ZF4e.js";import"./Label-CJpeNkBK.js";import"./ZIndexLayer-CMaPWngm.js";import"./types-VBg1tlke.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CWdafSUI.js";import"./symbol-D9RrWTM2.js";import"./step-BVKFw9bQ.js";import"./useElementOffset-CXOBSiaG.js";import"./uniqBy-DiZ8Z3bH.js";import"./iteratee-DjpPVy9L.js";import"./ReactUtils-CbJaRrjx.js";import"./ActivePoints-Cr6dU73k.js";import"./Dot-0lNFu7iq.js";import"./RegisterGraphicalItemId-nbnlv4b-.js";import"./ErrorBarContext-CxWaFe4Q.js";import"./GraphicalItemClipPath-kWf0wfBs.js";import"./SetGraphicalItem-p36bNdDU.js";import"./useAnimationId-DHwy2PIZ.js";import"./getRadiusAndStrokeWidthFromDot-8id4PXjH.js";import"./ActiveShapeUtils-CKeH7i0X.js";import"./isPlainObject-BF1Vp7m2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsqGVbsk.js";import"./Trapezoid-BXyomBoy.js";import"./Sector-NwDh2164.js";import"./Curve-kVtEDQbb.js";import"./Cross-Cf1ElWMr.js";import"./index-JaLX6-zQ.js";import"./ChartSizeDimensions-DcTb07cJ.js";import"./OffsetShower-DNDx_7Gv.js";import"./PlotAreaShower-C1OT31tE.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
