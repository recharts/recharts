import{r as n,e as t}from"./iframe-CLFlzKU9.js";import{L as p}from"./LineChart-BeAjylaw.js";import{R as s}from"./arrayEqualityCheck-CV0K5b6V.js";import{C as c}from"./CartesianGrid-B-mexKbJ.js";import{X as l}from"./XAxis-CTep6ajY.js";import{Y as d}from"./YAxis-1XrS4lWj.js";import{L as y}from"./Legend-BM38pQiP.js";import{L as h}from"./Line-SwDxyZLv.js";import{T as u}from"./Tooltip-LTkItCz-.js";import{R as g}from"./RechartsHookInspector-EUreR-RY.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BmUcxmwQ.js";import"./index-Di3CFc3K.js";import"./immer-Dut6E3j8.js";import"./hooks-CNG9zZ1X.js";import"./axisSelectors-ZIzlwa2b.js";import"./d3-scale-DFBNx2RG.js";import"./zIndexSlice-Dgcx4EWE.js";import"./renderedTicksSlice-qTsdruV1.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CLuzMUl3.js";import"./chartDataContext-BF88oXyn.js";import"./CategoricalChart-Dmo86WGi.js";import"./resolveDefaultProps-BSRSJIfm.js";import"./CartesianAxis-U7WBccnc.js";import"./Layer-D55T8TbI.js";import"./Text-B9BEHbSp.js";import"./DOMUtils-BVpUDVI2.js";import"./Label-B8vPAEDz.js";import"./ZIndexLayer-CygGErko.js";import"./types-C77fUvNb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-B84FzpuI.js";import"./symbol-DS4qszt7.js";import"./step-BHh7-B-Y.js";import"./useElementOffset-B6rd57Yn.js";import"./uniqBy-CnDkSYCK.js";import"./iteratee-D5L_7s48.js";import"./ReactUtils-KqS4Be82.js";import"./ActivePoints-Bn6jZmU2.js";import"./Dot-CU0xm_xN.js";import"./RegisterGraphicalItemId-DlwxkAlg.js";import"./ErrorBarContext-CcCgl_nm.js";import"./GraphicalItemClipPath-BsB0ULuR.js";import"./SetGraphicalItem-DQtM1PSt.js";import"./useAnimationId-B-nqwfiH.js";import"./getRadiusAndStrokeWidthFromDot-DYWP2VQN.js";import"./ActiveShapeUtils-CngmHGxL.js";import"./isPlainObject-C5TOG-jr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGUQeJvS.js";import"./Trapezoid-Nj1UelrR.js";import"./Sector-BGoD3vr5.js";import"./Curve-04aIAzqq.js";import"./Cross-BeHUfMMw.js";import"./index-CmeZFfhb.js";import"./ChartSizeDimensions-BcSaWdnw.js";import"./OffsetShower-C38qJAL5.js";import"./PlotAreaShower-CA5JgFjx.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
