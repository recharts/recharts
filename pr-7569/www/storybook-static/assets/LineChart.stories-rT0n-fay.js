import{r as s,R as e}from"./iframe-rlLReeiH.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-B7qTrTXd.js";import{R as C}from"./zIndexSlice-dET_x_8J.js";import{L as n}from"./Line-DYTHbSmy.js";import{X as p}from"./XAxis-BANsvQjN.js";import{T as c}from"./Tooltip-C3PSemc4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-2Dg61vQO.js";import"./index-BOTGdiK-.js";import"./index-QXSF1qjq.js";import"./index-CKdVYzDL.js";import"./index-Bbfl3u8C.js";import"./throttle-7RYQhcti.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-D5uSNu5L.js";import"./axisSelectors-RWAxTq2z.js";import"./resolveDefaultProps-Df8vYP0G.js";import"./isWellBehavedNumber-BS7XWWNW.js";import"./d3-scale-kKXY2gAc.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-keWWrUD3.js";import"./chartDataContext-ylOfrWr_.js";import"./CategoricalChart-z2rCkgdR.js";import"./Layer-yUpNfqTk.js";import"./Curve-7HuuJXLM.js";import"./types-Dt7L5GFC.js";import"./step-C_7J8XoD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DR-XZCrI.js";import"./Label-D0R02xnC.js";import"./Text-Bv5QIM4O.js";import"./DOMUtils-DlxBAltB.js";import"./ZIndexLayer-s_cuGEJZ.js";import"./useAnimationId-Dx24Y47b.js";import"./ActivePoints-CnoLHeSd.js";import"./Dot-BHxvOKDj.js";import"./RegisterGraphicalItemId-CQs7WMwj.js";import"./ErrorBarContext-DLDAQNmT.js";import"./GraphicalItemClipPath-DSUy1vxD.js";import"./SetGraphicalItem-D7UC0AFj.js";import"./getRadiusAndStrokeWidthFromDot-Bxzf33Tp.js";import"./ActiveShapeUtils-BqK4gs0R.js";import"./CartesianAxis-DB3D7e8-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-DCf9qhgC.js";import"./uniqBy-B2PaMH-m.js";import"./iteratee-jTXmCl0i.js";import"./Cross-DA0bkYZx.js";import"./Rectangle-IWxXL7PH.js";import"./util-Dxo8gN5i.js";import"./Sector-CefAybp9.js";const Te={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
