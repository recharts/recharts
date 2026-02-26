import{r as n,e as t}from"./iframe-6geHM4bd.js";import{L as p}from"./LineChart-7HpR_HHs.js";import{R as s}from"./arrayEqualityCheck-Bhk4eC6b.js";import{C as c}from"./CartesianGrid-OsQE69dK.js";import{X as l}from"./XAxis-enChBe_S.js";import{Y as d}from"./YAxis-CyQoyaj5.js";import{L as y}from"./Legend-BCQ4i3bB.js";import{L as h}from"./Line-jU53A7NC.js";import{T as u}from"./Tooltip-BDkatYxu.js";import{R as g}from"./RechartsHookInspector-DIMVuZhQ.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CT-ler3b.js";import"./index-BthKVvnl.js";import"./immer-BHDsl4Gi.js";import"./hooks-DI5QNaPY.js";import"./axisSelectors-CkcbrWkF.js";import"./d3-scale-B4Y55H0h.js";import"./zIndexSlice-DbqCu4eM.js";import"./renderedTicksSlice-Q5iEeOyf.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DcdXCHSt.js";import"./chartDataContext-C-mzylkg.js";import"./CategoricalChart-T8dvDJlI.js";import"./resolveDefaultProps-CBsCUn_G.js";import"./CartesianAxis-BqFoQr74.js";import"./Layer-AOnBAVLr.js";import"./Text--8GWbfGy.js";import"./DOMUtils-Bh7eQOMe.js";import"./Label-eYApNfXX.js";import"./ZIndexLayer-D_4fvMt1.js";import"./types-BNIhqt2v.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D0fHlVEK.js";import"./symbol-D3KeBWn_.js";import"./step-DQP9UvLT.js";import"./useElementOffset-Yf81zrLa.js";import"./uniqBy-D0BLSQKW.js";import"./iteratee-Dsk_uIQJ.js";import"./ReactUtils-DLbKFm0I.js";import"./ActivePoints-BxYhIeKT.js";import"./Dot-CxbLLsp7.js";import"./RegisterGraphicalItemId-CnRMZ_3g.js";import"./ErrorBarContext-D0w-EAob.js";import"./GraphicalItemClipPath-CLYl1R8a.js";import"./SetGraphicalItem-B9Yc_fe3.js";import"./useAnimationId-RNAT_shg.js";import"./getRadiusAndStrokeWidthFromDot-nLQDjczC.js";import"./ActiveShapeUtils-Bd1evmhL.js";import"./isPlainObject-BrUI-U16.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Upynic_t.js";import"./Trapezoid-COJp5Zhq.js";import"./Sector-xROucIrP.js";import"./Curve-CQuCDB0y.js";import"./Cross-DatCJvBD.js";import"./index-W9fTJ1Ap.js";import"./ChartSizeDimensions-ZcxWch0o.js";import"./OffsetShower-D1XTDPFK.js";import"./PlotAreaShower-BWZPams-.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
