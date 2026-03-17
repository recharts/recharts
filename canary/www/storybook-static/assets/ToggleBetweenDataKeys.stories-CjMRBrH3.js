import{r as n,e as t}from"./iframe-c0lvfgLm.js";import{L as p}from"./LineChart-CUqfE9kS.js";import{R as s}from"./arrayEqualityCheck-DNZkspsy.js";import{C as c}from"./CartesianGrid-DB0HgFmD.js";import{X as l}from"./XAxis-BzKnXhRE.js";import{Y as d}from"./YAxis-CpBtSMnf.js";import{L as y}from"./Legend-C6y9z2xK.js";import{L as h}from"./Line-DKYnlPFY.js";import{T as u}from"./Tooltip-hdi9ZDlD.js";import{R as g}from"./RechartsHookInspector-5i7IBG_e.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D7zqAgEz.js";import"./index-JTQ4PF_k.js";import"./immer-DMEI_VCu.js";import"./hooks-ChUb4DZG.js";import"./axisSelectors-CPhAqa0q.js";import"./d3-scale-DyxWsOri.js";import"./zIndexSlice-B7Te91Jz.js";import"./renderedTicksSlice-CoATx-5v.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B0tcceZf.js";import"./chartDataContext-D5ehU8Li.js";import"./CategoricalChart-CZL3Qa9D.js";import"./resolveDefaultProps-DX2cxMOG.js";import"./CartesianAxis-BPHeWl3o.js";import"./Layer-7iJmeUkd.js";import"./Text-Bx9IcEZb.js";import"./DOMUtils-lAJ9Yg9q.js";import"./Label-BLt0xOi5.js";import"./ZIndexLayer-FNmvAVY8.js";import"./types-Dylc_TMc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DtF8_27w.js";import"./symbol-BFhqOZgB.js";import"./step-BpAcvZss.js";import"./useElementOffset-NhoGt6o4.js";import"./uniqBy-CZAEIT1t.js";import"./iteratee-C5EP3l3E.js";import"./ReactUtils-CueXlXtD.js";import"./ActivePoints-CfmDyciD.js";import"./Dot-BLoL5jCu.js";import"./RegisterGraphicalItemId-B0SpB0cP.js";import"./ErrorBarContext-BIxtFArD.js";import"./GraphicalItemClipPath-BPFJLqSa.js";import"./SetGraphicalItem-DnhQPEpT.js";import"./useAnimationId-BHpMyUty.js";import"./getRadiusAndStrokeWidthFromDot-DcGd4q7a.js";import"./ActiveShapeUtils-DlPS2wY5.js";import"./isPlainObject-YzH8Qd1R.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CcbUzCSE.js";import"./Trapezoid-CQsqSlZw.js";import"./Sector-Bob5xxX4.js";import"./Curve-BXRCCM_V.js";import"./Cross-X2t3Rau3.js";import"./index-B2Ds3Lof.js";import"./ChartSizeDimensions-biGDO6V4.js";import"./OffsetShower-bDiiPLh2.js";import"./PlotAreaShower-DfFE-FzJ.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
