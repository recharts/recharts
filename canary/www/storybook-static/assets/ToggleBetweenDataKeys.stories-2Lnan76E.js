import{r as n,e as t}from"./iframe-CIkWUaKQ.js";import{L as p}from"./LineChart-vS_4S00u.js";import{R as s}from"./arrayEqualityCheck-BBFq7eoK.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D_3GbIWg.js";import{X as d}from"./XAxis-BerErBSJ.js";import{Y as y}from"./YAxis-DcHa1OqQ.js";import{L as h}from"./Legend-CqSk1GpZ.js";import{L as u}from"./Line-Bx7wFRjl.js";import{T as g}from"./Tooltip-BR1dvEKK.js";import{R as K}from"./RechartsHookInspector-BuUCbDqR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-YxwXYQPU.js";import"./index-CbwLYB0M.js";import"./immer-BHU9OU6q.js";import"./hooks-sjogQk2Y.js";import"./axisSelectors-BaK7cqC2.js";import"./d3-scale-BZ-edMt9.js";import"./zIndexSlice-Cbu3nPXF.js";import"./renderedTicksSlice-BjREbE6W.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CjcihWnV.js";import"./chartDataContext-noqwwTdm.js";import"./CategoricalChart-BcDmeBuN.js";import"./resolveDefaultProps-CLDluMEp.js";import"./CartesianAxis-ZLsdGGHc.js";import"./Layer-Dzvfyp4W.js";import"./Text-D4ohdNx9.js";import"./DOMUtils-BREdjKiT.js";import"./Label-SHiyMzcT.js";import"./ZIndexLayer-CUuZZhUK.js";import"./types-CPlIJWRj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DLm1p1c0.js";import"./symbol-DsKaePiJ.js";import"./step-lfJzJxuy.js";import"./useElementOffset-BM77jCWR.js";import"./uniqBy-R7vda7ns.js";import"./iteratee-BBMB1KLW.js";import"./ReactUtils-RCeASTt3.js";import"./ActivePoints-B2S0txC7.js";import"./Dot-CQ_am1YH.js";import"./RegisterGraphicalItemId-f4iA6laj.js";import"./ErrorBarContext-dR6dFvJy.js";import"./GraphicalItemClipPath-D13aRDH0.js";import"./SetGraphicalItem-0e33RWLj.js";import"./useAnimationId-DBBbISIM.js";import"./getRadiusAndStrokeWidthFromDot-DqAt7RU4.js";import"./ActiveShapeUtils-DT1OniMN.js";import"./isPlainObject-D-WQBCb_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CAWEyFEy.js";import"./Trapezoid-BDKa0CKl.js";import"./Sector-B07-nfVs.js";import"./Curve-Cbg_n5d0.js";import"./Cross-DlX0xHfr.js";import"./index-C6VPi8LL.js";import"./ChartSizeDimensions-C20x4d8E.js";import"./OffsetShower-B6J-0iMz.js";import"./PlotAreaShower-BBKrHEPi.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
