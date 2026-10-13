import{r as p,R as t}from"./iframe-CvKbIuDU.js";import{L as n}from"./LineChart-CnHFAzW5.js";import{R as s}from"./zIndexSlice-DW-S4til.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dyl0x7Ll.js";import{X as d}from"./XAxis-Dp4FSOnR.js";import{Y as y}from"./YAxis-DizKApNp.js";import{L as u}from"./Legend-H7uJ9qDj.js";import{L as h}from"./Line-1Tl5OsJ3.js";import{T as g}from"./Tooltip-B_QeyoPN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Di3s7bBT.js";import"./resolveDefaultProps-DyOOAUIY.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BV2JW9EX.js";import"./throttle-BTM8S8gx.js";import"./index-Z4qAt8Yv.js";import"./index-BVbsRhGr.js";import"./isWellBehavedNumber-DlUs4F_M.js";import"./d3-scale-C5aBguhN.js";import"./index-BexOrbLc.js";import"./index-BIyuXW6c.js";import"./renderedTicksSlice-BomOCwRS.js";import"./index-B5qL6Iq2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CQJv70kz.js";import"./chartDataContext-CefKEXER.js";import"./CategoricalChart-BbjDOIaW.js";import"./CartesianAxis-BYZAVmga.js";import"./Layer-BNmLXrt-.js";import"./Text-B6N2t5jR.js";import"./pageBackground-ChMXawke.js";import"./useId-6H2iqgtd.js";import"./useBackwardsCompatibleTheme-CkVmHcf-.js";import"./Label-C9wGNRIk.js";import"./ZIndexLayer-C4jXpx6X.js";import"./types-ChWN3J9r.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DPWpbZ6Y.js";import"./symbol-BU0aMV8N.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bml3kAbb.js";import"./uniqBy-CQiqXRxs.js";import"./iteratee-CRQDYF1S.js";import"./Curve-CkMLKDtn.js";import"./step-DZOnd08g.js";import"./activeStyles-Cf2oumzq.js";import"./useAnimationId-DTylORVO.js";import"./dataEntryStyles-DpltKyOE.js";import"./ActivePoints-D5UTi5xW.js";import"./Dot-DCFEnowe.js";import"./ErrorBarContext-DAV26R-G.js";import"./GraphicalItemClipPath-BmBLy2cz.js";import"./SetGraphicalItem-fk9D7m_b.js";import"./getRadiusAndStrokeWidthFromDot-Dk6kygWL.js";import"./ActiveShapeUtils-DkA-OS5a.js";import"./useEffectiveDataKey-DWaNxJOV.js";import"./Cross-_edP6GcA.js";import"./Rectangle-Ca8NWDZ8.js";import"./util-Dxo8gN5i.js";import"./Sector-YOyxb4oy.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
