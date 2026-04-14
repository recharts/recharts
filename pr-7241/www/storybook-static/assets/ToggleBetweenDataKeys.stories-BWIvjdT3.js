import{r as n,e as t}from"./iframe-BjsnxMFa.js";import{L as p}from"./LineChart-CdqBcknc.js";import{R as s}from"./arrayEqualityCheck-D79Z1Ft6.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CHzDGc-u.js";import{X as d}from"./XAxis-CLgGW7JB.js";import{Y as y}from"./YAxis-BVFVddBL.js";import{L as h}from"./Legend-yPgKTZ-e.js";import{L as u}from"./Line-BrfP0Qst.js";import{T as g}from"./Tooltip-Teok_3qe.js";import{R as K}from"./RechartsHookInspector-BHBsN4Jq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CW1Hf6N5.js";import"./index-jIvfCkDE.js";import"./immer-Be7tY_HI.js";import"./hooks-CrPS60z-.js";import"./axisSelectors-DQ8vP1dP.js";import"./d3-scale-DFeGtgyL.js";import"./zIndexSlice-CqY4Aros.js";import"./renderedTicksSlice-BRzJlOTm.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D_ZObIBU.js";import"./chartDataContext-CN9xXS5D.js";import"./CategoricalChart-CTcIqTOw.js";import"./resolveDefaultProps-C6oA156h.js";import"./CartesianAxis-CEeDfojt.js";import"./Layer-iA63SD1n.js";import"./Text-B0WMAGdM.js";import"./DOMUtils-BmB9R95C.js";import"./Label-j2useUX0.js";import"./ZIndexLayer-DSdMaSo2.js";import"./types-BiDeCyZf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D6JP1e2h.js";import"./symbol-GAGGshWY.js";import"./step-CB61oaUG.js";import"./useElementOffset-CRjg3G-v.js";import"./uniqBy-D7WiUy_u.js";import"./iteratee-C_gnpoXw.js";import"./ReactUtils-BGdgbQc7.js";import"./ActivePoints-CfR2rHSN.js";import"./Dot-CjenfdSB.js";import"./RegisterGraphicalItemId-BPn4ir3H.js";import"./ErrorBarContext-BeXR1TDd.js";import"./GraphicalItemClipPath-DdpuzGUU.js";import"./SetGraphicalItem-CNGahdfh.js";import"./useAnimationId-B32Lfo5E.js";import"./getRadiusAndStrokeWidthFromDot-Dunai21J.js";import"./ActiveShapeUtils-BjYnAn6x.js";import"./isPlainObject-OzrxZJ1P.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CAvBODoh.js";import"./Trapezoid-BhCHPlaL.js";import"./Sector-Dfr3Hfmg.js";import"./Curve-DKq8m8L2.js";import"./Cross-Dsisec-w.js";import"./index-Drwbgjrj.js";import"./ChartSizeDimensions-DSkMKFoU.js";import"./OffsetShower-DDkKAXZs.js";import"./PlotAreaShower-DJQQHQ-f.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
