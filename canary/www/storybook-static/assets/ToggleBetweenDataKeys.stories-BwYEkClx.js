import{r as n,e as t}from"./iframe-CrHrvGFA.js";import{L as p}from"./LineChart-C-15oDjF.js";import{R as s}from"./arrayEqualityCheck-D7V7-zfy.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C5wf1Xk_.js";import{X as d}from"./XAxis-D0X6vRGT.js";import{Y as y}from"./YAxis-p0cAlhrk.js";import{L as h}from"./Legend-DZNOspfU.js";import{L as u}from"./Line-DGT2_2aD.js";import{T as g}from"./Tooltip-wythYipx.js";import{R as K}from"./RechartsHookInspector-DW_mvAVM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BB1RiCRS.js";import"./index-BkAWwSZa.js";import"./immer-BCwItB4q.js";import"./hooks-C-ZW7Hvz.js";import"./axisSelectors-apUKQ5p6.js";import"./d3-scale-aLx8KFU7.js";import"./zIndexSlice-BPhJKxcZ.js";import"./renderedTicksSlice-BKLazWGY.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BtNZYkZt.js";import"./chartDataContext-CBLNwLu7.js";import"./CategoricalChart-Ds9PKqQr.js";import"./resolveDefaultProps-CHUiU1F7.js";import"./CartesianAxis-C6mIt3Wc.js";import"./Layer-VGdDjG6T.js";import"./Text-DPhEVUwO.js";import"./DOMUtils-C8jm054W.js";import"./Label-DZt9DpVA.js";import"./ZIndexLayer-CaiMnAVk.js";import"./types-C-thJRzw.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DPG6nOF1.js";import"./symbol-DBDK4FNb.js";import"./step-B-10frX1.js";import"./useElementOffset-BFgL1_u4.js";import"./uniqBy-CV0OTDDr.js";import"./iteratee-BfhY7p5d.js";import"./ReactUtils-B0mFaADN.js";import"./ActivePoints-CvrGo7z5.js";import"./Dot-2YvQxSoM.js";import"./RegisterGraphicalItemId-BTCsPxG4.js";import"./ErrorBarContext-CFytyOKJ.js";import"./GraphicalItemClipPath-BlrVoPx6.js";import"./SetGraphicalItem-trN_YbRB.js";import"./useAnimationId-gwH5_ERq.js";import"./getRadiusAndStrokeWidthFromDot-5JZDbfVs.js";import"./ActiveShapeUtils-D6tcxPOv.js";import"./isPlainObject--NGRnfHf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DTNp-Bxb.js";import"./Trapezoid-KpxrlCw6.js";import"./Sector-DuGIl3xX.js";import"./Curve-DoNjcFRC.js";import"./Cross-BAQorZkW.js";import"./index-CpHQapov.js";import"./ChartSizeDimensions-DZ9MktBW.js";import"./OffsetShower-C2k5oquR.js";import"./PlotAreaShower-DFoVEO8k.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
