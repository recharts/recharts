import{r as p,R as t}from"./iframe-CLlZb5WL.js";import{L as n}from"./LineChart-CdlopD27.js";import{R as s}from"./zIndexSlice-C-cLRtN4.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BNeijhUJ.js";import{X as d}from"./XAxis-DBuW-REH.js";import{Y as y}from"./YAxis-BLqAl2VU.js";import{L as u}from"./Legend-Fqz34m2F.js";import{L as h}from"./Line-D7zCIp9R.js";import{T as g}from"./Tooltip-BnCF42xd.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BEo8N9ka.js";import"./resolveDefaultProps-CUiHCny8.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CGMVEYME.js";import"./throttle--RnCkAem.js";import"./index-BdtMEJny.js";import"./index-DCzwXD2o.js";import"./isWellBehavedNumber-BwmlGv0Y.js";import"./d3-scale-ehl80MUm.js";import"./index-BYYf9lpv.js";import"./index-Do3i96_1.js";import"./renderedTicksSlice-DFlg4CzS.js";import"./index-BIUIHb15.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CHomC56b.js";import"./chartDataContext-CuhB7l0S.js";import"./CategoricalChart-v23si-Wq.js";import"./CartesianAxis-CxGxQBTe.js";import"./Layer-BuwGQM2R.js";import"./Text-B9EUqwyc.js";import"./pageBackground-2CAg07jP.js";import"./useId-kcUEvBg4.js";import"./useBackwardsCompatibleTheme-Bfo5Qe72.js";import"./Label-yyQZOpZ1.js";import"./ZIndexLayer-Buoz0PG0.js";import"./types-nJd33CGk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CQNoTje8.js";import"./symbol-CCuh3uUP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Po4dJUCP.js";import"./uniqBy-Cz2J3eef.js";import"./iteratee-CPLYA7dn.js";import"./Curve-ByIUmGlM.js";import"./step-CBmZmkcc.js";import"./activeStyles-BadvgHow.js";import"./useAnimationId-DDy-DT0X.js";import"./dataEntryStyles-DY-TrJ76.js";import"./ActivePoints-2Ikh-s4p.js";import"./Dot-6T6__7vw.js";import"./ErrorBarContext-Bdt01u1A.js";import"./GraphicalItemClipPath-DZFjU2Jb.js";import"./SetGraphicalItem-B9oKhYwJ.js";import"./getRadiusAndStrokeWidthFromDot-DNx2I_LV.js";import"./ActiveShapeUtils-_yNwwF4x.js";import"./useEffectiveDataKey-DITcK2E7.js";import"./Cross-8FBDoCgf.js";import"./Rectangle-Coa83haY.js";import"./util-Dxo8gN5i.js";import"./Sector-CUA1u2vb.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
