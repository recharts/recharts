import{r as n,e as t}from"./iframe-DDDJQB5W.js";import{L as p}from"./LineChart-By0jGKhz.js";import{R as s}from"./arrayEqualityCheck-D0Xb1fN2.js";import{C as c}from"./CartesianGrid-jc_ttR56.js";import{X as l}from"./XAxis-wieUEhCR.js";import{Y as d}from"./YAxis-5_ZrD8qJ.js";import{L as y}from"./Legend-CsurXXSR.js";import{L as h}from"./Line-DsjiLBEm.js";import{T as u}from"./Tooltip-DC-0U45b.js";import{R as g}from"./RechartsHookInspector-UcMzq5oF.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DdXQ715_.js";import"./hooks-BP25Spjv.js";import"./axisSelectors-CQBK46ul.js";import"./zIndexSlice-rPTjsX-n.js";import"./resolveDefaultProps-BsKQv1PU.js";import"./PolarUtils-t5VCEmBY.js";import"./CartesianChart-ZUHoE3GB.js";import"./chartDataContext-j99xrIrV.js";import"./CategoricalChart-grKPARSf.js";import"./CartesianAxis-CkTm5RK2.js";import"./Layer-VwKMwUPk.js";import"./Text-Djbe6uvl.js";import"./DOMUtils-Dkn2KrJ_.js";import"./Label-vsQtY8U6.js";import"./ZIndexLayer-DbViNaNl.js";import"./types-CGHtFgCy.js";import"./Symbols-ykgg1Owr.js";import"./Curve-zMorL5Ul.js";import"./useElementOffset-qOK29dPg.js";import"./iteratee-2IfE8Xfy.js";import"./ReactUtils-DAfUDxZJ.js";import"./ActivePoints-CxpylZkY.js";import"./Dot-JevgNCxq.js";import"./RegisterGraphicalItemId-Du0teFv1.js";import"./ErrorBarContext-Ds9eksq1.js";import"./GraphicalItemClipPath-DhKhb3Nw.js";import"./SetGraphicalItem-C60hp0F5.js";import"./useAnimationId-C8z7_GYR.js";import"./getRadiusAndStrokeWidthFromDot-_c6DE0sw.js";import"./ActiveShapeUtils-BxCYJ66h.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMimnTgv.js";import"./Trapezoid-DCDgebWC.js";import"./Sector-DoveBBFo.js";import"./Cross-BZo1a4xI.js";import"./index-BliyNw2M.js";import"./ChartSizeDimensions-BYcSqOel.js";import"./OffsetShower-BlJsaDut.js";import"./PlotAreaShower-rDHCl9WN.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
