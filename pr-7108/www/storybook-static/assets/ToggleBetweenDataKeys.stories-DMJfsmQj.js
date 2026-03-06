import{r as n,e as t}from"./iframe-BB4UUGL6.js";import{L as p}from"./LineChart-BmiaV5S7.js";import{R as s}from"./arrayEqualityCheck-BYmPeJrr.js";import{C as c}from"./CartesianGrid-BCxtGjHc.js";import{X as l}from"./XAxis-Sg_yoptQ.js";import{Y as d}from"./YAxis-BjQFu2fY.js";import{L as y}from"./Legend-BdIYXKvq.js";import{L as h}from"./Line-BuVVGvA7.js";import{T as u}from"./Tooltip-UgzVMgnv.js";import{R as g}from"./RechartsHookInspector-Bh0xNYsg.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D-mKRVYc.js";import"./index-DU7ieidm.js";import"./immer-CGr0ptDX.js";import"./hooks-DFTFZ2_R.js";import"./axisSelectors-xhLV-t5X.js";import"./d3-scale-T-qah3ml.js";import"./zIndexSlice-CuyQJUW0.js";import"./renderedTicksSlice-lC7cSHHa.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BRe-Cj4k.js";import"./chartDataContext-zlvG9ShK.js";import"./CategoricalChart-Ct_zc7o_.js";import"./resolveDefaultProps-Dwn4tBVe.js";import"./CartesianAxis-D42FnObu.js";import"./Layer-CzRXBUT9.js";import"./Text-xAwQNVqR.js";import"./DOMUtils-DBhHNbvA.js";import"./Label-BuQHIgdG.js";import"./ZIndexLayer-C40yFkyN.js";import"./types-DX1g5Szp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CZ1AA7rn.js";import"./symbol-DNGflvzo.js";import"./step-BIZ2Vv4e.js";import"./useElementOffset-DLf_jPLb.js";import"./uniqBy-DnQsVhpX.js";import"./iteratee-CSGtCKt7.js";import"./ReactUtils-C_PCtVqv.js";import"./ActivePoints-qho3Mxiu.js";import"./Dot-BGQcGA8a.js";import"./RegisterGraphicalItemId-DlFEoDs3.js";import"./ErrorBarContext-CSlHUW5r.js";import"./GraphicalItemClipPath-Y2-czyRy.js";import"./SetGraphicalItem-Da_W53nM.js";import"./useAnimationId-CR73Z47T.js";import"./getRadiusAndStrokeWidthFromDot-DX4q2mcQ.js";import"./ActiveShapeUtils-DQggNROu.js";import"./isPlainObject-BHtqOomI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BoM2sg2T.js";import"./Trapezoid-02WGJX_U.js";import"./Sector-DNRZINVD.js";import"./Curve--7RAEkWQ.js";import"./Cross-ugVlNa1O.js";import"./index-UCZ6NmO8.js";import"./ChartSizeDimensions-Dx8qGUZW.js";import"./OffsetShower-6Dk3TPlH.js";import"./PlotAreaShower-CdNqGPUL.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
