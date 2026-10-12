import{r as i,R as e}from"./iframe-BuvSZiBU.js";import{L as m}from"./LineChartArgs-C6kzjQAk.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as a}from"./LineChart-D79Znfgx.js";import{R as C}from"./zIndexSlice-CQnbxV7B.js";import{L as s}from"./Line-BUpD7j4-.js";import{X as p}from"./XAxis-BOfa2s22.js";import{T as c}from"./Tooltip-BZ4jR-Jc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DMwFRg1j.js";import"./resolveDefaultProps-BfSOVUjP.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DGKzkChq.js";import"./throttle-Csayz_X_.js";import"./index-BXTQQRSe.js";import"./index-hoeugXO7.js";import"./isWellBehavedNumber-B_8a6RB1.js";import"./d3-scale-B4_DxsXg.js";import"./index-C49MXgC-.js";import"./index-CItffRII.js";import"./renderedTicksSlice-CC7BtYy2.js";import"./index-Coj2gvLu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BHftvwV6.js";import"./chartDataContext-CCUXEs40.js";import"./CategoricalChart-4mWCyxjg.js";import"./Layer-DVAnIpPd.js";import"./Curve-DvYuS0m6.js";import"./types-EtJbnETm.js";import"./step-ozWCT_4L.js";import"./path-DyVhHtw_.js";import"./activeStyles-BmupzAye.js";import"./Label-w8cJkoy5.js";import"./Text-BkZYuu7y.js";import"./pageBackground-BDR7TGLv.js";import"./useId-BuSUlJ9G.js";import"./useBackwardsCompatibleTheme-CJX_yJan.js";import"./ZIndexLayer-CF-B9exK.js";import"./useAnimationId-CdC3v3R9.js";import"./dataEntryStyles-C1ODZzqS.js";import"./ActivePoints-CYsghgN3.js";import"./Dot-BP5vqlI3.js";import"./ErrorBarContext-PD-ezkzm.js";import"./GraphicalItemClipPath-a3qbNX5k.js";import"./SetGraphicalItem-DyRgogdT.js";import"./getRadiusAndStrokeWidthFromDot-JbdAO9HR.js";import"./ActiveShapeUtils-FNOwuhtO.js";import"./useEffectiveDataKey-DUlUrCLD.js";import"./CartesianAxis-BUinM5G-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useElementOffset-tkb_p-rH.js";import"./uniqBy-BFPywt7W.js";import"./iteratee-DgIW1Mxm.js";import"./Cross-CJRlAvh_.js";import"./Rectangle-DSr8qKkL.js";import"./util-Dxo8gN5i.js";import"./Sector-DP_bKBS8.js";const we={argTypes:m,component:a},r={name:"Simple",render:t=>{const[f,o]=i.useState(!1),k=i.useCallback(()=>{o(!0)},[o]),L=i.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(a,{...t},e.createElement(s,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},n={render:t=>e.createElement("div",null,e.createElement(a,{...t,id:"BookOne",className:"BookOne"},e.createElement(s,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(a,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(s,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}},Ke=["API","SynchronizedTooltip"];var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
