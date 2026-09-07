import{r as i,R as e}from"./iframe-DTRlEa3u.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-BTet7hVQ.js";import{R as C}from"./zIndexSlice-CDXLYYsJ.js";import{L as s}from"./Line-CgbPcuvG.js";import{X as p}from"./XAxis-C0dwGi3V.js";import{T as c}from"./Tooltip-DkkZSB2g.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BBFKLgiK.js";import"./resolveDefaultProps-BJzTCoJ3.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DdPePiMV.js";import"./throttle-D6N_0nid.js";import"./index-CS48B7tj.js";import"./index-o_WhDpRH.js";import"./isWellBehavedNumber-BJiDbB8v.js";import"./d3-scale-5lZtxq-z.js";import"./index-CpmklETy.js";import"./index-Cvz-VVDw.js";import"./renderedTicksSlice-CMohq2ew.js";import"./index-BE7ByIQm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C0fRKmIL.js";import"./chartDataContext-0lwkG_AO.js";import"./CategoricalChart-Br64IOu-.js";import"./Layer-Cxb9aykb.js";import"./Curve-BqpssSWR.js";import"./types-BPUiziHz.js";import"./step-jNVSHd8N.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D3NTNo-L.js";import"./Label-CwRVD2C4.js";import"./Text-BwGttioZ.js";import"./DOMUtils-BlPhfohB.js";import"./useId-DA93zQ1i.js";import"./useBackwardsCompatibleTheme-Tyqh7EHZ.js";import"./ZIndexLayer-B42FtzLK.js";import"./useAnimationId-BQWcd1jo.js";import"./ActivePoints-DKYwbTj3.js";import"./Dot-Dein_ccS.js";import"./RegisterGraphicalItemId-NS8Y_EHr.js";import"./ErrorBarContext-B04e9oFc.js";import"./GraphicalItemClipPath-DCT6ZGzY.js";import"./SetGraphicalItem-D-a-mss5.js";import"./getRadiusAndStrokeWidthFromDot-scqYoR8I.js";import"./ActiveShapeUtils-0NSyvuwL.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CKsN-hMj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-DrFdHzWk.js";import"./uniqBy-C9ZtxYQ4.js";import"./iteratee-BjsuC6vd.js";import"./Cross-UjjRnaQl.js";import"./Rectangle-DwF3_6Yk.js";import"./util-Dxo8gN5i.js";import"./Sector-BAFgBTSh.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const [isHovered, setIsHovered] = useState(false);
    const onMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, [setIsHovered]);
    const onMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, [setIsHovered]);
    return <ResponsiveContainer width="100%" height={400}>
        <LineChart {...args}>
          <Line onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} dataKey="uv" strokeWidth={isHovered ? 8 : 4} animationDuration={5000} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div>
        <LineChart {...args} id="BookOne" className="BookOne">
          <Line isAnimationActive={false} name="BookOne" type="monotone" dataKey="uv" stroke="#111" />
          <XAxis dataKey="name" />
          <Tooltip active />
        </LineChart>
        <LineChart {...args} id="BookTwo" className="BookTwo">
          <Line isAnimationActive={false} name="BookTwo" type="monotone" dataKey="uv" stroke="#ff7300" />
          <XAxis dataKey="name" />
          <Tooltip />
        </LineChart>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    data: pageData,
    syncId: 'example-syncId',
    width: 400,
    height: 400
  }
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{r as API,n as SynchronizedTooltip,Ke as __namedExportsOrder,we as default};
