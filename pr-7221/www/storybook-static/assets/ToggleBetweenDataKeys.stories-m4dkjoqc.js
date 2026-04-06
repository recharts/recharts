import{r as n,e as t}from"./iframe-1sJLl6DZ.js";import{L as p}from"./LineChart-C23IRS3c.js";import{R as s}from"./arrayEqualityCheck-CBQMjkzv.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CKBoXX0H.js";import{X as d}from"./XAxis-BKluPuIm.js";import{Y as y}from"./YAxis-70kmgyRU.js";import{L as h}from"./Legend-8WJWCCAH.js";import{L as u}from"./Line-Cr1_NgX_.js";import{T as g}from"./Tooltip-DTwCgrPZ.js";import{R as K}from"./RechartsHookInspector-FiK4LEfR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BarrelpQ.js";import"./index-BefZ4p5Z.js";import"./immer-D3lmb_Hz.js";import"./hooks-BSV0CDFu.js";import"./axisSelectors-DfOHronC.js";import"./d3-scale-UoHoc1Us.js";import"./zIndexSlice-DewuM9Kl.js";import"./renderedTicksSlice-B18XtuK2.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DajRV7bT.js";import"./chartDataContext-BDPauSBm.js";import"./CategoricalChart-Bp51RrNo.js";import"./resolveDefaultProps-BwudvEcy.js";import"./CartesianAxis-DRKzcyAj.js";import"./Layer-gI7ebry7.js";import"./Text-D1w4IOeM.js";import"./DOMUtils-Cz4f8MMH.js";import"./Label-B09ck5aR.js";import"./ZIndexLayer-D-ka0Tcp.js";import"./types-OZuhW1zj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Bj_BiyXA.js";import"./symbol-Bipgyq1s.js";import"./step-CdTAn4vV.js";import"./useElementOffset-Dt07PlNN.js";import"./uniqBy-Ccn8DO8r.js";import"./iteratee-CoR2izNf.js";import"./ReactUtils-E47kjf1a.js";import"./ActivePoints-7h-OJP_5.js";import"./Dot-CHPbrrnb.js";import"./RegisterGraphicalItemId-B5rT-TGw.js";import"./ErrorBarContext-Db0NPWQr.js";import"./GraphicalItemClipPath-CGdaFH3i.js";import"./SetGraphicalItem-BDCPoYU4.js";import"./useAnimationId-BG884krZ.js";import"./getRadiusAndStrokeWidthFromDot-B2FefomC.js";import"./ActiveShapeUtils-Cjl2bV4c.js";import"./isPlainObject-Cn3itabH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CPIg9-tb.js";import"./Trapezoid-rVOglQPc.js";import"./Sector-CjSRrVkn.js";import"./Curve-D1t5c_n4.js";import"./Cross-BlMyO2X1.js";import"./index-CQyn9y4S.js";import"./ChartSizeDimensions-D07aYOSB.js";import"./OffsetShower-CPwA5xGr.js";import"./PlotAreaShower-7dIAXo4S.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
