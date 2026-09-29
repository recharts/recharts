import{r as p,R as t}from"./iframe-CKQALtMh.js";import{L as n}from"./LineChart-BtsRTb-i.js";import{R as s}from"./zIndexSlice-DfJvDCP6.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bj0blnOP.js";import{X as d}from"./XAxis-B1w-DAje.js";import{Y as y}from"./YAxis-qP5Po20_.js";import{L as u}from"./Legend-BN-SMuns.js";import{L as h}from"./Line-CTa1vzcP.js";import{T as g}from"./Tooltip-DBFe6s2m.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C-mneK7p.js";import"./resolveDefaultProps-Bte-Mlhe.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BxBnek0X.js";import"./throttle-CNY-gU5B.js";import"./index-DtLHkBI_.js";import"./index-D_AzU2dp.js";import"./isWellBehavedNumber-B4yKamKp.js";import"./d3-scale-CKl8FJgi.js";import"./index-DzcUKgoB.js";import"./index-B2SRoqlS.js";import"./renderedTicksSlice-CPhSvJpG.js";import"./index-YCl9Eg2B.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-RyjjLogs.js";import"./chartDataContext-DKpOqV2G.js";import"./CategoricalChart-BidV4bcI.js";import"./CartesianAxis-D4n_YP7-.js";import"./Layer-B9JOU9_x.js";import"./Text-DyEflBvv.js";import"./DOMUtils-CBXByqiO.js";import"./useId-DvyhJk_e.js";import"./useBackwardsCompatibleTheme-Bv93_XfL.js";import"./Label-CkbIGog0.js";import"./ZIndexLayer-Crva3HCE.js";import"./types-CDJ3ls6u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DPTV3bc9.js";import"./symbol-3Q6SdgaO.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DRkOZJXl.js";import"./uniqBy-9yJLU1-D.js";import"./iteratee-jIVZW5Io.js";import"./Curve-BfhgeL_q.js";import"./step-D4hLR-8L.js";import"./AnimatedItems-DTXdR5ab.js";import"./useAnimationId-CKMmFYBQ.js";import"./ActivePoints-B_BVBzV5.js";import"./Dot-Bwc0vAX6.js";import"./RegisterGraphicalItemId-C8MFR-IS.js";import"./ErrorBarContext-rH9p4zIJ.js";import"./GraphicalItemClipPath-CinvHRPZ.js";import"./SetGraphicalItem-DsCqUb4K.js";import"./getRadiusAndStrokeWidthFromDot-DxuuP8od.js";import"./ActiveShapeUtils-CE5-o2on.js";import"./useGraphicalItemIdentity-DFDwkf_7.js";import"./Cross-r29ZOzL2.js";import"./Rectangle-CY_2zxpD.js";import"./util-Dxo8gN5i.js";import"./Sector-Bemb-3hf.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
