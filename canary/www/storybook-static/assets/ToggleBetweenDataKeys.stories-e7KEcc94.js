import{r as n,e as t}from"./iframe-BoQTj_5t.js";import{L as p}from"./LineChart-Cbr8LfAS.js";import{R as s}from"./arrayEqualityCheck-h4HF4x_W.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DDawkQoj.js";import{X as d}from"./XAxis-Bw8NdzWJ.js";import{Y as y}from"./YAxis-C-30AhxJ.js";import{L as h}from"./Legend-D65q0N6L.js";import{L as u}from"./Line-BLk097ix.js";import{T as g}from"./Tooltip-BTh2x0fP.js";import{R as K}from"./RechartsHookInspector-LBDhOt6e.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CJottPx3.js";import"./index-BJ1s4j4a.js";import"./immer-LK4juX8g.js";import"./hooks-CxCFhuYH.js";import"./axisSelectors-vijQZibc.js";import"./d3-scale-Dvc-KAkv.js";import"./zIndexSlice-CJZLZTJ5.js";import"./renderedTicksSlice-js0QwYAy.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DLPrj-Eg.js";import"./chartDataContext-BrW6BV92.js";import"./CategoricalChart-CT1UCyKb.js";import"./resolveDefaultProps-Cuq7Ey8b.js";import"./CartesianAxis-B91cAptM.js";import"./Layer-D7Wm7_P-.js";import"./Text-BztroWIo.js";import"./DOMUtils-DmRwSly6.js";import"./Label-_o7tKgSJ.js";import"./ZIndexLayer-BO_vi_Q6.js";import"./types-DLJuN5NY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DDT-2ywb.js";import"./symbol-DzG-jnmU.js";import"./step-BjXHarJ0.js";import"./useElementOffset--tEPFjW1.js";import"./uniqBy-BitKiS8o.js";import"./iteratee-Cs4_s7eF.js";import"./ReactUtils-lu7EU6Kj.js";import"./ActivePoints-Dc2MnlRg.js";import"./Dot-D0_1FxKW.js";import"./RegisterGraphicalItemId-DvNGZwGO.js";import"./ErrorBarContext-pL12W9Rt.js";import"./GraphicalItemClipPath-BjwS4X8D.js";import"./SetGraphicalItem-Ce9evxpu.js";import"./useAnimationId-DbFh8KcE.js";import"./getRadiusAndStrokeWidthFromDot-CwRGrakx.js";import"./ActiveShapeUtils-7MZP2Iwm.js";import"./isPlainObject-cxYRvyg9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BA5R7yHr.js";import"./Trapezoid-D4ZIub8Z.js";import"./Sector-Bxrfj806.js";import"./Curve-CKkto3Op.js";import"./Cross-DiXmlCaR.js";import"./index-DDs3_BL6.js";import"./ChartSizeDimensions-BZhCWEAS.js";import"./OffsetShower-C-R2nTqO.js";import"./PlotAreaShower-d-TVNynX.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
