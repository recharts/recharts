import{r as n,e as t}from"./iframe-DUJvjQLt.js";import{L as p}from"./LineChart-BxHlyJPM.js";import{R as s}from"./arrayEqualityCheck-D73e69Gl.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CHqFN1LR.js";import{X as d}from"./XAxis-CDduZbSd.js";import{Y as y}from"./YAxis-5YVsvPvG.js";import{L as h}from"./Legend-GyXgLfQg.js";import{L as u}from"./Line-CKYIKoib.js";import{T as g}from"./Tooltip-Bjcvf23I.js";import{R as K}from"./RechartsHookInspector-DrzYioyl.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CgMQObc0.js";import"./index-5w8w8rw4.js";import"./immer-5FyrIQvG.js";import"./hooks-yQB_dM7s.js";import"./axisSelectors-sUoMIbfp.js";import"./d3-scale-DeFOwVvR.js";import"./zIndexSlice-Bkmt5zDA.js";import"./renderedTicksSlice-CvJNCVvu.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DJ5W1dUn.js";import"./chartDataContext-BQu7UVSx.js";import"./CategoricalChart-Fz_Uxhkr.js";import"./resolveDefaultProps-8ySwU0EB.js";import"./CartesianAxis-D5lD8t2m.js";import"./Layer-CllgDPqI.js";import"./Text-xsfGunAq.js";import"./DOMUtils-DjWXT55X.js";import"./Label-DTyf3h_b.js";import"./ZIndexLayer-CKSncrZg.js";import"./types-CDGURZBi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-uJbjONwG.js";import"./symbol-Dyd8e6t_.js";import"./step-Cx__dv2e.js";import"./useElementOffset-CfhbCAoH.js";import"./uniqBy-CChSEAsS.js";import"./iteratee-DUBFzJp0.js";import"./ReactUtils-t-sHadM3.js";import"./ActivePoints-B-iqIfRa.js";import"./Dot-CMPDiPBa.js";import"./RegisterGraphicalItemId-D72lmnH7.js";import"./ErrorBarContext-DyOg8xi-.js";import"./GraphicalItemClipPath-CkZzGh0E.js";import"./SetGraphicalItem-vFCTqo9Z.js";import"./useAnimationId-Dw_qoDvw.js";import"./getRadiusAndStrokeWidthFromDot-BjM5ou8k.js";import"./ActiveShapeUtils-BpbAKqrS.js";import"./isPlainObject-Dz-OvCgD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BxgoD1Qw.js";import"./Trapezoid-6uim8m8Z.js";import"./Sector-CpvLellE.js";import"./Curve-VbNPleyE.js";import"./Cross-BicExKUE.js";import"./index-v5p6oAve.js";import"./ChartSizeDimensions-BX1JxuVN.js";import"./OffsetShower-CNz_UBJI.js";import"./PlotAreaShower-C2224vVQ.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
