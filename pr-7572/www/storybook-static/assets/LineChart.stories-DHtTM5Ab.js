import{r as s,R as e}from"./iframe-prgBh1Qf.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-5EVUS1SR.js";import{R as C}from"./zIndexSlice-DdjKeJcD.js";import{L as n}from"./Line-CWtP-uQX.js";import{X as p}from"./XAxis-BWvJnYnv.js";import{T as c}from"./Tooltip-Dv51Ni96.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-FIpEFVMR.js";import"./index-TRfcR2ow.js";import"./index-p6BXHd-9.js";import"./index-Bl_8pcbE.js";import"./index-DznvQCe0.js";import"./throttle-DhCsYq_l.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C3Oo4Aw2.js";import"./axisSelectors-HShZFAmb.js";import"./resolveDefaultProps-DEZlg4EB.js";import"./isWellBehavedNumber-DeolLGU-.js";import"./d3-scale-CthO7aNE.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-EDRdBXz4.js";import"./chartDataContext-BRCxcd-D.js";import"./CategoricalChart-C0JPuI-j.js";import"./Layer-B4SceqN1.js";import"./Curve-Dg6pMiMi.js";import"./types-BLB4Kpk-.js";import"./step-DljApQAs.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-JyKHnHqe.js";import"./Label-CpgdF2bt.js";import"./Text-XjkeXE_1.js";import"./DOMUtils-B922snu2.js";import"./ZIndexLayer-Coay8-vh.js";import"./useAnimationId-Dho-yl2L.js";import"./ActivePoints-C6psJDBD.js";import"./Dot-BOonALeI.js";import"./RegisterGraphicalItemId-QOUSEuOJ.js";import"./ErrorBarContext-_HsKWF8T.js";import"./GraphicalItemClipPath-D8U1RFPj.js";import"./SetGraphicalItem-cAeJSBXs.js";import"./getRadiusAndStrokeWidthFromDot-BYQTLLCN.js";import"./ActiveShapeUtils-CCY3sSOl.js";import"./CartesianAxis-DyI7y6fg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-Dz4nWuBf.js";import"./uniqBy-B9Vyigvh.js";import"./iteratee-rSndqGt-.js";import"./Cross-CjrGhwPB.js";import"./Rectangle-CHjX_Wi4.js";import"./util-Dxo8gN5i.js";import"./Sector-G3Ely8-T.js";const Te={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,v,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const Be=["API","SynchronizedTooltip"];export{r as API,a as SynchronizedTooltip,Be as __namedExportsOrder,Te as default};
