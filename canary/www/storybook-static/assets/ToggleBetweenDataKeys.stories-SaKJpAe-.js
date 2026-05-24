import{u as n,e as t}from"./iframe-ChNOinEW.js";import{L as p}from"./LineChart-CPon-J0Z.js";import{g as s}from"./arrayEqualityCheck-ejHXznq4.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-B3MqC3fX.js";import{X as d}from"./XAxis-BNsMzyt5.js";import{Y as u}from"./YAxis-CSVKIBm8.js";import{L as y}from"./Legend-D8ebNvgL.js";import{L as h}from"./Line-o244vEU5.js";import{T as g}from"./Tooltip-BcsiREkY.js";import{R as K}from"./RechartsHookInspector-BOE9KQVD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-e8IcX7Ky.js";import"./index-DMHtEqPw.js";import"./immer-C-_4yaFF.js";import"./hooks-DZ4AuhfW.js";import"./axisSelectors-Wf-uHVWr.js";import"./d3-scale-B3SHfU9r.js";import"./zIndexSlice-BFRT_l82.js";import"./renderedTicksSlice-P1hbw2J7.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C54kEOmP.js";import"./chartDataContext-DjEoDELK.js";import"./CategoricalChart-CaEOI484.js";import"./resolveDefaultProps-CrKZ3yHb.js";import"./CartesianAxis-B1qSIHlZ.js";import"./Layer-C5r2D5eL.js";import"./Text-D9d9Y4NZ.js";import"./DOMUtils-DGZ4THTA.js";import"./Label-toG1Bdw3.js";import"./ZIndexLayer-B8mCWzZh.js";import"./types-o0HcDoUt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DERmPww2.js";import"./symbol-DabQrqYS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C8CRPBgP.js";import"./uniqBy-BvCUGEDR.js";import"./iteratee-BuSwAxym.js";import"./Curve-o5S5hG9f.js";import"./step-CtDorYUy.js";import"./ReactUtils-Ck9hJUMi.js";import"./ActivePoints-DQV8XJKb.js";import"./Dot-el16A6Be.js";import"./RegisterGraphicalItemId-DDUKZo60.js";import"./ErrorBarContext-kJOKaxmw.js";import"./GraphicalItemClipPath-BEGDR4Eg.js";import"./SetGraphicalItem-DSKSTIyc.js";import"./useAnimationId-Dtq79URZ.js";import"./getRadiusAndStrokeWidthFromDot-DnG891GK.js";import"./ActiveShapeUtils-LTcw4Xsa.js";import"./Cross-CaCs0rRK.js";import"./Rectangle-C57_hq_U.js";import"./Sector-DFk4enOh.js";import"./index-OCCX1cWv.js";import"./ChartSizeDimensions-Cm_TkHUI.js";import"./OffsetShower-TftFluvn.js";import"./PlotAreaShower-zOTWVw7t.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,Lt as default};
