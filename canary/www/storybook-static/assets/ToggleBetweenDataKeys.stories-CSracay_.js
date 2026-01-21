import{r as n,e as t}from"./iframe-But0a38P.js";import{L as p}from"./LineChart-CTCDsCdY.js";import{R as s}from"./arrayEqualityCheck-CYbCyNsP.js";import{C as c}from"./CartesianGrid-NrKmnmqB.js";import{X as l}from"./XAxis-BAXANk5N.js";import{Y as d}from"./YAxis-DG24jA9M.js";import{L as y}from"./Legend-C86zWpAz.js";import{L as h}from"./Line-jJQzj9d9.js";import{T as u}from"./Tooltip-DDsbfsc5.js";import{R as g}from"./RechartsHookInspector-C5Pe1Yuk.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-PnZQcIU_.js";import"./hooks-CpJdPTaX.js";import"./axisSelectors-C4f3hvSw.js";import"./zIndexSlice-BltV0wsp.js";import"./resolveDefaultProps-Bm0IZKgg.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-Cwa6sqm_.js";import"./chartDataContext-BNuUAnVq.js";import"./CategoricalChart-B2oR5-3x.js";import"./CartesianAxis-C8-lm3EO.js";import"./Layer-afBuC6vE.js";import"./Text-CcNcGCTu.js";import"./DOMUtils-Du126Ke7.js";import"./Label-C7EMJJOB.js";import"./ZIndexLayer-BqdPe-lh.js";import"./types-BORgRnck.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D7e9GUiu.js";import"./Curve-B4UI-EDA.js";import"./useElementOffset-B8Ksl-QF.js";import"./iteratee-Dt4Ii8C3.js";import"./ReactUtils-BkpqDUuI.js";import"./ActivePoints-Dnf6qJKf.js";import"./Dot-CcU5UjI7.js";import"./RegisterGraphicalItemId-ByXCQiha.js";import"./ErrorBarContext-C-Z575OG.js";import"./GraphicalItemClipPath-YNxfKYWD.js";import"./SetGraphicalItem-BNXEXR48.js";import"./useAnimationId-DCy88jod.js";import"./getRadiusAndStrokeWidthFromDot-BQ0TWRR4.js";import"./ActiveShapeUtils-CpE5KD3c.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BVahoehG.js";import"./Trapezoid-OOuCLK_Z.js";import"./Sector-BzzDDKvP.js";import"./Cross-CSBpAIQj.js";import"./index-C00Mu2Jv.js";import"./ChartSizeDimensions-C_cjOMUb.js";import"./OffsetShower-CyyKWRo3.js";import"./PlotAreaShower-LOYVmRHK.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
