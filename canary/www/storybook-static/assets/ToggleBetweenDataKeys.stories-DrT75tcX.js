import{r as n,e as t}from"./iframe-1J0v0kJa.js";import{L as p}from"./LineChart-dMlqo4kG.js";import{R as s}from"./arrayEqualityCheck-Crr3Dzh6.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BJ72W802.js";import{X as d}from"./XAxis-BA2sHg_J.js";import{Y as y}from"./YAxis-BN3lk6r1.js";import{L as h}from"./Legend-BP0OO6t3.js";import{L as u}from"./Line-BKAL78qy.js";import{T as g}from"./Tooltip-O0JzmClx.js";import{R as K}from"./RechartsHookInspector-D3XyLt9P.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-NfAPn5nO.js";import"./index-CooR3W3l.js";import"./immer-ZnQZAws8.js";import"./hooks-D7UD8X0t.js";import"./axisSelectors-DmWq6GuE.js";import"./d3-scale-WGdCtqiA.js";import"./zIndexSlice-DMwFl-HJ.js";import"./renderedTicksSlice-CcC_3ltP.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-T051KWch.js";import"./chartDataContext-CLazaXIr.js";import"./CategoricalChart-_SeB5FDZ.js";import"./resolveDefaultProps-C05SE_tf.js";import"./CartesianAxis-BEIIuhLy.js";import"./Layer-BVvsC5_K.js";import"./Text-DVd_qj4R.js";import"./DOMUtils-CddqG7G1.js";import"./Label-BoTwLtcO.js";import"./ZIndexLayer-Bol6PWej.js";import"./types-DbkoSsM0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-B03fqPxI.js";import"./symbol-DdOQHYIO.js";import"./step-D8iwa8wm.js";import"./useElementOffset-DD7oMeZg.js";import"./uniqBy-31dyuDjs.js";import"./iteratee-CanO0FQp.js";import"./ReactUtils-DrCtqFWq.js";import"./ActivePoints-C2NgxcK8.js";import"./Dot-BM5MyVLI.js";import"./RegisterGraphicalItemId-Ds4EEh5p.js";import"./ErrorBarContext-BoDeu_Di.js";import"./GraphicalItemClipPath-AV19Jsyu.js";import"./SetGraphicalItem-CdiSFPyl.js";import"./useAnimationId-AI_H7XbQ.js";import"./getRadiusAndStrokeWidthFromDot-DVwfrbNw.js";import"./ActiveShapeUtils-DPgm42Av.js";import"./isPlainObject-yfWDawVf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CtnB5yHC.js";import"./Trapezoid-BQHCtBz1.js";import"./Sector-DrN7HSuk.js";import"./Curve-MBHSj-Hn.js";import"./Cross-DWSxO7oX.js";import"./index-tjWZGZoc.js";import"./ChartSizeDimensions-DBgMadMY.js";import"./OffsetShower-L7gF9BZe.js";import"./PlotAreaShower-C_TnXU0T.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
