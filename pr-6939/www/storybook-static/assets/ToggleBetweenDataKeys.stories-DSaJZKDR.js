import{r as n,e as t}from"./iframe-BQPEMrXd.js";import{L as p}from"./LineChart-DnDFxSMP.js";import{R as s}from"./arrayEqualityCheck-CslLKJ6H.js";import{C as c}from"./CartesianGrid-CXNnKGRI.js";import{X as l}from"./XAxis-mF1pALMt.js";import{Y as d}from"./YAxis-CIcAGIvo.js";import{L as y}from"./Legend-25dK6D8H.js";import{L as h}from"./Line-8JUB1lNz.js";import{T as u}from"./Tooltip-CW0kCRen.js";import{R as g}from"./RechartsHookInspector-DspFoKBX.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DACGaUhd.js";import"./hooks-Bdj8JxEZ.js";import"./axisSelectors-CtzL1lJc.js";import"./zIndexSlice-CdQy2W3n.js";import"./resolveDefaultProps-BDNWBHNP.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-BMe1DD5u.js";import"./chartDataContext-Bf7gL6YI.js";import"./CategoricalChart-Do_dOtlr.js";import"./CartesianAxis-CNEc1nbZ.js";import"./Layer-DxbBzKq7.js";import"./Text-40tQThuO.js";import"./DOMUtils-CBEPLavF.js";import"./Label-CJDR703l.js";import"./ZIndexLayer-BhdUGqn6.js";import"./types-BQWi4mRQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-zJ2C1Rrw.js";import"./Curve-CkSquOYK.js";import"./useElementOffset-CQ61oo7Y.js";import"./iteratee-Bw969CDs.js";import"./ReactUtils-Ctv4TrHD.js";import"./ActivePoints-CBPMI_KV.js";import"./Dot-Dad_gt4k.js";import"./RegisterGraphicalItemId-DGfNttgy.js";import"./ErrorBarContext-DCh3UuB4.js";import"./GraphicalItemClipPath-BhozllE_.js";import"./SetGraphicalItem-Dib0kNEx.js";import"./useAnimationId-BxGZeVYE.js";import"./getRadiusAndStrokeWidthFromDot-DDWPUI43.js";import"./ActiveShapeUtils-BLcBZx_i.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BmEiGd0_.js";import"./Trapezoid-uvUeJozR.js";import"./Sector-gJW5kDSo.js";import"./Cross-V_DJv579.js";import"./index-DIjwufBA.js";import"./ChartSizeDimensions-CVrNRa4B.js";import"./OffsetShower-DTE5GBb5.js";import"./PlotAreaShower-6AA0_a8Q.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Kt as __namedExportsOrder,gt as default};
