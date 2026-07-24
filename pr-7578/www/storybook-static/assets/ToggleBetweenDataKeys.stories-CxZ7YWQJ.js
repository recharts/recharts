import{r as n,R as t}from"./iframe-Dz-8xobX.js";import{L as p}from"./LineChart-BnOu3hZ1.js";import{R as s}from"./zIndexSlice-DLGpG8sy.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CtOV40V3.js";import{X as d}from"./XAxis-DMj3Kvex.js";import{Y as y}from"./YAxis-BHn5bCj9.js";import{L as u}from"./Legend-D-2DjTxY.js";import{L as h}from"./Line-B2VZCiKC.js";import{T as g}from"./Tooltip-JL5ofiGR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BxZxX3d-.js";import"./index-D51_thAx.js";import"./index-nwbz6jJ6.js";import"./index-DwxVslcQ.js";import"./index-50xdzldc.js";import"./throttle-BhiZXvYf.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CUvwyxyl.js";import"./axisSelectors-RA5EatZ8.js";import"./resolveDefaultProps-jtUUwvO_.js";import"./isWellBehavedNumber-C60qZ5Lu.js";import"./d3-scale-Eu5vW6Yz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CXDvShYZ.js";import"./chartDataContext-DFkhy0VZ.js";import"./CategoricalChart-Dl3rCbrV.js";import"./CartesianAxis-BSXwVKyu.js";import"./Layer-DM8xvsTO.js";import"./Text-CvUE7W_7.js";import"./DOMUtils-9gmha4le.js";import"./Label-CUth2UOL.js";import"./ZIndexLayer-BepkwV1X.js";import"./types-B2b4Ay33.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-BD06pTHM.js";import"./symbol-mTWSg8U_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BzS3hzef.js";import"./uniqBy-C0Bh4kGh.js";import"./iteratee-DFjnW7Yu.js";import"./Curve-C_Qt5Biu.js";import"./step-B3JVaVSK.js";import"./AnimatedItems-C8QaJVru.js";import"./useAnimationId-DHQotoBY.js";import"./ActivePoints-nN-9PNcc.js";import"./Dot-HydkS6Pw.js";import"./RegisterGraphicalItemId-CqDct8KX.js";import"./ErrorBarContext-CHoqNUZJ.js";import"./GraphicalItemClipPath-DMz5gKke.js";import"./SetGraphicalItem-1qJXA-7o.js";import"./getRadiusAndStrokeWidthFromDot-j5D6edh7.js";import"./ActiveShapeUtils-C_pP3GP_.js";import"./Cross-CWvhF5sg.js";import"./Rectangle-BjULrVDC.js";import"./util-Dxo8gN5i.js";import"./Sector-BB_eiEE_.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
