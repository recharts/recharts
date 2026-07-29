import{r as n,R as t}from"./iframe-Bx8H2Ifg.js";import{L as p}from"./LineChart-CNwdYzOI.js";import{R as s}from"./zIndexSlice-CibQQwTH.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CY4QfT7G.js";import{X as d}from"./XAxis-DdmuYybV.js";import{Y as y}from"./YAxis-DhvpkuSq.js";import{L as u}from"./Legend-C_d28AlB.js";import{L as h}from"./Line-BVmQtC22.js";import{T as g}from"./Tooltip-BcMh87Zj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DXti2BhE.js";import"./index-DZMfkQNN.js";import"./index-CDB7Uuo1.js";import"./index-D7D5zQI-.js";import"./index--RF86Un6.js";import"./throttle-DcH5jY9T.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BNkNmyy9.js";import"./axisSelectors-Cw32qcc-.js";import"./resolveDefaultProps-atv84skJ.js";import"./isWellBehavedNumber-BjCfjx0l.js";import"./d3-scale-DWE49Teg.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B8KEQc2q.js";import"./chartDataContext-TCBOpZph.js";import"./CategoricalChart-D_-fj6zl.js";import"./CartesianAxis-DzJ0MnYC.js";import"./Layer-B1Bv1tpm.js";import"./Text-DTS3udCG.js";import"./DOMUtils-B-4npwaq.js";import"./Label-DbBEn_Ke.js";import"./ZIndexLayer-C7frmUa_.js";import"./types-Dz5mzedy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CzAT56ie.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-0Jm-HtWQ.js";import"./symbol-DAvIO-EU.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DNIfR18S.js";import"./uniqBy-Dxv0QDCx.js";import"./iteratee-BhoZeZsJ.js";import"./Curve-dStP5J8a.js";import"./step-BYuX5L52.js";import"./AnimatedItems-CwxdPZKw.js";import"./useAnimationId-BtPQFk12.js";import"./ActivePoints-BilhKSxD.js";import"./Dot-bxDDkr32.js";import"./RegisterGraphicalItemId-B2iGTOcQ.js";import"./ErrorBarContext-BI-oQ816.js";import"./GraphicalItemClipPath-B35L0Cvh.js";import"./SetGraphicalItem-CrnQ6XAB.js";import"./getRadiusAndStrokeWidthFromDot-cCEJEDsq.js";import"./ActiveShapeUtils-D4eokJlb.js";import"./Cross-ChkFCt86.js";import"./Rectangle-BXj7PHVN.js";import"./util-Dxo8gN5i.js";import"./Sector-CybYrglf.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Lt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Lt as __namedExportsOrder,Et as default};
