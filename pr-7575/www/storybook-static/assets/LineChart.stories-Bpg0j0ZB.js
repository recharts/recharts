import{r as s,R as e}from"./iframe-DzzybHr3.js";import{L as m}from"./LineChartArgs-C_clS3fs.js";import{g as y}from"./utils-ePvtT4un.js";import{p as A}from"./Page-Cj8EiXz7.js";import{L as i}from"./LineChart-D1ikP5A7.js";import{R as C}from"./zIndexSlice-APm024yE.js";import{L as n}from"./Line-B14pcOUO.js";import{X as p}from"./XAxis-C2N3vX2E.js";import{T as c}from"./Tooltip-CobaQ_RT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BQrYaWuY.js";import"./index-DKv_ekDa.js";import"./index-BbqbzQag.js";import"./index-CNtIrdbG.js";import"./index-YXsj3yx_.js";import"./throttle-DXJQ7qa7.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BnoTH0LX.js";import"./axisSelectors-DxliL3D-.js";import"./resolveDefaultProps-CV8kmKtp.js";import"./isWellBehavedNumber-DhXkb0Zj.js";import"./d3-scale-ikjFpXkq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C60EyfpF.js";import"./chartDataContext-mNy84WxM.js";import"./CategoricalChart-B7eTVHmG.js";import"./Layer-DBuOEsC-.js";import"./Curve-CgifKxr5.js";import"./types-Ck7x6Nhk.js";import"./step-CE07F2xj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CJCL0mBl.js";import"./Label-Yw7Q0JfB.js";import"./Text-CKYGhwj_.js";import"./DOMUtils-CofpyxHf.js";import"./ZIndexLayer-B65O7Oyl.js";import"./useAnimationId--dSVNcdm.js";import"./ActivePoints-gO5Bi9Sm.js";import"./Dot-BL6lif_-.js";import"./RegisterGraphicalItemId-r8RRCwhl.js";import"./ErrorBarContext-CW8Stc7O.js";import"./GraphicalItemClipPath-BPmTqE-t.js";import"./SetGraphicalItem-Dv_WYCgN.js";import"./getRadiusAndStrokeWidthFromDot-40lXrNs0.js";import"./ActiveShapeUtils-CXtuLtCa.js";import"./CartesianAxis-Bp9IVHGC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./useElementOffset-W4H7iZmy.js";import"./uniqBy-BUqH8mTU.js";import"./iteratee-B57Un0sM.js";import"./Cross-RNdBZ8CM.js";import"./Rectangle-1YG-OgZS.js";import"./util-Dxo8gN5i.js";import"./Sector-CzINYDTr.js";const Te={argTypes:m,component:i},r={name:"Simple",render:t=>{const[f,o]=s.useState(!1),k=s.useCallback(()=>{o(!0)},[o]),L=s.useCallback(()=>{o(!1)},[o]);return e.createElement(C,{width:"100%",height:400},e.createElement(i,{...t},e.createElement(n,{onMouseEnter:k,onMouseLeave:L,dataKey:"uv",strokeWidth:f?8:4,animationDuration:5e3})))},args:{...y(m),data:A}},a={render:t=>e.createElement("div",null,e.createElement(i,{...t,id:"BookOne",className:"BookOne"},e.createElement(n,{isAnimationActive:!1,name:"BookOne",type:"monotone",dataKey:"uv",stroke:"#111"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,{active:!0})),e.createElement(i,{...t,id:"BookTwo",className:"BookTwo"},e.createElement(n,{isAnimationActive:!1,name:"BookTwo",type:"monotone",dataKey:"uv",stroke:"#ff7300"}),e.createElement(p,{dataKey:"name"}),e.createElement(c,null))),args:{...y(m),data:A,syncId:"example-syncId",width:400,height:400}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
