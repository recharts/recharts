import{r as n,e as t}from"./iframe-Dnh1Ryvb.js";import{L as p}from"./LineChart-BGN89IIE.js";import{R as s}from"./arrayEqualityCheck-DCevfetv.js";import{C as c}from"./CartesianGrid-BznzeLYA.js";import{X as l}from"./XAxis-CR1tc-KL.js";import{Y as d}from"./YAxis-BShcefNK.js";import{L as y}from"./Legend-DNq5AodR.js";import{L as h}from"./Line-BA57OhZU.js";import{T as u}from"./Tooltip-DMtaWOlD.js";import{R as g}from"./RechartsHookInspector-DMji7YUm.js";import{p as K}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ch8zJvUN.js";import"./hooks-TRp6kMUA.js";import"./axisSelectors-CwAmoCkz.js";import"./zIndexSlice-BXugI2eB.js";import"./resolveDefaultProps-Coi4LBhI.js";import"./PolarUtils-Cgm959MD.js";import"./CartesianChart-B2M6TWiT.js";import"./chartDataContext-CqWHnJZ5.js";import"./CategoricalChart-BipcxAVd.js";import"./CartesianAxis-CXvREodt.js";import"./Layer-CG0lsnsl.js";import"./Text-DuqEZ_1u.js";import"./DOMUtils-Bor3dP_R.js";import"./Label-B-RHJFae.js";import"./ZIndexLayer-Bcm3_13n.js";import"./types-NxPc932w.js";import"./Symbols-Bi-3r2yZ.js";import"./Curve-CGOZKazJ.js";import"./useElementOffset-JFxjDGnz.js";import"./iteratee-KFvQ-6kW.js";import"./ReactUtils-09bip2qn.js";import"./ActivePoints-CXZHC2s7.js";import"./Dot-DDKiUYZY.js";import"./RegisterGraphicalItemId-vvLaBIlf.js";import"./ErrorBarContext-ELPHN1NQ.js";import"./GraphicalItemClipPath-DCk99Thz.js";import"./SetGraphicalItem-Dm7xV0AH.js";import"./useAnimationId-DymxHjdh.js";import"./getRadiusAndStrokeWidthFromDot-BiJeskmV.js";import"./ActiveShapeUtils-oJd1nGJX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-lOgApOPv.js";import"./Trapezoid-DqrFuhKX.js";import"./Sector-CK7LUajO.js";import"./Cross-Cjn-lYng.js";import"./index-BBrJvbdK.js";import"./ChartSizeDimensions-DbCZNQtH.js";import"./OffsetShower-DAcHGjow.js";import"./PlotAreaShower-5JxeAXKY.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
