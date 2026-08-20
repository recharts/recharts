import{r as n,R as t}from"./iframe-1v9h95J8.js";import{L as p}from"./LineChart-D-lrOZr2.js";import{R as s}from"./zIndexSlice-BhjZ46tE.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CKmqzBjC.js";import{X as d}from"./XAxis-C3_Gtrrp.js";import{Y as y}from"./YAxis-DahzdkhC.js";import{L as u}from"./Legend-DJerxEMx.js";import{L as h}from"./Line-DFNe7bTs.js";import{T as g}from"./Tooltip-B2fMo0XT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-XwXOT9f_.js";import"./index-C_nXGIxS.js";import"./index-DKrzWSHd.js";import"./index-DorzE8c_.js";import"./index-C6o7i8Oe.js";import"./throttle-Dy0aiko3.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BWhm0UuR.js";import"./resolveDefaultProps-BhmjJgZI.js";import"./isWellBehavedNumber-IDGRCsZw.js";import"./d3-scale-qCvwfRiK.js";import"./renderedTicksSlice-CbFboWTW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dhkzwurf.js";import"./chartDataContext-ONZEIQIl.js";import"./CategoricalChart-3eK3rQ5j.js";import"./CartesianAxis-BrAAElTJ.js";import"./Layer-BGkgrUb2.js";import"./Text-t2WYL4eB.js";import"./DOMUtils-Duwm3W6u.js";import"./useId-BeY-WYzc.js";import"./useBackwardsCompatibleTheme-D-bpn3x_.js";import"./Label-CLKDqP8g.js";import"./ZIndexLayer-ClRRfs-A.js";import"./types-Bc5JlxqX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-vePz1Ugz.js";import"./symbol-D9KhyOxI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dyp5e5y2.js";import"./uniqBy-BO5r3yE5.js";import"./iteratee-CWaP7vY_.js";import"./Curve-CZh9TamE.js";import"./step-BpAcBh1s.js";import"./AnimatedItems-BtjOxZbL.js";import"./useAnimationId-1FoMJdgT.js";import"./ActivePoints-BMT_QtoQ.js";import"./Dot-BB2fWryZ.js";import"./RegisterGraphicalItemId-CM5ihZMg.js";import"./ErrorBarContext-7DKBlL9r.js";import"./GraphicalItemClipPath-CNT3Oe3B.js";import"./SetGraphicalItem-CrvsS0eI.js";import"./getRadiusAndStrokeWidthFromDot-BDAbQB1I.js";import"./ActiveShapeUtils-DyMxVbzF.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-D9rThth8.js";import"./Rectangle-BArip1lr.js";import"./util-Dxo8gN5i.js";import"./Sector-BTksePaH.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
