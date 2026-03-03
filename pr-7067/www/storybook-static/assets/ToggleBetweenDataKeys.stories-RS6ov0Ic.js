import{r as n,e as t}from"./iframe-C3IizUjd.js";import{L as p}from"./LineChart-BM-ZuUDR.js";import{R as s}from"./arrayEqualityCheck-BN5YAPve.js";import{C as c}from"./CartesianGrid-fnBE0d0U.js";import{X as l}from"./XAxis-CEjSdtmZ.js";import{Y as d}from"./YAxis-C9Xei-d9.js";import{L as y}from"./Legend-jWa9uXb1.js";import{L as h}from"./Line-CzSxIjFn.js";import{T as u}from"./Tooltip-BiMwSxIv.js";import{R as g}from"./RechartsHookInspector-CMzm5IMa.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-nOVK-a7O.js";import"./index-BDIXnKn2.js";import"./immer-Zfp8_KXi.js";import"./hooks-Dky24mZ6.js";import"./axisSelectors-DftPES2E.js";import"./d3-scale-CueCtyXL.js";import"./zIndexSlice-BO04q8IP.js";import"./renderedTicksSlice-Dt_Lih6a.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-6pUZjxxf.js";import"./chartDataContext-CC6e_g43.js";import"./CategoricalChart-bB5xHAMm.js";import"./resolveDefaultProps-DskrAGQW.js";import"./CartesianAxis-Cf07KQuR.js";import"./Layer-BScYV_nA.js";import"./Text-Cq5Z8SfY.js";import"./DOMUtils-D3cjVXs_.js";import"./Label-D4qF_xzL.js";import"./ZIndexLayer-D0ch3miO.js";import"./types-XYE2Po1C.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-wCZQNuZQ.js";import"./symbol-CdebLSvg.js";import"./step-CEFPVq0V.js";import"./useElementOffset-0uFUfrMY.js";import"./uniqBy-DXLcWzjo.js";import"./iteratee-CyIKp0Yy.js";import"./ReactUtils-DvBN6ieP.js";import"./ActivePoints-DvOttsku.js";import"./Dot-ugLrsFAK.js";import"./RegisterGraphicalItemId-BeeC0A7D.js";import"./ErrorBarContext-ZY5h9mih.js";import"./GraphicalItemClipPath-CxTZUJ58.js";import"./SetGraphicalItem-BkT7mDpp.js";import"./useAnimationId-CDYOyu_I.js";import"./getRadiusAndStrokeWidthFromDot-C-cu9IN5.js";import"./ActiveShapeUtils-C-x2J9sD.js";import"./isPlainObject-BfiDfeU3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Do-vXOL9.js";import"./Trapezoid-BMwhO9Tl.js";import"./Sector-Bpnrz7tS.js";import"./Curve-CEEm8y0E.js";import"./Cross-Dc9mcrIn.js";import"./index-COvlj-J8.js";import"./ChartSizeDimensions-BMoEUk31.js";import"./OffsetShower-C3Z070Oz.js";import"./PlotAreaShower-DeOjQ5h5.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
