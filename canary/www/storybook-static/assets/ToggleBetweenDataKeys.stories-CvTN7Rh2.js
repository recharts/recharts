import{r as n,e as t}from"./iframe-I1Pz45Ny.js";import{L as p}from"./LineChart-C1XTbPI_.js";import{R as s}from"./arrayEqualityCheck-BssfPt5l.js";import{C as c}from"./CartesianGrid-C73f4GUu.js";import{X as l}from"./XAxis-C686G_Ng.js";import{Y as d}from"./YAxis-yT2DhUCy.js";import{L as y}from"./Legend-H90mA884.js";import{L as h}from"./Line-BNPFyFtr.js";import{T as u}from"./Tooltip-DEiFajup.js";import{R as g}from"./RechartsHookInspector-CR238VhK.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DCDr6Jqb.js";import"./hooks-B674bzAM.js";import"./axisSelectors-BE-GMhoq.js";import"./zIndexSlice-BV16LNaQ.js";import"./resolveDefaultProps-Bq-o5tNM.js";import"./PolarUtils-DcZ6GJsX.js";import"./CartesianChart-DRbFdOf0.js";import"./chartDataContext-CiPGF6pl.js";import"./CategoricalChart-Cv93x4E-.js";import"./CartesianAxis-BfHa-zKL.js";import"./Layer-DQZYEAka.js";import"./Text-DswTa9RV.js";import"./DOMUtils--5RVCy_u.js";import"./Label-BgdagQ_F.js";import"./ZIndexLayer-BcHuHMGr.js";import"./types-CrbLuNpc.js";import"./Symbols-BVua8K5W.js";import"./Curve-CHlRnf3G.js";import"./useElementOffset-BNdgrSNe.js";import"./iteratee-TGONUFdq.js";import"./ReactUtils-_pBy8ldc.js";import"./ActivePoints-dh-kFKvq.js";import"./Dot-CUoJxuAW.js";import"./RegisterGraphicalItemId-S1t7FnBd.js";import"./ErrorBarContext-CapFOLPB.js";import"./GraphicalItemClipPath-CYavBbht.js";import"./SetGraphicalItem-B3UzWK5E.js";import"./useAnimationId-SAHxkggc.js";import"./getRadiusAndStrokeWidthFromDot-CMO9CrvP.js";import"./ActiveShapeUtils-BdkX4Sau.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-JQHiIfjv.js";import"./Trapezoid-DAueh7ih.js";import"./Sector-B4M-Rhc-.js";import"./Cross-BG3-gOpg.js";import"./index-DMBIHBp8.js";import"./ChartSizeDimensions-rQb-Z9Di.js";import"./OffsetShower-DqiW8ZGm.js";import"./PlotAreaShower-DtXJ5a61.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,gt as __namedExportsOrder,ut as default};
