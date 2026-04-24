import{r as n,e as t}from"./iframe-LMZEDrr2.js";import{L as p}from"./LineChart-CDsw78cF.js";import{R as s}from"./arrayEqualityCheck-Isy6zPZP.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Da8LAIdn.js";import{X as d}from"./XAxis-CDuwPcZ0.js";import{Y as y}from"./YAxis-ClmaHC8-.js";import{L as h}from"./Legend-DpVDCq_z.js";import{L as u}from"./Line-5-HvnnXd.js";import{T as g}from"./Tooltip-B_90clCK.js";import{R as K}from"./RechartsHookInspector-BQiO1I7n.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CGclI6Yd.js";import"./index-9UiZJf_6.js";import"./immer-BxzI6gFZ.js";import"./hooks-D05996su.js";import"./axisSelectors-BJbnODt1.js";import"./d3-scale-HoZeCUQ0.js";import"./zIndexSlice-C5mrfXZA.js";import"./renderedTicksSlice-P-8ydmtT.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D8UfDOFa.js";import"./chartDataContext-CmqegXUH.js";import"./CategoricalChart-CdP22T7j.js";import"./resolveDefaultProps-BZX4Pe9p.js";import"./CartesianAxis-CmrHLfhr.js";import"./Layer-Dm4unAaj.js";import"./Text-D-rTyPnI.js";import"./DOMUtils-nLe0COZN.js";import"./Label-C1cFmZLh.js";import"./ZIndexLayer-xLHvpxY5.js";import"./types-C96dbGEy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-q47rYWMx.js";import"./symbol-BUCm0Fuj.js";import"./step-DHepAl4j.js";import"./useElementOffset-BsnK6ysB.js";import"./uniqBy-DoryuFu9.js";import"./iteratee-B7wf2MQl.js";import"./ReactUtils-D-S282mX.js";import"./ActivePoints-iQlXbE54.js";import"./Dot-D2FHp4ML.js";import"./RegisterGraphicalItemId-D4ZA5iGR.js";import"./ErrorBarContext-ByVn-xgW.js";import"./GraphicalItemClipPath-BG8ja_no.js";import"./SetGraphicalItem-BbPBNAhF.js";import"./useAnimationId-BVzXz2Ut.js";import"./getRadiusAndStrokeWidthFromDot-uSj8EeRI.js";import"./ActiveShapeUtils-DlCg2xOm.js";import"./isPlainObject-tSKo75hS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-bTQTBoQ8.js";import"./Trapezoid-BaFBv2Ob.js";import"./Sector-DM3Dpfvi.js";import"./Curve-D3f_JNhO.js";import"./Cross-Codaptvi.js";import"./index-B4Bhf0VI.js";import"./ChartSizeDimensions-Dkn4GtcA.js";import"./OffsetShower-BXlYCay7.js";import"./PlotAreaShower-3thsUpgf.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
