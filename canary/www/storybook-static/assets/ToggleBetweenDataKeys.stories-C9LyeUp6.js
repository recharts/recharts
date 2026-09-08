import{r as p,R as t}from"./iframe-DwQ960mE.js";import{L as n}from"./LineChart-V_88Us5c.js";import{R as s}from"./zIndexSlice-CRshAYou.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-EseD34jE.js";import{X as d}from"./XAxis-C3ApfTuq.js";import{Y as y}from"./YAxis-BMPG6Jn9.js";import{L as u}from"./Legend-Br1vdSSz.js";import{L as h}from"./Line-BsyPe3kF.js";import{T as g}from"./Tooltip-CFsSnKzW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CV7KCZiE.js";import"./resolveDefaultProps-yLRPEvQ6.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BuM-hXsR.js";import"./throttle-CBpng8v-.js";import"./index-934SWzTj.js";import"./index-BoR0gZ14.js";import"./isWellBehavedNumber-C8IRNLp2.js";import"./d3-scale-CB-MSXXc.js";import"./index-D_T8BRhY.js";import"./index-Dhp6LnMJ.js";import"./renderedTicksSlice-ByN1eXqa.js";import"./index-Cfk5_Nje.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D1gjFL-f.js";import"./chartDataContext-XXv1Y0Lr.js";import"./CategoricalChart-puUF4rGm.js";import"./CartesianAxis-B1j0Zzpr.js";import"./Layer-nbNG3urG.js";import"./Text-D31azkqa.js";import"./DOMUtils-jWrmId9V.js";import"./useId-Do6UThpj.js";import"./useBackwardsCompatibleTheme-1nd_EnAF.js";import"./Label-BnvMog58.js";import"./ZIndexLayer-CNwoXSbx.js";import"./types-BF5horUV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-rsnYG1uV.js";import"./symbol-B7Cm16Cp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Btc2x5AZ.js";import"./uniqBy-B5k5jdGw.js";import"./iteratee-C7BmF6bi.js";import"./Curve-DlR_mCFH.js";import"./step-fQiYLSQ2.js";import"./AnimatedItems--DCjDL7v.js";import"./useAnimationId-CgdCBqIf.js";import"./ActivePoints-Dl85NR7O.js";import"./Dot-B_Wd5Y7s.js";import"./RegisterGraphicalItemId-zN7Xc-Dd.js";import"./ErrorBarContext-C6-51rId.js";import"./GraphicalItemClipPath-BwWJK4tk.js";import"./SetGraphicalItem-DQfhPOxL.js";import"./getRadiusAndStrokeWidthFromDot-Bgbvlm_y.js";import"./ActiveShapeUtils-DQGjc9Is.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-Wbmju0Dn.js";import"./Rectangle-oko1PZRH.js";import"./util-Dxo8gN5i.js";import"./Sector-COcPp2JC.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
