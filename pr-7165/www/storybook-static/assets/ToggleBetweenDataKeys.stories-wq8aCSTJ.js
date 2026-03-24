import{r as n,e as t}from"./iframe-B-0BbsAX.js";import{L as p}from"./LineChart-DPSSjsqw.js";import{R as s}from"./arrayEqualityCheck-D0GIznF3.js";import{C as c}from"./CartesianGrid-DtezH6A5.js";import{X as l}from"./XAxis-DbUi1vPs.js";import{Y as d}from"./YAxis-CX3uKBZw.js";import{L as y}from"./Legend-FKFUI6bP.js";import{L as h}from"./Line-DKVN5x33.js";import{T as u}from"./Tooltip-C_gWXMqP.js";import{R as g}from"./RechartsHookInspector-a5VIBXh4.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DdelftvL.js";import"./index-CC_jrfcS.js";import"./immer-16Lk8WhM.js";import"./hooks-CLbcsvpt.js";import"./axisSelectors-B5M5y7tb.js";import"./d3-scale-CRpFVGXV.js";import"./zIndexSlice-k5NGco1R.js";import"./renderedTicksSlice-DrnPsf35.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BzA52Q7h.js";import"./chartDataContext-ZzZnHAfn.js";import"./CategoricalChart-CiBn8gUj.js";import"./resolveDefaultProps-CeHfSYTr.js";import"./CartesianAxis-DSL26GAi.js";import"./Layer-DmBsOgtN.js";import"./Text-BDsrdoFV.js";import"./DOMUtils-ChlQnBsE.js";import"./Label-RKv-aJqQ.js";import"./ZIndexLayer-BS0cCdPh.js";import"./types-CmNjNiS4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D_XjywmB.js";import"./symbol-mrFX37Pu.js";import"./step-BJ3svLa1.js";import"./useElementOffset-CjsqURDU.js";import"./uniqBy-CgnD7qFS.js";import"./iteratee-BlUtqQt7.js";import"./ReactUtils-Dc4L6Dcx.js";import"./ActivePoints-D2jfQmP-.js";import"./Dot-DB3UZIXD.js";import"./RegisterGraphicalItemId-EYUIR0Rr.js";import"./ErrorBarContext-B191cjJB.js";import"./GraphicalItemClipPath-j2FZHUrx.js";import"./SetGraphicalItem--6EOKRx7.js";import"./useAnimationId-C_pphjez.js";import"./getRadiusAndStrokeWidthFromDot-CIfccvwt.js";import"./ActiveShapeUtils-nrA-vqiB.js";import"./isPlainObject-CkRpqEDw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ApzVODqx.js";import"./Trapezoid-Coy9-nSc.js";import"./Sector-Czl1xAWH.js";import"./Curve-zb7_jZJr.js";import"./Cross-i_EZrFe4.js";import"./index-BMYt7gcu.js";import"./ChartSizeDimensions-BoIgW8rA.js";import"./OffsetShower-DSqgSq0T.js";import"./PlotAreaShower-DqxXtLCD.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
