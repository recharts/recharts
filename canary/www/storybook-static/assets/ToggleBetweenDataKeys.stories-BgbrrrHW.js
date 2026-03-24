import{r as n,e as t}from"./iframe-Cq-B9b4f.js";import{L as p}from"./LineChart-D-YqT4Ha.js";import{R as s}from"./arrayEqualityCheck-CUWGBawt.js";import{C as c}from"./CartesianGrid-CTonN2-w.js";import{X as l}from"./XAxis-mkVuJ6ru.js";import{Y as d}from"./YAxis-BDd-_fe4.js";import{L as y}from"./Legend-Dzg1YWp2.js";import{L as h}from"./Line-DmJynrg5.js";import{T as u}from"./Tooltip-CL5MU8bL.js";import{R as g}from"./RechartsHookInspector-TtpIOyZU.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ChVZ2Oxv.js";import"./index-BFFNc0YW.js";import"./immer-BjLhSv_k.js";import"./hooks-QDD28VjS.js";import"./axisSelectors-BgfEPtN4.js";import"./d3-scale-CWQsdIsg.js";import"./zIndexSlice-Di_upqq6.js";import"./renderedTicksSlice-Bgy9EKjI.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dc8WF-dR.js";import"./chartDataContext-0fGuXHUE.js";import"./CategoricalChart-ByiniKNN.js";import"./resolveDefaultProps-DhciczEd.js";import"./CartesianAxis-DaBzYhAa.js";import"./Layer-D-rMBlaW.js";import"./Text-rY40w2fD.js";import"./DOMUtils-06HVeAr7.js";import"./Label-BzBxAWSn.js";import"./ZIndexLayer-DheZEBBb.js";import"./types--yHmHFNL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-cf93Ahow.js";import"./symbol-BzYV9rTp.js";import"./step-DUU-NJz1.js";import"./useElementOffset-CQHv_tMB.js";import"./uniqBy-DHLSwk0M.js";import"./iteratee-g41Mu7yT.js";import"./ReactUtils-DE2SzpPB.js";import"./ActivePoints-d3GWU6BJ.js";import"./Dot-UnlO1r7U.js";import"./RegisterGraphicalItemId-paQBjngI.js";import"./ErrorBarContext-DspuidON.js";import"./GraphicalItemClipPath-CioYfDga.js";import"./SetGraphicalItem-CTMfJU_s.js";import"./useAnimationId-DXcWRCnH.js";import"./getRadiusAndStrokeWidthFromDot-C1Vb4TNN.js";import"./ActiveShapeUtils-BlQ6Z5B2.js";import"./isPlainObject-uQm6Hr4Y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-6bO7r_4r.js";import"./Trapezoid-B2U15woU.js";import"./Sector-C1hvtgaN.js";import"./Curve-CYxX35BT.js";import"./Cross-CvbC_6GN.js";import"./index-DJG8mPG-.js";import"./ChartSizeDimensions-BkgXq5jD.js";import"./OffsetShower-D2w7QLxq.js";import"./PlotAreaShower-CD-Amm5T.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
