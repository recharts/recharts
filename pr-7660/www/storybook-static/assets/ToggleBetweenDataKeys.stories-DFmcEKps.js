import{r as n,R as t}from"./iframe-DsANpUmI.js";import{L as p}from"./LineChart-6oL0Cv0-.js";import{R as s}from"./zIndexSlice-DvbQ_xRM.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DGKX8SVs.js";import{X as d}from"./XAxis-75DaHKlQ.js";import{Y as y}from"./YAxis-Cm1QLXj3.js";import{L as u}from"./Legend-30P8gscm.js";import{L as h}from"./Line-Dnn5aHX6.js";import{T as g}from"./Tooltip-pX9VPrv8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BDrHj0U2.js";import"./index-5L0AuTID.js";import"./index-BNBrr31l.js";import"./index-DLEQ2NY5.js";import"./index-D3xqrgS8.js";import"./throttle-vYgBP45f.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B-1KrEKd.js";import"./resolveDefaultProps-VCXcnZ86.js";import"./isWellBehavedNumber-Dg3vRfwI.js";import"./d3-scale-_QauBjGX.js";import"./renderedTicksSlice-BUDGobd4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cwf-uiEG.js";import"./chartDataContext-C2aYZmpD.js";import"./CategoricalChart-Di7Ri-zj.js";import"./CartesianAxis-XsOc8jcn.js";import"./Layer-DYWDW_71.js";import"./Text-CjTSiniW.js";import"./DOMUtils-kNujPIKB.js";import"./useId-B0Q44yTc.js";import"./useBackwardsCompatibleTheme-BBpmGxx6.js";import"./Label-B4DeKwN7.js";import"./ZIndexLayer-MPr2tp5c.js";import"./types-CnYkNLV_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DNdSJ6g5.js";import"./symbol-BKBwZGCo.js";import"./path-DyVhHtw_.js";import"./useElementOffset-KPxvDBEN.js";import"./uniqBy-BG78mG2t.js";import"./iteratee-CaAmmWd3.js";import"./Curve-CRdwjUaH.js";import"./step-BYrDDVtV.js";import"./AnimatedItems-rVlz1FJX.js";import"./useAnimationId-DetthuUW.js";import"./ActivePoints-B0q4xgtH.js";import"./Dot-DxPtGh3x.js";import"./RegisterGraphicalItemId-Cpe7Zv2c.js";import"./ErrorBarContext-C9fSG5q2.js";import"./GraphicalItemClipPath-YjZkau9w.js";import"./SetGraphicalItem-BGt3myf-.js";import"./getRadiusAndStrokeWidthFromDot-Dxn9p5np.js";import"./ActiveShapeUtils-nZLcFoMw.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-Bi4B-9m4.js";import"./Rectangle-C6m9_9yg.js";import"./util-Dxo8gN5i.js";import"./Sector-D29kq0U6.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
