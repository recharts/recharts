import{r as n,e as t}from"./iframe-KW6q1dC8.js";import{L as p}from"./LineChart-IhxyBiRw.js";import{R as s}from"./arrayEqualityCheck-CsL9oElz.js";import{C as c}from"./CartesianGrid-B0_0b3T8.js";import{X as l}from"./XAxis-CfKcv1L2.js";import{Y as d}from"./YAxis-BTdozUYh.js";import{L as y}from"./Legend-Myjf-Y49.js";import{L as h}from"./Line-pTub0X7V.js";import{T as u}from"./Tooltip-C-7pY7N_.js";import{R as g}from"./RechartsHookInspector-DHhOwwId.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B3hZLvHH.js";import"./index-IRfq0wV0.js";import"./immer-DJQrWxfT.js";import"./hooks-B87Kmuri.js";import"./axisSelectors-CGmw0y2t.js";import"./d3-scale-VvEjRtef.js";import"./zIndexSlice-BRzCHmzO.js";import"./renderedTicksSlice-4nv5xzpG.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-e0ar_JeY.js";import"./chartDataContext-BSoSHoQo.js";import"./CategoricalChart-DZLAbsgr.js";import"./resolveDefaultProps-DHg0Gmry.js";import"./CartesianAxis-CKh1nWaH.js";import"./Layer-6RQ8uR29.js";import"./Text-BNRPp-95.js";import"./DOMUtils-0gZHvISx.js";import"./Label-Bmj0n5iK.js";import"./ZIndexLayer-w4JJl7sJ.js";import"./types-Dwy1lCB-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BNAk55Bs.js";import"./symbol-5c1t0HLC.js";import"./step-B042Wr1e.js";import"./useElementOffset-BZSwjmr-.js";import"./uniqBy-ZYepOa3_.js";import"./iteratee-C-vE-01O.js";import"./ReactUtils-_GmE1-On.js";import"./ActivePoints-BZL4jV5j.js";import"./Dot-BDQ-YubX.js";import"./RegisterGraphicalItemId-YsmU15H8.js";import"./ErrorBarContext-DmVYT152.js";import"./GraphicalItemClipPath-C4dlV5mW.js";import"./SetGraphicalItem-BYLwEs4Z.js";import"./useAnimationId-D6KMdx62.js";import"./getRadiusAndStrokeWidthFromDot-Csfskhtu.js";import"./ActiveShapeUtils-CDAKapsu.js";import"./isPlainObject-j8d21_8Z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C2IbtLxi.js";import"./Trapezoid-DNVzy1-l.js";import"./Sector-CjdyVVOd.js";import"./Curve-DF4GvF_O.js";import"./Cross-CtNRcITV.js";import"./index-8EwdUQHQ.js";import"./ChartSizeDimensions-RgqfN5JQ.js";import"./OffsetShower-BWgPsPSu.js";import"./PlotAreaShower-BcdTxtG3.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
