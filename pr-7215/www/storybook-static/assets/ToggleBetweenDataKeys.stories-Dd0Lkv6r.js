import{u as n,e as t}from"./iframe-CagDbm-R.js";import{L as p}from"./LineChart-Bk45umwU.js";import{g as s}from"./arrayEqualityCheck-Bn08yLiN.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-Cp-b4wtl.js";import{X as d}from"./XAxis-CyILEj33.js";import{Y as u}from"./YAxis-Qo8_bXaH.js";import{L as y}from"./Legend-CBThwByF.js";import{L as h}from"./Line-DjE5KLPa.js";import{T as g}from"./Tooltip-Bx81jUJN.js";import{R as K}from"./RechartsHookInspector-pMEJlnqX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DdluFIAh.js";import"./index-DXI37oHl.js";import"./immer-DWuco0BF.js";import"./hooks-DvlDA_Iq.js";import"./axisSelectors-Cqpe6Z2t.js";import"./d3-scale-BKLsEBZa.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-Tvm87iuX.js";import"./renderedTicksSlice-71Fk0cz1.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BXvauOXS.js";import"./chartDataContext-DU5Nphzy.js";import"./CategoricalChart-DAMUlb45.js";import"./resolveDefaultProps-BrU5Uy_m.js";import"./CartesianAxis-6zuZSvBM.js";import"./Layer-D2JglvMB.js";import"./Text-BNs6VPhb.js";import"./DOMUtils-Bw-DvePw.js";import"./Label-COowhm97.js";import"./ZIndexLayer-BqsAA_KH.js";import"./types-D2ON-SRi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BeiYXLsa.js";import"./symbol-BcJh2PD3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bs1684WT.js";import"./uniqBy-CNxClo-U.js";import"./iteratee-DsFpFkHV.js";import"./Curve-DbLnFn1T.js";import"./step-CjVrG-vW.js";import"./AnimatedItems-HQORsnaH.js";import"./useAnimationId-BEBp-SWr.js";import"./ActivePoints-DbdvGaCl.js";import"./Dot-BHIp2EY6.js";import"./RegisterGraphicalItemId-WhTYY9X4.js";import"./ErrorBarContext-txnn70dD.js";import"./GraphicalItemClipPath-DMoOkNN1.js";import"./SetGraphicalItem-aSNUvlix.js";import"./getRadiusAndStrokeWidthFromDot-B6ftvxTH.js";import"./ActiveShapeUtils-4DOuAOib.js";import"./Cross-WY-9lTvl.js";import"./Rectangle-B56fHVHN.js";import"./Sector-Cj_Alzct.js";import"./index-BDeX6XER.js";import"./ChartSizeDimensions-DNx0LPdc.js";import"./OffsetShower-BNTdFgyM.js";import"./PlotAreaShower-B8l1iW5J.js";const kt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,kt as default};
