import{r as n,e as t}from"./iframe-D4_kWiik.js";import{L as p}from"./LineChart-CAgVi7E-.js";import{R as s}from"./arrayEqualityCheck-B3HrMvOJ.js";import{C as c}from"./CartesianGrid-CxCgcGG8.js";import{X as l}from"./XAxis-DYXsWNnz.js";import{Y as d}from"./YAxis-DgOR7wnS.js";import{L as y}from"./Legend-DIkplBgv.js";import{L as h}from"./Line-mudUiiQW.js";import{T as u}from"./Tooltip-BeiQvTCq.js";import{R as g}from"./RechartsHookInspector-CKRvII-U.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CPReM4TO.js";import"./index-DoPLCw_p.js";import"./immer-0ruqGMtg.js";import"./hooks-6jZB3yL2.js";import"./axisSelectors-BmHnRFxW.js";import"./d3-scale-n7QD4WrB.js";import"./zIndexSlice-C4SzCaYD.js";import"./renderedTicksSlice-CIXKwc0U.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-sfWAfsuQ.js";import"./chartDataContext-jjjOdAEg.js";import"./CategoricalChart-Csqo5QVJ.js";import"./resolveDefaultProps-DooOk0ZG.js";import"./CartesianAxis-Lz5XVqBq.js";import"./Layer-hulGBcYw.js";import"./Text-CoLcKwL4.js";import"./DOMUtils-Dzu75jG0.js";import"./Label-CWL13-o_.js";import"./ZIndexLayer-sXRztW1g.js";import"./types-BCRPpXrS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CHUFq9Ay.js";import"./symbol-BoxvpimM.js";import"./step-9zWUSiR2.js";import"./useElementOffset-CbtwGd1l.js";import"./uniqBy-BOQHR2T6.js";import"./iteratee-kN7lKKky.js";import"./ReactUtils-B0Tr3Kw3.js";import"./ActivePoints-CdDYwwSa.js";import"./Dot-BsouI4yi.js";import"./RegisterGraphicalItemId-DxmtI7AP.js";import"./ErrorBarContext-KX3UjoPN.js";import"./GraphicalItemClipPath-VQWjMwSl.js";import"./SetGraphicalItem-B_khJyid.js";import"./useAnimationId-Dur5dtsq.js";import"./getRadiusAndStrokeWidthFromDot-DxXAf3lX.js";import"./ActiveShapeUtils-DVInz7Qi.js";import"./isPlainObject-Bzk1EvI7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGtDGrdk.js";import"./Trapezoid-BH067hRN.js";import"./Sector-D-XRTfZm.js";import"./Curve-DIMr1GZI.js";import"./Cross-Bt2CsALe.js";import"./index-Dx5VrxvW.js";import"./ChartSizeDimensions-DSAP6Fpc.js";import"./OffsetShower-DTklH8sW.js";import"./PlotAreaShower-Cqlm22k_.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
