import{r as n,e as t}from"./iframe-CjUtT138.js";import{L as p}from"./LineChart-CTmtrmot.js";import{R as s}from"./arrayEqualityCheck-B-tT2ESq.js";import{C as c}from"./CartesianGrid-CV6eQNdN.js";import{X as l}from"./XAxis-CEXHANTM.js";import{Y as d}from"./YAxis-Cz0XZWIE.js";import{L as y}from"./Legend-VMc9Q-gx.js";import{L as h}from"./Line-BZe_CoGr.js";import{T as u}from"./Tooltip-BKBpMuyG.js";import{R as g}from"./RechartsHookInspector-BSSs4sC-.js";import{p as K}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-it-0F-jx.js";import"./hooks-4UrLvWFw.js";import"./axisSelectors-BX9CBNHK.js";import"./zIndexSlice-DsVMOISz.js";import"./resolveDefaultProps-DXKWDAOg.js";import"./PolarUtils-_eTStEZn.js";import"./CartesianChart-DOBNNTq5.js";import"./chartDataContext-Cd_ntzly.js";import"./CategoricalChart-QNPsXY_1.js";import"./CartesianAxis-OEoEt9oE.js";import"./Layer-D_MGslDL.js";import"./Text-DwSJp926.js";import"./DOMUtils-D7gju_6v.js";import"./Label-BL8V4Wmg.js";import"./ZIndexLayer-DLNaK2nP.js";import"./types-C9Ftyw06.js";import"./Symbols-Lp37GtaH.js";import"./Curve-vYHSIBiw.js";import"./useElementOffset-BvQjE7ab.js";import"./iteratee-D11VEsjy.js";import"./ReactUtils-CHVaJjT2.js";import"./ActivePoints-ggcLh7it.js";import"./Dot-C7pBRmz2.js";import"./RegisterGraphicalItemId-BsU6Bbki.js";import"./ErrorBarContext-M64mzIpO.js";import"./GraphicalItemClipPath-BkNEqUtH.js";import"./SetGraphicalItem-pIRkDX-c.js";import"./useAnimationId-D51fABKH.js";import"./getRadiusAndStrokeWidthFromDot-BnN5ibWF.js";import"./ActiveShapeUtils-BsX54dsF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Btcn2slE.js";import"./Trapezoid-tluOV2am.js";import"./Sector-DLzrEVZJ.js";import"./Cross-B2bRvlIB.js";import"./index-CYZv41C2.js";import"./ChartSizeDimensions-CNTgDKUn.js";import"./OffsetShower-Cvrl070M.js";import"./PlotAreaShower-Bo9f_x1d.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
