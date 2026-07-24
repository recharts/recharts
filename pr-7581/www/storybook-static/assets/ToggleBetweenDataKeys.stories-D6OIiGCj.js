import{r as n,R as t}from"./iframe-Cug8bpW1.js";import{L as p}from"./LineChart-CkL4CXlQ.js";import{R as s}from"./zIndexSlice-9cZpiRga.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BjNhFx1r.js";import{X as d}from"./XAxis-BfPgGv85.js";import{Y as y}from"./YAxis-uhDp_b-D.js";import{L as u}from"./Legend-DxugirGZ.js";import{L as h}from"./Line-B5X5EC2f.js";import{T as g}from"./Tooltip-Gb3s8MLg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DxwXXeuL.js";import"./index-GrHgVuHl.js";import"./index-C2En2hdi.js";import"./index-BU-oTyxR.js";import"./index-A9iLt5fb.js";import"./throttle-B6lLkzEm.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DuZDB9Ry.js";import"./axisSelectors-BKPMDK9R.js";import"./resolveDefaultProps-CWL5wq5C.js";import"./isWellBehavedNumber-1QeuJ8xh.js";import"./d3-scale-Dh_zFLyg.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DEYZwCE3.js";import"./chartDataContext-BQl3S7aI.js";import"./CategoricalChart-1sHQms95.js";import"./CartesianAxis-BVOPpVQH.js";import"./Layer-DAaIMucZ.js";import"./Text-Y2ry5wK9.js";import"./DOMUtils-DIK0_8l8.js";import"./Label-C_AgOq8t.js";import"./ZIndexLayer-B_am4wav.js";import"./types-BJnTryYo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-DR1I-OOn.js";import"./symbol-Cr0_TzMS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ynp9RdRd.js";import"./uniqBy-DrzaFqXi.js";import"./iteratee-DEWmF1v2.js";import"./Curve-C1DFTxWC.js";import"./step-DmCiiBno.js";import"./AnimatedItems-C6_8UlhB.js";import"./useAnimationId-iyUsFQUM.js";import"./ActivePoints-D2WCNAyw.js";import"./Dot-g0fXnjiJ.js";import"./RegisterGraphicalItemId-D2I1FNOP.js";import"./ErrorBarContext-DaF_EPCk.js";import"./GraphicalItemClipPath-48VFK23w.js";import"./SetGraphicalItem-CCK_hlSi.js";import"./getRadiusAndStrokeWidthFromDot-BrSt3YdC.js";import"./ActiveShapeUtils-CL8eHJZj.js";import"./Cross-BLQUhgMx.js";import"./Rectangle-BkYWDjed.js";import"./util-Dxo8gN5i.js";import"./Sector-DcWuVpie.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Et=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Et as __namedExportsOrder,Ct as default};
