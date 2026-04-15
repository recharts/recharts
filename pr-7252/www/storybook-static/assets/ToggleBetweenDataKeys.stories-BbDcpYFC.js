import{r as n,e as t}from"./iframe-BXY1ZxMw.js";import{L as p}from"./LineChart-DbEpEZVx.js";import{R as s}from"./arrayEqualityCheck-DcA-4E3i.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CyDuqZtF.js";import{X as d}from"./XAxis-C1AEexQD.js";import{Y as y}from"./YAxis-BQsY6Xkn.js";import{L as h}from"./Legend-DiXCz_iN.js";import{L as u}from"./Line-njRk575c.js";import{T as g}from"./Tooltip-BOvrHfXG.js";import{R as K}from"./RechartsHookInspector-BjXhKyjD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D-QVGmW9.js";import"./index-3g6pKTEF.js";import"./immer-BIFs4B-N.js";import"./hooks-BMNZaKTW.js";import"./axisSelectors-DujQk2mS.js";import"./d3-scale-CVGboYSt.js";import"./zIndexSlice-Ce-rItNm.js";import"./renderedTicksSlice-9b_yiBc1.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-RUN03By5.js";import"./chartDataContext-ktNnxBdo.js";import"./CategoricalChart-BRmwchnd.js";import"./resolveDefaultProps-C-HKPb9Y.js";import"./CartesianAxis-Cu56U0d6.js";import"./Layer-CSlcUsPH.js";import"./Text-khHsIcyp.js";import"./DOMUtils-DRNBButz.js";import"./Label-DBppt7lW.js";import"./ZIndexLayer-NUbH9u4P.js";import"./types-6ITthLWo.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DIWprCIn.js";import"./symbol-CgR1B8Aj.js";import"./step-BxTVkj_h.js";import"./useElementOffset-OY-49NtZ.js";import"./uniqBy-COQJy0N9.js";import"./iteratee-g6hWHTNZ.js";import"./ReactUtils-jvyP91Ey.js";import"./ActivePoints-ChJ6-xNu.js";import"./Dot-fq0sMsij.js";import"./RegisterGraphicalItemId-Bn5vI_pp.js";import"./ErrorBarContext-D19syQ9l.js";import"./GraphicalItemClipPath-BRuIkpbH.js";import"./SetGraphicalItem-CZGya2Pz.js";import"./useAnimationId-CLslbl-_.js";import"./getRadiusAndStrokeWidthFromDot-BYlpFOLw.js";import"./ActiveShapeUtils-DDyUax94.js";import"./isPlainObject-CCgYT477.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BFSTpqGq.js";import"./Trapezoid-OWqREu8T.js";import"./Sector-DCuOMg7b.js";import"./Curve-yQu46FzN.js";import"./Cross-BPR-DT2c.js";import"./index-LDL5x1G-.js";import"./ChartSizeDimensions-BO7SfmPn.js";import"./OffsetShower-CGdvmPYD.js";import"./PlotAreaShower-kl-KbyOo.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
