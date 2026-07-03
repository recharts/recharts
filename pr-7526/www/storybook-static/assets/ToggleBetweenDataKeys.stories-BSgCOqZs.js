import{r as n,R as t}from"./iframe-C76fCBLt.js";import{L as p}from"./LineChart-DOYgkWFt.js";import{R as s}from"./zIndexSlice-BsJGnMmn.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CcFGtFNM.js";import{X as d}from"./XAxis-BrBJ2mML.js";import{Y as y}from"./YAxis-DFPJpwmP.js";import{L as u}from"./Legend-Ctxci9eX.js";import{L as h}from"./Line-DXBI9fRV.js";import{T as g}from"./Tooltip-BNwOVkwS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dp2Q4tlU.js";import"./index-CKV5D6qs.js";import"./index-CdgAhURM.js";import"./index-DNHm-Slh.js";import"./index-DdHCa9pO.js";import"./throttle-DuTovYxH.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-ChQt8XEs.js";import"./axisSelectors-44DsbA90.js";import"./resolveDefaultProps-B-pRQb2R.js";import"./isWellBehavedNumber-6CN-Ynbl.js";import"./d3-scale-X-nthEaw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DpIJVUtf.js";import"./chartDataContext-xuvA9xY5.js";import"./CategoricalChart-BizDpfsn.js";import"./CartesianAxis-Cfu8bLFh.js";import"./Layer-COsfpmfI.js";import"./Text-BtH4Ru5e.js";import"./DOMUtils-BPYJD_VQ.js";import"./Label-Dx0etugK.js";import"./ZIndexLayer-DTL30j5z.js";import"./types-BiK_KtGv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-B73T7BR7.js";import"./symbol-DJZWq1DC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BKWrj22b.js";import"./uniqBy-BisTCx5L.js";import"./iteratee-BmQyV-lV.js";import"./Curve-BzIujVSC.js";import"./step-UDFv_jwZ.js";import"./AnimatedItems-QpEnlZxo.js";import"./useAnimationId-CEbYcbZq.js";import"./ActivePoints-rl4j4hoo.js";import"./Dot-C9pDbdqv.js";import"./RegisterGraphicalItemId-D4GJEFJb.js";import"./ErrorBarContext-BvNNYD9p.js";import"./GraphicalItemClipPath-B6FRGk7o.js";import"./SetGraphicalItem-C9ktGnfi.js";import"./getRadiusAndStrokeWidthFromDot-DKT9RGri.js";import"./ActiveShapeUtils-PxqP6tZ6.js";import"./Cross-g7FHOHqR.js";import"./Rectangle-CCZ51hnY.js";import"./util-Dxo8gN5i.js";import"./Sector-BqIux5bx.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
