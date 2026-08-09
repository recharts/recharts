import{r as n,R as t}from"./iframe-L3U4PXsg.js";import{L as p}from"./LineChart-CgrYKISh.js";import{R as s}from"./zIndexSlice-DEY0PQhJ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BM8MKiJH.js";import{X as d}from"./XAxis-Cr6XecvK.js";import{Y as y}from"./YAxis-f7uBkTcv.js";import{L as u}from"./Legend-DtkrYBZW.js";import{L as h}from"./Line-C9P8vBQm.js";import{T as g}from"./Tooltip-D-aGw3D6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dhr4IQZK.js";import"./index-kTWfYntd.js";import"./index-ywjMrX_X.js";import"./index-Bc6oV31c.js";import"./index-DwDM_7Ax.js";import"./throttle-1AGwrNmW.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BUQrPPfP.js";import"./resolveDefaultProps-DZ-vNTge.js";import"./isWellBehavedNumber-BwlzE5Kb.js";import"./d3-scale-BML9T1At.js";import"./renderedTicksSlice-D2JO8twM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-INIUEhvM.js";import"./chartDataContext-EPhxp5b3.js";import"./CategoricalChart-mkEHtD3F.js";import"./CartesianAxis-DJ55n4uj.js";import"./Layer-CK7JaaLc.js";import"./Text-DovToi-v.js";import"./DOMUtils-BtvfpILU.js";import"./Label-B7Q2YiAq.js";import"./ZIndexLayer-Bn3RUVWt.js";import"./types-oKR4keO9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CsEJ0H_M.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C3FHvuf0.js";import"./symbol-Da9x_VYL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-AZryebb6.js";import"./uniqBy-BfdCN-YR.js";import"./iteratee-BsSJFXKh.js";import"./Curve-SKtCcge4.js";import"./step-0OJURZ58.js";import"./AnimatedItems-Cx-Jnru-.js";import"./useAnimationId-BO1w5K0N.js";import"./ActivePoints-DANj5o8Y.js";import"./Dot-B_tF6fjU.js";import"./RegisterGraphicalItemId-CUZSiPzN.js";import"./ErrorBarContext-BscpV9GC.js";import"./GraphicalItemClipPath-BgQIEIQL.js";import"./SetGraphicalItem-BkVYHSQy.js";import"./getRadiusAndStrokeWidthFromDot-HzlbV5QW.js";import"./ActiveShapeUtils-DLAF0QLB.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CNpsDkfV.js";import"./Rectangle-C4EXzzh1.js";import"./util-Dxo8gN5i.js";import"./Sector-D9JXQuE4.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
