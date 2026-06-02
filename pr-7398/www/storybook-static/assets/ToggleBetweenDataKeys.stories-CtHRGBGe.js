import{P as n,c as t}from"./iframe-NcbJjIA-.js";import{L as p}from"./LineChart-CWgkj_52.js";import{g as s}from"./zIndexSlice-aCnp2Btu.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-Bdvce9Bh.js";import{X as d}from"./XAxis-DiCo7qCN.js";import{Y as y}from"./YAxis-ChVwWRRp.js";import{L as u}from"./Legend-qw_bLgp_.js";import{L as g}from"./Line-RSDTcduu.js";import{T as h}from"./Tooltip-COT2KQpS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C1F7SUdh.js";import"./index-CASzwsd1.js";import"./index-CFcgoPKL.js";import"./index-YT6PLmfy.js";import"./index-B2hMZxT9.js";import"./immer-BrPcfpKJ.js";import"./get-DHJyV6O8.js";import"./renderedTicksSlice-CazECbsF.js";import"./axisSelectors--8zPyqGt.js";import"./d3-scale-B1TlVjVH.js";import"./resolveDefaultProps-9rxZz0BJ.js";import"./isWellBehavedNumber-CRF88Te0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-nvfGUb02.js";import"./chartDataContext-D7rZipVq.js";import"./CategoricalChart-DRPlCLZK.js";import"./CartesianAxis-psqNgsI7.js";import"./Layer-DCqaOLDO.js";import"./Text-DqOWrbn9.js";import"./DOMUtils-VR3x78qW.js";import"./Label-CCVmR4pI.js";import"./ZIndexLayer-HA7Kz5Ib.js";import"./types-B9riDZKf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BOpRBbG3.js";import"./symbol-HKiBMLzb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BKMYYN7l.js";import"./uniqBy-DcnQgaYm.js";import"./iteratee-BM8l9ZPr.js";import"./Curve-Cp63qh_R.js";import"./step-C2x-UOx0.js";import"./ReactUtils-DWeLU6sY.js";import"./ActivePoints-B2_IpYKn.js";import"./Dot-mM6yrIUr.js";import"./RegisterGraphicalItemId-BKDuHm0F.js";import"./ErrorBarContext-B9yYejtE.js";import"./GraphicalItemClipPath-Ck3Yxo8v.js";import"./SetGraphicalItem-BB4v-B7H.js";import"./useAnimationId-DLPXxqZ8.js";import"./getRadiusAndStrokeWidthFromDot-D1I_pbtw.js";import"./ActiveShapeUtils-BwCeE1t9.js";import"./Cross-DRc0bQ-R.js";import"./Rectangle-mfMkikui.js";import"./Sector-DkfipeFJ.js";const ft={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(g,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(h,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const vt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,vt as __namedExportsOrder,ft as default};
